// routes/brand.routes.js
import express from "express";
import { createBrand, deleteBrand, getBrands, getMyBrands, updateBrand } from "../controllers/brand.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";

const router = express.Router();

router.post("/admin/brands", authMiddleware, adminOnly, createBrand);
router.get("/getMyBrands", authMiddleware, adminOnly, getMyBrands);
router.patch("/:id", authMiddleware, adminOnly, updateBrand);
router.delete("/:id", authMiddleware, adminOnly, deleteBrand);
router.get("/brands", authMiddleware, getBrands);

export default router;
