import { User } from "../models/User.model";

cron.schedule("0 23 * * *", async () => {

  const users = await User.find({ role: "employee" });

  for (const user of users) {

    const count = await SlotAssignment.countDocuments({
      userId: user._id,
      isCompleted: true,
      createdAt: { $gte: new Date(Date.now() - 24*60*60*1000) }
    });

    if (count === 3)
      await User.updateOne({ _id: user._id }, { $inc: { streak: 1, points: 10 } });
    else
      await User.updateOne({ _id: user._id }, { $set: { streak: 0 } });
  }
});
