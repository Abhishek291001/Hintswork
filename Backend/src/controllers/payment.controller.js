// 👈 payment success logic

// payment.controller.js (called from Razorpay / Stripe webhook)

// src/controllers/payment.controller.js
import { activatePlan } from "../services/plan.service.js";

export const paymentSuccess = async (req, res) => {
  const { companyId, planId } = req.body;   // from verified webhook

  await activatePlan(companyId, planId);

  res.status(200).json({ message: "Plan activated" });
};
