import { Hint } from "../models/hint.model.js";

export const getCurrentSlot = async (req,res) => {

  const now = new Date();
  const slot = now.getHours() < 12 ? "morning" :
               now.getHours() < 18 ? "evening" : "night";

  const data = await SlotAssignment.findOne({
    userId: req.user.userId,
    slot,
    expiresAt: { $gt: new Date() }
  }).populate("bundleIds");

  res.json(data);
};

export const completeHint = async (req,res) => {

  const { bundleId } = req.body;

  await Activity.create({
    userId: req.user.userId,
    companyId: req.user.companyId,
    bundleId,
    stepType: "HINT_PLUS_PLUS",
    action: "DONE"
  });

  await SlotAssignment.updateOne(
    { userId: req.user.userId, slot: req.body.slot },
    { $set: { isCompleted: true } }
  );

  res.json({ message: "Hint completed" });
};


// POST /api/admin/hints
// {
//   "brandId": "65fb8c...",
//   "title": "Morning Stretch",
//   "description": "Do light stretching for 5 minutes after waking up"
// }



// export const createHint = async (req, res) => {
//   try {
//     const { brandId, title, description } = req.body;

//     if (!brandId || !title || !description)
//       return res.status(400).json({ message: "All fields required" });

//     const hint = await Hint.create({
//       type: "TEXT",
//       category: brandId,
//       title,
//       description,
//       createdBy: req.user.userId,
//       status: "approved" // or pending if approval flow
//     });

//     res.status(201).json({ message: "Hint created", hint });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



// working without brand 



export const createHint = async (req, res) => {
  try {
    const { brandId, title, description } = req.body;

    if (!title || !description)
      return res.status(400).json({ message: "Title and description required" });

    const hint = await Hint.create({
      type: "TEXT",
      category: brandId || null,  // allow null
      title,
      description,
      createdBy: req.user.userId,
      status: "approved"
    });

    res.status(201).json({ message: "Hint created", hint });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
