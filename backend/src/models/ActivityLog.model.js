const activitySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  companyId: mongoose.Schema.Types.ObjectId,
  bundleId: mongoose.Schema.Types.ObjectId,
  stepType: String,
  action: String,
  createdAt: { type: Date, default: Date.now }
});
