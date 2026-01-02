import express from "express";
import { 
  getMe,
  updateMe,
  deleteMe,
  signup,
  addEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
  
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = express.Router();
router.patch("/editEmployees/:id", authMiddleware, updateEmployee);

// Public signup (first admin or self-registration)
router.post("/signup", signup);
router.get("/employees", authMiddleware, getEmployees);

// Admin adds manager/employee
router.post("/addEmployee", authMiddleware, addEmployee);

router.delete("/employees/:id", authMiddleware, deleteEmployee);
router.get("/employees/:id", authMiddleware, getEmployeeById);

// Logged-in user routes
router.get("/me", authMiddleware, getMe);
router.patch("/me", authMiddleware, updateMe);
router.delete("/me", authMiddleware, deleteMe);

export default router;
