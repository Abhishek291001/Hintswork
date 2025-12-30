import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  password: { type: String, required: true },

  department: { type: String }, // optional for simple users

  avatar: {
    public_id: { type: String, default: null },
    url: { type: String, default: null },
  },
  phoneNumber: { 
    type: String, 
    required: false,   // optional at signup
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"],
    default: "employee",
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

  subscription: {
    type: String,
    enum: ["inactive", "active"],
    default: "inactive",
  },

  assignedBrand: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Brand",
  default: null,
  index: true,
},

  assignedPlan: {
    type: String,
    enum: ["free", "starter", "pro"],
    default: "free",
    index: true,
  },

  company: { 
  type: mongoose.Schema.Types.ObjectId, 
  ref: "Company", 
  required: false,   // optional now
  index: true 
},


  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
}, { timestamps: true });

// Text search index
userSchema.index({
  fullName: "text",
  email: "text",
  department: "text",
});

export const User = mongoose.model("User", userSchema);
