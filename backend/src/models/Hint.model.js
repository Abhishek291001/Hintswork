import mongoose from "mongoose";

const hintSchema = new mongoose.Schema(
  {
    // type: {
    //   type: String,
    //   required: true,
    //   index: true,
    // },
     category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    default: null   // ❌ remove required:true
  },

    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Brand",
    //   required: true,
    //   index: true,
    // },

    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
      required: true,
    },

    approvalRequired: {
      type: Boolean,
      default: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // admin/manager
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * Text search for hints
 */
hintSchema.index({
  title: "text",
  description: "text",
});

export const Hint = mongoose.model("Hint", hintSchema);
