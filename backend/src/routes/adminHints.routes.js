import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";

import { completeHint, createHint, deleteHint, getCurrentSlot } from "../controllers/admiHint.controller.js";
const router = express.Router();

router.get( "/slots/current", getCurrentSlot);
router.get("/complete",completeHint);
router.post("/admin/hints", authMiddleware, adminOnly, createHint);
// Delete hint
router.delete("/admin/hints/:id", authMiddleware, adminOnly, deleteHint);
export default router;