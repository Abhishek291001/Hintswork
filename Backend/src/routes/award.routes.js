import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";
import {
  createAward,
  getAwards,
  getAwardById,
  updateAward,
  deleteAward
} from "../controllers/company.controller.js";

const router = express.Router();

// Admin-only routes
router.post("/", authMiddleware, adminOnly, createAward);
router.get("/", authMiddleware, adminOnly, getAwards);
router.get("/:id", authMiddleware, adminOnly, getAwardById);
router.patch("/:id", authMiddleware, adminOnly, updateAward);
router.delete("/:id", authMiddleware, adminOnly, deleteAward);

export default router;
