import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   index: true,
    // },
    name: {
  type: String,
  required: true,
  trim: true,
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
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", default: null },
    isSystemBrand: { type: Boolean, default: true }

  },
  { timestamps: true }
);

brandSchema.index({ name: 1, companyId: 1 }, { unique: true });

export const Brand = mongoose.model("Brand", brandSchema);
