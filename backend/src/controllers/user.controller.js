import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Company } from "../models/Company.model.js";


export const signup = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber,department } = req.body;

    // Validate input
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "fullName, email and password are required",
      });
    }

    // Check if email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 1️⃣ Create ADMIN user (companyId temporarily null)
    const admin = await User.create({
      fullName,
      email,
      password: hashedPassword,
       department: department || null,
      role: "admin",
      phoneNumber: phoneNumber || null,
    });

    // 2️⃣ Create EMPTY company shell
    const company = await Company.create({
      createdBy: admin._id,
      status: "incomplete",
    });

    // 3️⃣ Attach company to admin
    admin.companyId = company._id;
    await admin.save();

    // 4️⃣ JWT
    const token = jwt.sign(
      {
        userId: admin._id,
        role: admin.role,
        companyId: admin.companyId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: "Admin created successfully",
      token,
      user: admin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getEmployees = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Only admin allowed" });

    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 10, 30);
    const search = req.query.search?.trim();
    const skip = (page - 1) * limit;

    const filter = {
      role: "employee",
      companyId: req.user.companyId,
      createdBy: req.user.userId,
      status: "active"
    };

    if (search) {
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } }
      ];
    }

    const [employees, total] = await Promise.all([
      User.find(filter)
        .select("-password")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),

      User.countDocuments(filter)
    ]);

    res.status(200).json({
      employees,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (err) {
    console.error("Fetch employees error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const addEmployee = async (req, res) => {
  const { fullName, email, password, department } = req.body;

  const existing = await User.findOne({
    email,
    companyId: req.user.companyId
  });

  if (existing)
    return res.status(409).json({ message: "User already exists in company" });

  const hashed = await bcrypt.hash(password, 10);

  const employee = await User.create({
    fullName,
    email,
    password: hashed,
    role: "employee",
    department,
    companyId: req.user.companyId,
    createdBy: req.user.userId
  });

  res.status(201).json({ message: "Employee created", employee });
};
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    let filter = { _id: id, role: "employee" };

    // Admin → only own created employees
    if (req.user.role === "admin") {
      filter.companyId = req.user.companyId;
      filter.createdBy = req.user.userId;
    }

    // Superadmin → all employees
    if (req.user.role !== "admin" && req.user.role !== "Superadmin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const employee = await User.findOne(filter).select("-password");

    if (!employee)
      return res.status(404).json({ message: "Employee not found or unauthorized" });

    res.status(200).json(employee);

  } catch (err) {
    console.error("Get employee error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, department, status } = req.body;

    let filter = { _id: id, role: "employee" };

    if (req.user.role === "admin") {
      filter.companyId = req.user.companyId;
      filter.createdBy = req.user.userId;
    }

    if (req.user.role !== "admin" && req.user.role !== "Superadmin")
      return res.status(403).json({ message: "Access denied" });

    const employee = await User.findOneAndUpdate(
      filter,
      { $set: { fullName, department, status } },
      { new: true }
    ).select("-password");

    if (!employee)
      return res.status(404).json({ message: "Employee not found or unauthorized" });

    res.status(200).json({ message: "Employee updated", employee });

  } catch (err) {
    console.error("Update employee error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    let filter = { _id: id, role: "employee" };

    if (req.user.role === "admin") {
      filter.companyId = req.user.companyId;
      filter.createdBy = req.user.userId;
    }

    if (req.user.role !== "admin" && req.user.role !== "Superadmin")
      return res.status(403).json({ message: "Access denied" });

    const employee = await User.findOneAndUpdate(
      filter,
      { status: "inactive" },
      { new: true }
    );

    if (!employee)
      return res.status(404).json({ message: "Employee not found or unauthorized" });

    res.status(200).json({ message: "Employee deleted successfully" });

  } catch (err) {
    console.error("Delete employee error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
// GET /api/users/me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Wrap in { user: ... } for frontend consistency
    res.status(200).json({ user });
  } catch (error) {
    console.error("getMe error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Patch /api/users/me
 
export const updateMe = async (req, res) => {
  try {
    const allowedUpdates = ["fullName", "department", "avatar", "phoneNumber"];
    const updates = {};

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      updates,
      { new: true, runValidators: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/users/me
 
export const deleteMe = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.userId);
    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

