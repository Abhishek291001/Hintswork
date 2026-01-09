import cron from "node-cron";
import { User } from "../models/User.model.js";
import { SlotAssignment } from "../models/SlotAssignment.model.js";
import { Bundle } from "../models/Bundle.model.js";
import { Company } from "../models/Company.model.js";
import sendPush from "./sendPush.js";

cron.schedule("0 8,14,20 * * *", async () => {

  const hour = new Date().getHours();
  const slot = hour === 8 ? "morning" : hour === 14 ? "evening" : "night";

  const users = await User.find({ role: "employee", status: "active" });

  for (const user of users) {

    const company = await Company.findById(user.companyId).populate("planId");
    if (!company?.planId) continue;

    const limit = company.planId.bundlesPerSlot;

    const bundles = await Bundle.aggregate([
      { $match: { isActive: true } },
      { $sample: { size: limit } }
    ]);

    await SlotAssignment.create({
      userId: user._id,
      companyId: company._id,
      slot,
      bundleIds: bundles.map(b => b._id),
      deliveredAt: new Date(),
      expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000) // 4h expiry
    });

    await sendPush(user._id, `Your ${slot} hints are ready!`);
  }
});
