const companySchema = new mongoose.Schema({
  name: String,
  domain: String,  // used for SSO later

  branding: {
    logo: String,
    appName: String,
    primaryColor: String,
  },

  defaultSlots: [
    { name: String, start: String, end: String }
  ],

  planId: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" }
});

