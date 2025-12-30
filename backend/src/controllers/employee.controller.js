export const addEmployee = (req, res) => {
  res.json({ message: "Employee added successfully" });
};

export const getEmployees = (req, res) => {
  res.json({ message: "Employee list (read-only)" });
};
