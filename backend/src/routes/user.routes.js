// import express from "express";
// import { createAdminOrManager } from "../controllers/user.controller.js";
// import { authMiddleware } from "../middleware/auth.middleware.js";


import express from "express";
import { 
  getMe,
  updateMe,
  deleteMe,
  signup,
  addEmployee,
  getEmployees,
  
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = express.Router();


// Public signup (first admin or self-registration)
router.post("/signup", signup);
router.get("/employees", authMiddleware, getEmployees);

// Admin adds manager/employee
router.post("/addEmployee", authMiddleware, addEmployee);
// Logged-in user routes
router.get("/me", authMiddleware, getMe);
router.patch("/me", authMiddleware, updateMe);
router.delete("/me", authMiddleware, deleteMe);

export default router;
