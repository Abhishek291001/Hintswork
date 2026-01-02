import { Company } from "../models/Company.model.js";

export const updateCompany = async (req, res) => {
  const { name, domain } = req.body;

  if (!name || !domain)
    return res.status(400).json({ message: "Name and domain required" });

  const company = await Company.findOne({
    _id: req.user.companyId,
    createdBy: req.user.userId
  });

  if (!company)
    return res.status(404).json({ message: "Company not found" });

  company.name = name;
  company.domain = domain;
  company.status = "active";

  await company.save();

  res.json({ message: "Company updated", company });
};