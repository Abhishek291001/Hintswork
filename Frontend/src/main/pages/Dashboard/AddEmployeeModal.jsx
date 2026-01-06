// import React, { useEffect, useState } from "react";
// import { RxCrossCircled } from "react-icons/rx";

// const BRANDS = ["Diet", "Calm", "Fitness", "Joy"];

// const AddEmployeeModal = ({ isOpen, onClose, onSave }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [department, setDepartment] = useState("HR");
//   const [brands, setBrands] = useState(["Diet", "Calm", "Fitness"]);
//   const [plan, setPlan] = useState("Free");
//   const [status, setStatus] = useState(true);

//   useEffect(() => {
//     if (isOpen) {
//       setFullName("");
//       setEmail("");
//       setDepartment("HR");
//       setBrands(["Diet", "Calm", "Fitness"]);
//       setPlan("Free");
//       setStatus(true);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const toggleBrand = (brand) => {
//     setBrands((prev) =>
//       prev.includes(brand)
//         ? prev.filter((b) => b !== brand)
//         : [...prev, brand]
//     );
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-[#fffbefa6] flex items-center justify-center p-4">
//       <div className="bg-[#FFFAF4] w-full max-w-[720px] max-h-[85vh]
// rounded-[24px] px-10 py-10 shadow-lg relative
// overflow-y-auto scrollbar-thin scrollbar-thumb-[#FFD34E]">


//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-3xl text-[#786A08]"
//         >
//           <RxCrossCircled />
//         </button>

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-[24px] font-semibold text-[#786A08]">
//             Add New Employee
//           </h2>
//           <p className="text-[#8B7A1C] text-[18.35px] mt-2 font-semibold">
//             Fill in details to add a new team member
//           </p>
//         </div>

//         <div className="space-y-7">

//           {/* Full Name */}
//           <div>
//             <label className="block text-[#786A08] font-semibold mb-2">
//               Full Name
//             </label>
//             <input
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full h-[48px] rounded-xl border border-[#786A08] bg-[#FFFAF4] px-4 font-semibold text-[#786A08]"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-[#786A08] font-semibold mb-2">
//               Email Address
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full h-[48px] rounded-xl border border-[#786A08] bg-[#FFFAF4] px-4 font-semibold text-[#786A08]"
//             />
//           </div>

//           {/* Department */}
//           <div>
//             <label className="block text-[#786A08] font-semibold mb-2">
//               Department
//             </label>
//             <select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               className="w-full h-[48px] rounded-xl border border-[#786A08] bg-[#FFFAF4] px-4 font-semibold text-[#786A08]"
//             >
//               <option>HR</option>
//               <option>Marketing</option>
//               <option>Sales</option>
//             </select>
//           </div>

//           {/* Assign Brands */}
//           <div>
//             <label className="block text-[#786A08] font-semibold mb-3">
//               Assign Brands
//             </label>

//             <div className="flex flex-wrap gap-6">
//               {BRANDS.map((brand) => {
//                 const checked = brands.includes(brand);
//                 return (
//                   <div
//                     key={brand}
//                     onClick={() => toggleBrand(brand)}
//                     className="flex items-center gap-2 cursor-pointer font-semibold"
//                   >
//                     <div
//                       className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
//                       ${checked
//                         ? "bg-[#FFD34E] border-[#FFD34E]"
//                         : "border-[#FFD34E]"
//                       }`}
//                     >
//                       {checked && (
//                         <span className="text-white text-sm font-bold">✓</span>
//                       )}
//                     </div>
//                     <span className="text-[#786A08] text-lg">
//                       {brand}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Assign Plan */}
//           <div>
//             <label className="block text-[#786A08] font-semibold mb-3">
//               Assign Plan
//             </label>

//             <div className="flex gap-8">
//               {["Free", "Starter", "Pro"].map((p) => (
//                 <label
//                   key={p}
//                   className="flex items-center gap-2 cursor-pointer font-semibold text-[18.35px]"
//                 >
//                   <input
//                     type="radio"
//                     checked={plan === p}
//                     onChange={() => setPlan(p)}
//                     className="hidden"
//                   />
//                   <div
//                     className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
//                     ${plan === p
//                       ? "border-[#FFD34E]"
//                       : "border-gray-400"
//                     }`}
//                   >
//                     {plan === p && (
//                       <div className="w-3 h-3 bg-[#FFD34E] rounded-full" />
//                     )}
//                   </div>
//                   <span className="text-[#786A08] text-lg">
//                     {p}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block text-[#786A08] font-semibold mb-3">
//               Status
//             </label>

//             <div className="flex items-center gap-4">
//               <div
//                 onClick={() => setStatus(!status)}
//                 className={`w-14 h-8 rounded-full p-1 cursor-pointer transition
//                 ${status ? "bg-[#FFD34E]" : "bg-gray-300"}`}
//               >
//                 <div
//                   className={`w-6 h-6 bg-white rounded-full shadow transition
//                   ${status ? "translate-x-6" : "translate-x-0"}`}
//                 />
//               </div>
//               <span className="text-[#786A08] text-[18.35px] font-semibold">
//                 Active
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//        <div className="flex justify-center gap-4 sm:gap-8 mt-12 flex-wrap sm:flex-nowrap">
//   <button
//     onClick={onSave}
//     className="whitespace-nowrap
//     px-6 sm:px-10 py-3
//     text-base sm:text-xl font-bold text-[#786A08]
//     bg-gradient-to-b from-[#FFE074] to-[#E3B512]
//     rounded-lg"
//   >
//     Save Employee
//   </button>

//   <button
//     onClick={onClose}
//     className="whitespace-nowrap
//     px-6 sm:px-10 py-3
//     text-base sm:text-xl font-bold text-[#786A08]
//     bg-gradient-to-b from-[#FFE074] to-[#E3B512]
//     rounded-lg"
//   >
//     Cancel
//   </button>
// </div>

//       </div>
//     </div>
//   );
// };

// export default AddEmployeeModal;


import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import API_BASE_URL from "../../config/apiConfig";


const BRANDS = ["Diet", "Calm", "Fitness", "Joy"];

const AddEmployeeModal = ({ isOpen, onClose, onSave, employee }) => {
  const isEditMode = Boolean(employee); // 🔹 detect edit

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("HR");
  const [brands, setBrands] = useState([]);
  const [plan, setPlan] = useState("Free");
  const [status, setStatus] = useState(true);

  // 🔹 PREFILL / RESET LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      if (employee) {
        // ✅ EDIT MODE → Prefill
        setFullName(employee.fullName || "");
        setEmail(employee.email || "");
        setPassword("");
        setDepartment(employee.department || "HR");
        setBrands(employee.brands || []);
        setPlan(employee.plan || "Free");
        setStatus(employee.status === "active");
      } else {
        // ✅ ADD MODE → Reset
        setFullName("");
        setEmail("");
        setDepartment("HR");
        setBrands(["Diet", "Calm", "Fitness"]);
        setPlan("Free");
        setStatus(true);
        setPassword("");
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, employee]);

  if (!isOpen) return null;

  const toggleBrand = (brand) => {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // const handleSave = () => {
  //   onSave({
  //     name: fullName,
  //     email,
  //     department,
  //     brands,
  //     plan,
  //     status: status ? "Active" : "Inactive",
  //   });
  // };

const handleSave = () => {
  onSave({
    fullName,
    email,
    password: isEditMode ? undefined : password,
    department,
    status: status ? "active" : "inactive",
  });
};




  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4" onClick={onClose}>
      <div
        className="bg-[#FFFAF4] w-full max-w-[560px] max-h-[90vh]
        rounded-xl px-5 sm:px-6 py-5 sm:py-6 shadow-lg relative
        overflow-y-auto scrollbar-thin scrollbar-thumb-[#FFD34E]" onClick={(e) => e.stopPropagation()}  
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-[#786A08]"
        >
          <RxCrossCircled />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-base sm:text-lg font-semibold text-[#786A08]">
            {isEditMode ? "Edit Employee" : "Add New Employee"}
          </h2>
          <p className="text-xs sm:text-sm text-[#8B7A1C] mt-1 font-semibold">
            {isEditMode
              ? "Update employee details"
              : "Fill in details to add a new team member"}
          </p>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#786A08] mb-1">
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-9 rounded-md border border-[#786A08]
              bg-[#FFFAF4] px-3 text-sm text-[#786A08]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#786A08] mb-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-9 rounded-md border border-[#786A08]
              bg-[#FFFAF4] px-3 text-sm text-[#786A08]"
            />
          </div>

          {/* Password — ONLY FOR ADD */}
{!isEditMode && (
  <div>
    <label className="block text-sm font-medium text-[#786A08] mb-1">
      Password
    </label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full h-9 rounded-md border border-[#786A08]
      bg-[#FFFAF4] px-3 text-sm text-[#786A08]"
    />
  </div>
)}


          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-[#786A08] mb-1">
              Department
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full h-9 rounded-md border border-[#786A08]
              bg-[#FFFAF4] px-3 text-sm text-[#786A08]"
            >
              <option>HR</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Engineering</option>
            </select>
          </div>

          {/* Assign Brands */}
          <div>
            <label className="block text-sm font-semibold text-[#786A08] mb-2">
              Assign Brands
            </label>

            <div className="flex flex-wrap gap-3">
              {BRANDS.map((brand) => {
                const checked = brands.includes(brand);
                return (
                  <div
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className="flex items-center gap-2 cursor-pointer font-semibold"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center
                      ${
                        checked
                          ? "bg-[#FFD34E] border-[#FFD34E]"
                          : "border-[#FFD34E]"
                      }`}
                    >
                      {checked && (
                        <span className="text-white text-[10px] font-bold">
                          ✓
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-[#786A08]">{brand}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Assign Plan */}
          <div>
            <label className="block text-sm font-medium text-[#786A08] mb-2">
              Assign Plan
            </label>

            <div className="flex gap-6">
              {["Free", "Starter", "Pro"].map((p) => (
                <label key={p} className="flex items-center gap-2 cursor-pointer font-semibold">
                  <input
                    type="radio"
                    checked={plan === p}
                    onChange={() => setPlan(p)}
                    className="hidden"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center
                    ${plan === p ? "border-[#FFD34E]" : "border-gray-400"}`}
                  >
                    {plan === p && (
                      <div className="w-2 h-2 bg-[#FFD34E] rounded-full" />
                    )}
                  </div>
                  <span className="text-sm text-[#786A08]">{p}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-[#786A08] mb-2">
              Status
            </label>

            <div className="flex items-center gap-3">
              <div
                onClick={() => setStatus(!status)}
                className={`w-11 h-6 rounded-full p-1 cursor-pointer transition
                ${status ? "bg-[#FFD34E]" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow transition
                  ${status ? "translate-x-5" : "translate-x-0"}`}
                />
              </div>
              <span className="text-sm text-[#786A08] font-semibold">
                {status ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button
            onClick={handleSave}
            className="px-6 py-2 text-sm font-semibold text-[#786A08]
            bg-gradient-to-b from-[#FFE074] to-[#E3B512] rounded-md"
          >
            {isEditMode ? "Edit Employee" : "Save Employee"}
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 text-sm font-semibold text-[#786A08]
            bg-gradient-to-b from-[#FFE074] to-[#E3B512] rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
