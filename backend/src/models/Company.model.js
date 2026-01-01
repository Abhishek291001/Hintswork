// const companySchema = new mongoose.Schema({
//   name: String,
//   domain: String,  // used for SSO later

//   branding: {
//     logo: String,
//     appName: String,
//     primaryColor: String,
//   },

//   defaultSlots: [
//     { name: String, start: String, end: String }
//   ],

//   planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" }
// });
import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String },
  domain: { type: String },

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

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
  },
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);
