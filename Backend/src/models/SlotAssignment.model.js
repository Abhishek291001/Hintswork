// const slotAssignmentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
//   companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", index: true },
//   slot: String,
//   bundleIds: [mongoose.Schema.Types.ObjectId],
//   deliveredAt: Date,
//   expiresAt: Date,
//   isCompleted: { type: Boolean, default: false }
// });

// slotAssignmentSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const slotAssignmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", index: true },

  slot: { type: String, enum: ["morning", "evening", "night"] },

  bundleIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bundle" }],

  deliveredAt: Date,
  expiresAt: Date,

  isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

slotAssignmentSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const SlotAssignment = mongoose.model("SlotAssignment", slotAssignmentSchema);
