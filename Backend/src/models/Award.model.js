import mongoose from "mongoose";

const awardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    logo: {
      public_id: { type: String, default: null },
      url: { type: String, default: null },
    },
    tier: { 
      type: String, 
      enum: ["silver", "bronze", "gold"], 
      required: true 
    },
    points: { type: Number, required: true },
    status: { 
      type: String, 
      enum: ["active", "inactive"], 
      default: "active" 
    },
    companyId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Company", 
      required: true, 
      index: true 
    },
    createdBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
  },
  { timestamps: true }
);

// Company + name uniqueness
awardSchema.index({ companyId: 1, name: 1 }, { unique: true });

export const Award = mongoose.model("Award", awardSchema);
