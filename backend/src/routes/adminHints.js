import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";

import { completeHint, createHint, getCurrentSlot } from "../controllers/admiHint.controller.js";
const router = express.Router();

router.get( "api/slots/current", getCurrentSlot);
router.get("/api/hints/complete",completeHint);
router.post("/admin/hints", authMiddleware, adminOnly, createHint);
export default router;