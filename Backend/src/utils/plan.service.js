// 👈 activatePlan lives here
// src/services/plan.service.js
import { Company } from "../models/Company.model.js";

export const activatePlan = async (companyId, planId) => {
  await Company.findByIdAndUpdate(companyId, {
    planId,
    status: "active"
  });
};

// Service files never handle req / res.
// They are reusable from anywhere.