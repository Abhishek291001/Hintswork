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
    enum: ["Superadmin", "admin", "employee"],
    default: "employee",
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

//   subscription: {
//     type: String,
//     enum: ["inactive", "active"],
//     default: "inactive",
//   },

//   assignedBrand: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Brand",
//   default: null,
//   index: true,
// },

//   assignedPlan: {
//     type: String,
//     enum: ["free", "starter", "pro"],
//     default: "free",
//     index: true,
//   },

 companyId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Company",
  default: null,
  index: true
},



points: { type: Number, default: 0 },
streak: { type: Number, default: 0 },
lastCompletedSlot: { type: String }, // morning / evening / night



  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
}, { timestamps: true });

// Text search index
// userSchema.index({
//   fullName: "text",
//   email: "text",
//   department: "text",
// });

userSchema.index({ email: 1, companyId: 1 }, { unique: true });


export const User = mongoose.model("User", userSchema);
