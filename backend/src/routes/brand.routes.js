// routes/brand.routes.js
import express from "express";
import { createBrand } from "../controllers/brand.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";

const router = express.Router();

router.post("/admin/brands", authMiddleware, adminOnly, createBrand);

export default router;
