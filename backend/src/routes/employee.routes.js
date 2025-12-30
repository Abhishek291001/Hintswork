import express from "express";
import { addEmployee, getEmployees } from "../controllers/employee.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { ROLES } from "../config/roles.js";

const router = express.Router();

// Read-only → all roles
router.get(
  "/",
  authenticate,
  authorizeRoles(ROLES.ADMIN, ROLES.MANAGER),
  getEmployees
);

// Add employee → ADMIN + MANAGER only
router.post(
  "/",
  authenticate,
  authorizeRoles(ROLES.ADMIN, ROLES.MANAGER),
  addEmployee
);

export default router;
