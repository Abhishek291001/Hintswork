// import { User } from "../models/User.model.js";

/**
 * Create Admin or Manager
 * Access: Admin only
 */
// export const createAdminOrManager = async (req, res) => {
//   try {
//     const { fullName, email, department, role, avatar } = req.body;

//     // Only admin can create admin or manager
//     if (req.user.role !== "admin") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     // Validate role
//     if (!["admin", "manager"].includes(role)) {
//       return res.status(400).json({ message: "Invalid role" });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const user = await User.create({
//       fullName,
//       email,
//       department,
//       role,
//       avatar: avatar || {},
//       createdBy: req.user._id,
//     });

//     res.status(201).json({
//       message: `${role} created successfully`,
//       user,
//     });
//   } catch (error) {
//     console.error("Create user error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
import { User } from "../models/User.model.js";

export const createAdminOrManager = async (req, res) => {
  try {
    const { fullName, email, department, role, avatar } = req.body;

    // Validate role
    if (!["admin", "manager"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      fullName,
      email,
      department,
      role,
      avatar: avatar || {},
      createdBy: null, // no creator since no auth
    });

    res.status(201).json({
      message: `${role} created successfully`,
      user,
    });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



// Create Admin (no auth for first admin)

import bcrypt from "bcryptjs";
// Create Admin with password
export const createAdmin = async (req, res) => {
  try {
    const { fullName, email, department, password, avatar } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {  
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await User.create({
      fullName,
      email,
      password: hashedPassword,
      department,
      role: "admin",
      avatar: avatar || {},
      createdBy: null,
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin: {
        _id: admin._id,
        fullName: admin.fullName,
        email: admin.email,
        department: admin.department,
        role: admin.role,
        avatar: admin.avatar,
        status: admin.status,
      },
    });
  } catch (error) {
    console.error("Create admin error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

