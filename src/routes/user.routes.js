// import express from "express";
// import { createAdminOrManager } from "../controllers/user.controller.js";
// import { authMiddleware } from "../middleware/auth.middleware.js";


import express from "express";
import { createAdmin } from "../controllers/user.controller.js";

const router = express.Router();

// POST /api/users/admin — create first admin
router.post("/admin", createAdmin);

export default router;
