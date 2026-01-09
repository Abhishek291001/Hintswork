import { Company } from "../models/Company.model.js";

export const companyOwner = async (req, res, next) => {
  const company = await Company.findById(req.user.companyId);

  if (!company)
    return res.status(404).json({ message: "Company not found" });

  if (company.createdBy.toString() !== req.user.userId)
    return res.status(403).json({ message: "Not company owner" });

  next();
};
