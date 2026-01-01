import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Company } from "../models/Company.model.js";

// Public signup API
// export const signup = async (req, res) => {
//   try {
//         // console.log("Request body:", req.body);
// const { fullName, email, password, role, department, phoneNumber, companyId, assignedBrand, assignedPlan } = req.body;

//     // Validate input
//     if (!fullName || !email || !password || !role) {
//       return res.status(400).json({ message: "fullName, email, password and role are required" });
//     }

//     // Check if email exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(409).json({ message: "Email already registered" });

//     // // If admin, ensure company is unique
//     // if (role === "admin" && companyId) {
//     //   const existingAdminInCompany = await User.findOne({ role: "admin", companyId });
//     //   if (existingAdminInCompany) return res.status(400).json({ message: "Admin already exists for this company" });
//     // }
// if (!companyId) {
//   return res.status(400).json({ message: "Company ID is required" });
// }

//     const hashedPassword = await bcrypt.hash(password, 10);

//    const newUser = await User.create({
//   fullName,
//   email,
//   password: hashedPassword,
//   role,
//   department: department || null,
//   phoneNumber: phoneNumber || null,   // added here
//   companyId: companyId,
//   assignedBrand: assignedBrand || null,
//   assignedPlan: assignedPlan || "free",
//   createdBy: null,
// });


//     const token = jwt.sign(
//   {
//     userId: newUser._id,
//     role: newUser.role,
//     companyId: newUser.companyId, // ✅ correct
//   },
//   process.env.JWT_SECRET,
//   { expiresIn: "1d" }
// );


//     res.status(201).json({
//       message: `${role} created successfully`,
//       token,
//       user: newUser,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };



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

// export const updateCompany = async (req, res) => {
//   try {
//     const { userId } = req.params; // e.g., /api/users/:userId/company
//     const { companyName } = req.body;

//     if (!companyName) return res.status(400).json({ message: "Company name is required" });

//     // Create company
//     const company = await Company.create({ name: companyName, createdBy: userId });

//     // Assign company to user
//     const user = await User.findByIdAndUpdate(userId, { company: company._id }, { new: true });

//     res.status(200).json({ message: "Company added", user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

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
