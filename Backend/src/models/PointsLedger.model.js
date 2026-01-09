const pointsLedgerSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  companyId: mongoose.Schema.Types.ObjectId,
  points: Number,
  reason: String,
  createdAt: Date
});
