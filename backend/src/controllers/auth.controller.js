import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import {ResetToken } from "../models/ResetToken.model.js";




export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 3. Check status
    if (user.status !== "active") {
      return res.status(403).json({
        message: "Account is inactive",
      });
    }

    // 4. Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 5. Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 6. Respond (never send password)
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        department: user.department,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};


// export const forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res
//         .status(200)
//         .json({ message: "If email exists, OTP has been sent" });
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     await ResetTokenModels.deleteMany({ userId: user._id });

//     const hashedOtp = await bcrypt.hash(otp, 10);

//     await ResetTokenModels.create({
//       userId: user._id,
//       otpHash: hashedOtp,
//       expiresAt: new Date(Date.now() + 10 * 60 * 1000),
//     });

//     // ===== Ethereal setup =====
//     const testAccount = await nodemailer.createTestAccount();

//     const transporter = nodemailer.createTransport({
//       host: testAccount.smtp.host,
//       port: testAccount.smtp.port,
//       secure: testAccount.smtp.secure, // true for 465, false for other ports
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `"HintsWork Support" <${testAccount.user}>`,
//       to: user.email,
//       subject: "Your Password Reset OTP",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height:1.6;">
//           <h2>Password Reset</h2>
//           <p>Use the OTP below to reset your password:</p>
//           <h1 style="letter-spacing:4px;">${otp}</h1>
//           <p>This OTP is valid for <strong>10 minutes</strong>.</p>
//           <p>If you didn’t request this, you can safely ignore this email.</p>
//           <br/>
//           <small>— HintsWork Team</small>
//         </div>
//       `,
//     });

//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//     res.status(200).json({
//       message: "OTP sent successfully",
//       previewUrl: nodemailer.getTestMessageUrl(info), // For testing only
//     });

//   } catch (error) {
//     console.error("Forgot Password Error:", error);
//     res.status(500).json({ message: "Failed to send OTP" });
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
