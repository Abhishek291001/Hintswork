import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/adminOnly.middleware.js";
import { companyOwner } from "../middleware/companyOwner.middleware.js";
import { updateCompany } from "../controllers/company.controller.js";
const router = express.Router();

router.put(
  "/updateCompany",
  authMiddleware,
  adminOnly,
  companyOwner,
  updateCompany
);

export default router;