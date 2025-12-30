import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true, // search
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
      required: true,
      select: false, // security
    },

    department: {
      type: String,
      required: true,
      index: true,
    },

    

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      index: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // admin or manager
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);



export const Employee = mongoose.model("Employee", employeeSchema);
