// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import API_BASE_URL from "../config/apiConfig";

// const EmployeesContext = createContext();

// export const EmployeesProvider = ({ children }) => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 FETCH EMPLOYEES
//   const fetchEmployees = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${API_BASE_URL}/api/users/users`);
//       setEmployees(res.data); // adjust if response shape differs
//     } catch (err) {
//       console.error("Fetch employees error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 ADD EMPLOYEE
//   const addEmployee = async (data) => {
//     try {
//       const res = await axios.post(
//         `${API_BASE_URL}/api/users/users`,
//         data
//       );
//       // instantly update UI
//       setEmployees((prev) => [res.data, ...prev]);
//       return true;
//     } catch (err) {
//       console.error("Add employee error", err);
//       return false;
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   return (
//     <EmployeesContext.Provider
//       value={{ employees, loading, addEmployee, fetchEmployees }}
//     >
//       {children}
//     </EmployeesContext.Provider>
//   );
// };

// export const useEmployees = () => useContext(EmployeesContext);





import React, { createContext, useContext, useState, useEffect } from "react";

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API fetch
    setTimeout(() => {
      setEmployees([
        { id: 1, name: "Sarah", department: "HR", plan: "Free", status: "Active" },
        { id: 2, name: "Mike", department: "Engineering", plan: "Pro", status: "Active" },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const addEmployee = async (employee) => {
    // simulate API POST
    setEmployees((prev) => [...prev, { id: Date.now(), ...employee }]);
    return true;
  };

  return (
    <EmployeesContext.Provider value={{ employees, loading, addEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

// ✅ Hook
export const useEmployees = () => {
  const context = useContext(EmployeesContext);
  if (!context) {
    throw new Error("useEmployees must be used within EmployeesProvider");
  }
  return context;
};
