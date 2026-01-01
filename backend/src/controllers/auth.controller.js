import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import {ResetToken } from "../models/ResetToken.model.js";


export const adminSignup = async (req, res) => {
  const { fullName, email, password, companyName } = req.body;

  const company = await Company.create({ name: companyName });

  const hashed = await bcrypt.hash(password, 10);

  const admin = await User.create({
    fullName,
    email,
    password: hashed,
    role: "admin",
    companyId: company._id
  });

  const token = jwt.sign(
    { userId: admin._id, role: admin.role, companyId: company._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(201).json({ token, admin, company });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2️⃣ Find user by email ONLY
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Check status
    if (user.status !== "active") {
      return res.status(403).json({ message: "Account inactive" });
    }

    // 4️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 5️⃣ JWT (companyId from DB)
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        companyId: user.companyId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        role: user.role,
        companyId: user.companyId,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // 🔹 Find user by email only
//     const user = await User.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     if (user.status !== "active") {
//       return res.status(403).json({ message: "Account inactive" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       {
//         userId: user._id,
//         role: user.role,
//         companyId: user.companyId,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(200).json({
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         role: user.role,
//         companyId: user.companyId,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // 1️⃣ Validate input
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // 2️⃣ Find user
    const user = await User.findOne({ email });
    if (!user) {
      // Do NOT reveal whether email exists (security best practice)
      return res.status(200).json({ message: "If email exists, OTP has been sent" });
    }

    // 3️⃣ Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 4️⃣ Remove old OTPs
    await ResetTokenModels.deleteMany({ userId: user._id });

    // 5️⃣ Hash OTP
    const hashedOtp = await bcrypt.hash(otp, 10);

    // 6️⃣ Save OTP
    await ResetTokenModels.create({
      userId: user._id,
      otpHash: hashedOtp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    });

    // 7️⃣ Email transporter (same credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 8️⃣ Send email
    await transporter.sendMail({
      from: `"HintsWork Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Your Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Password Reset</h2>
          <p>Use the OTP below to reset your password:</p>
          <h1 style="letter-spacing:4px;">${otp}</h1>
          <p>This OTP is valid for <strong>10 minutes</strong>.</p>
          <p>If you didn’t request this, you can safely ignore this email.</p>
          <br/>
          <small>— HintsWork Team</small>
        </div>
      `,
    });

    // 9️⃣ Response
    res.status(200).json({ message: "OTP sent successfully" });

  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const tokenData = await ResetToken.findOne({
      userId: user._id,
      expiresAt: { $gt: Date.now() }
    });

    if (!tokenData) {
      return res.status(400).json({ message: "OTP expired or invalid" });
    }

    const isValid = await bcrypt.compare(otp, tokenData.otpHash);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Mark OTP as used
    await ResetToken.deleteOne({ _id: tokenData._id });

    // Create short-lived reset token
    const resetToken = jwt.sign(
      { userId: user._id, purpose: "password-reset" },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.status(200).json({ resetToken });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Reset token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.purpose !== "password-reset") {
      return res.status(403).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isSame = await bcrypt.compare(newPassword, user.password);
    if (isSame) {
      return res.status(400).json({ message: "Password must be different" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    res.status(500).json({ message: "Invalid or expired token" });
  }
};
