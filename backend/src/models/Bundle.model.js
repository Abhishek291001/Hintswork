const bundleSchema = new mongoose.Schema({
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", index: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },

  variationKey: String,

  steps: [
    { type: { type: String, enum: ["HINT", "HINT_PLUS", "HINT_PLUS_PLUS"] }, content: String }
  ],

  isActive: Boolean
});
