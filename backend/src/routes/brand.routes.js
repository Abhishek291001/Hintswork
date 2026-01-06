// routes/brand.routes.js
import express from "express";
import { createBrand, deleteBrand, getMyBrands, updateBrand } from "../controllers/brand.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";

const router = express.Router();

router.post("/admin/brands", authMiddleware, adminOnly, createBrand);
router.get("/getMyBrands", authMiddleware, adminOnly, getMyBrands);
router.patch("/brands/:id", authMiddleware, adminOnly, updateBrand);
router.delete("/brands/:id", authMiddleware, adminOnly, deleteBrand);

export default router;
