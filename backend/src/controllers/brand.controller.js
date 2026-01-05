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
