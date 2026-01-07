import { Hint } from "../models/hint.model.js";

import { Brand } from "../models/brand.model.js";

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



// working without brand 



// export const createHint = async (req, res) => {
//   try {
//     const { brandId, title, description } = req.body;

//     if (!title || !description)
//       return res.status(400).json({ message: "Title and description required" });

//     const hint = await Hint.create({
//       // type: "TEXT",
//       category: brandId || null,  // allow null
//       title,
//       description,
//       createdBy: req.user.userId,
//       status: "approved"
//     });

//     res.status(201).json({ message: "Hint created", hint });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

export const createHint = async (req, res) => {
  try {
    const { brandId, title, description } = req.body;

    if (!title || !description)
      return res.status(400).json({ message: "Title and description required" });

    let brand = null;

    if (brandId) {
      brand = await Brand.findOne({
        _id: brandId,
        companyId: req.user.companyId
      });

      if (!brand)
        return res.status(403).json({ message: "Invalid brand for your company" });
    }

    const hint = await Hint.create({
      category: brand ? brand._id : null,
      title,
      description,
      createdBy: req.user.userId,
      companyId: req.user.companyId,
      status: "pending"
    });


    res.status(201).json({ message: "Hint created", hint });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// DELETE /api/company/admin/hints/:id
export const deleteHint = async (req, res) => {
  try {
    const { id } = req.params;

    // Find hint created by admin within their company
    const hint = await Hint.findOne({
      _id: id,
      createdBy: req.user.userId,  // only the creator can delete
    });

    if (!hint) {
      return res.status(404).json({ message: "Hint not found or you don't have permission" });
    }

    await hint.remove();

    res.status(200).json({ message: "Hint deleted successfully" });
  } catch (err) {
    console.error("Delete hint error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/admin/hints
// {
//   "brandId": "65fb8c...",
//   "title": "Morning Stretch",
//   "description": "Do light stretching for 5 minutes after waking up"
// }




export const getHintsByBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const page = parseInt(req.query.page || 1);
    const limit = Math.min(50, parseInt(req.query.limit || 20));
    const skip = (page - 1) * limit;

    const filter = {
      companyId: req.user.companyId,
      category: brandId
    };

    const [hints, total] = await Promise.all([
      Hint.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select("title description status createdAt")
        .lean(),

      Hint.countDocuments(filter)
    ]);

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      total,
      hints
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



