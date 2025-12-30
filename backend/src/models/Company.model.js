import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // UNIQUE company name
  subscriptionStatus: { type: String, enum: ["inactive", "active"], default: "inactive" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);
