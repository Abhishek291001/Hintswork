import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    shortDescription: {
      type: String,
      required: true,
      maxlength: 300,
    },

    image: {
      public_id: String,
      url: String,
    },

    totalHints: {
      type: Number,
      default: 0, // cached value
    },
  },
  { timestamps: true }
);

export const Brand = mongoose.model("Brand", brandSchema);
