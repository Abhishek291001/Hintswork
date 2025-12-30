import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Public signup API
export const signup = async (req, res) => {
  try {
        // console.log("Request body:", req.body);
const { fullName, email, password, role, department, phoneNumber, companyId, assignedBrand, assignedPlan } = req.body;

    // Validate input
    if (!fullName || !email || !password || !role) {
      return res.status(400).json({ message: "fullName, email, password and role are required" });
    }

    // Check if email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "Email already registered" });

    // // If admin, ensure company is unique
    // if (role === "admin" && companyId) {
    //   const existingAdminInCompany = await User.findOne({ role: "admin", companyId });
    //   if (existingAdminInCompany) return res.status(400).json({ message: "Admin already exists for this company" });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

   const newUser = await User.create({
  fullName,
  email,
  password: hashedPassword,
  role,
  department: department || null,
  phoneNumber: phoneNumber || null,   // added here
  company: companyId || null,
  assignedBrand: assignedBrand || null,
  assignedPlan: assignedPlan || "free",
  createdBy: null,
});


    const token = jwt.sign(
      {
        userId: newUser._id,
        role: newUser.role,
        company: newUser.company || null,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: `${role} created successfully`,
      token,
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { userId } = req.params; // e.g., /api/users/:userId/company
    const { companyName } = req.body;

    if (!companyName) return res.status(400).json({ message: "Company name is required" });

    // Create company
    const company = await Company.create({ name: companyName, createdBy: userId });

    // Assign company to user
    const user = await User.findByIdAndUpdate(userId, { company: company._id }, { new: true });

    res.status(200).json({ message: "Company added", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addUserByAdmin = async (req, res) => {
  try {
    const { fullName, email, password, role, department, assignedBrand, assignedPlan } = req.body;

    // Only admin can create
    if (req.userRole !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    if (!["manager", "employee"].includes(role)) {
      return res.status(400).json({ message: "Invalid role for admin creation" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      department: department || null,
      company: req.userCompanyId, // inherited from admin
      assignedBrand: assignedBrand || null,
      assignedPlan: assignedPlan || "free",
      createdBy: req.userId,
    });

    res.status(201).json({
      message: `${role} created successfully by admin`,
      user: newUser,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// GET /api/users/me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
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

/**
 * DELETE /api/users/me
 */
export const deleteMe = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.userId);
    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
