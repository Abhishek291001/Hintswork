import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true, // password is required for login
    },
    department: {
      type: String,
      required: true,
    },
    avatar: {
      public_id: { type: String, default: null },
      url: { type: String, default: null },
    },
    role: {
      type: String,
      enum: ["admin", "manager", "employee"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
