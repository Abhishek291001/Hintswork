// controllers/brand.controller.js
import { Brand } from "../models/Brand.model.js";

export const createBrand = async (req, res) => {
  try {
    const { name, shortDescription, image } = req.body;

    if (!name || !shortDescription)
      return res.status(400).json({ message: "Name and description required" });

    // Company scoped brand uniqueness
    const exists = await Brand.findOne({
      name: new RegExp(`^${name}$`, "i"),
      companyId: req.user.companyId
    });

    if (exists)
      return res.status(409).json({ message: "Brand already exists" });

    const brand = await Brand.create({
      name,
      shortDescription,
      image: image || null,
      companyId: req.user.companyId,
      isSystemBrand: false
    });

    res.status(201).json({
      message: "Brand created successfully",
      brand
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyBrands = async (req, res) => {
  try {
    const page  = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 10, 30);
    const search = req.query.search?.trim();
    const skip  = (page - 1) * limit;

    const filter = {
      companyId: req.user.companyId,
      isSystemBrand: false
    };

    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const [brands, total] = await Promise.all([
      Brand.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),

      Brand.countDocuments(filter)
    ]);

    res.status(200).json({
      brands,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (err) {
    console.error("Fetch brands error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// PATCH /api/company/brands/:id
export const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, shortDescription, image } = req.body;

    if (!name && !shortDescription && !image) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    // Find brand scoped to company and ensure it's not system brand
    const brand = await Brand.findOne({
      _id: id,
      companyId: req.user.companyId,
      isSystemBrand: false
    });

    if (!brand) return res.status(404).json({ message: "Brand not found" });

    if (name) brand.name = name;
    if (shortDescription) brand.shortDescription = shortDescription;
    if (image) brand.image = image;

    await brand.save();

    res.status(200).json({ message: "Brand updated successfully", brand });
  } catch (err) {
    console.error("Update brand error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/company/brands/:id
export const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findOne({
      _id: id,
      companyId: req.user.companyId,
      isSystemBrand: false
    });

    if (!brand) return res.status(404).json({ message: "Brand not found" });

    await brand.remove();

    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (err) {
    console.error("Delete brand error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
