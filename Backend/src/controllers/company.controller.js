import { Company } from "../models/Company.model.js";
import { Award } from "../models/Award.model.js";

export const updateCompany = async (req, res) => {
  const { name, domain } = req.body;

  if (!name || !domain)
    return res.status(400).json({ message: "Name and domain required" });

  const company = await Company.findOne({
    _id: req.user.companyId,
    createdBy: req.user.userId
  });

  if (!company)
    return res.status(404).json({ message: "Company not found" });

  company.name = name;
  company.domain = domain;
  company.status = "active";

  await company.save();

  res.json({ message: "Company updated", company });
};

export const getCompanyProfile = async (req, res) => {
  try {
    const company = await Company.findById(req.user.companyId);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.json({
      company: {
        name: company.name || "",
        domain: company.domain || "",
        status: company.status,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/**
 * Create Award
 */
export const createAward = async (req, res) => {
  try {
    const { name, tier, points, logo } = req.body;

    if (!name || !tier || points === undefined) 
      return res.status(400).json({ message: "Name, tier, and points are required" });

    // Ensure unique per company
    const exists = await Award.findOne({
      name: new RegExp(`^${name}$`, "i"),
      companyId: req.user.companyId
    });
    if (exists)
      return res.status(409).json({ message: "Award already exists" });

    const award = await Award.create({
      name,
      tier,
      points,
      logo: logo || null,
      companyId: req.user.companyId,
      createdBy: req.user.userId,
      status: "active"
    });

    res.status(201).json({ message: "Award created", award });

  } catch (err) {
    console.error("Create Award error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Fetch all company awards (with pagination & optional search)
 */
export const getAwards = async (req, res) => {
  try {
    const page  = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 20, 50);
    const search = req.query.search?.trim();
    const skip  = (page - 1) * limit;

    const filter = { companyId: req.user.companyId };

    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const [awards, total] = await Promise.all([
      Award.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Award.countDocuments(filter)
    ]);

    res.json({
      awards,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (err) {
    console.error("Get Awards error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Fetch award by ID
 */
export const getAwardById = async (req, res) => {
  try {
    const { id } = req.params;

    const award = await Award.findOne({
      _id: id,
      companyId: req.user.companyId
    }).lean();

    if (!award)
      return res.status(404).json({ message: "Award not found" });

    res.json({ award });

  } catch (err) {
    console.error("Get Award by ID error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Update Award
 */
export const updateAward = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, tier, points, status, logo } = req.body;

    if (!name && !tier && points === undefined && !status && !logo)
      return res.status(400).json({ message: "Nothing to update" });

    const award = await Award.findOne({
      _id: id,
      companyId: req.user.companyId
    });

    if (!award)
      return res.status(404).json({ message: "Award not found" });

    if (name) award.name = name;
    if (tier) award.tier = tier;
    if (points !== undefined) award.points = points;
    if (status) award.status = status;
    if (logo) award.logo = logo;

    await award.save();

    res.json({ message: "Award updated", award });

  } catch (err) {
    console.error("Update Award error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Delete Award
 */
export const deleteAward = async (req, res) => {
  try {
    const { id } = req.params;

    const award = await Award.findOne({
      _id: id,
      companyId: req.user.companyId
    });

    if (!award)
      return res.status(404).json({ message: "Award not found" });

    await Award.deleteOne({ _id: award._id });

    res.json({ message: "Award deleted successfully" });

  } catch (err) {
    console.error("Delete Award error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
