import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, trim: true },
  domain: { type: String, lowercase: true },

  branding: {
    logo: String,
    appName: String,
    primaryColor: String,
  },

  status: {
    type: String,
    enum: ["incomplete", "active"],
    default: "incomplete",
  },

  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
    default: null,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });


export const Company = mongoose.model("Company", companySchema);

