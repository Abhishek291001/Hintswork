// import React, { useState } from 'react';
// import ImageIcon from '../../assets/imageicon.svg';
// import Editicon from '../../assets/edit.svg';
// import HintDetailsPage from './HintDetailsPage';
// import AddBrandModal from './AddBrandModal';
// import Deleteicon from "../../assets/delete.svg";
// import AddHintsModal from './AddHintsModal'; // ✅ IMPORT FORM
// import EditBrandModal from './EditBrandModal';

// const Tab2 = () => {
// //   const [cards, setCards] = useState([
// //     {
// //       id: 1,
// //       title: 'Hint Work',
// //       desc: 'Your Path to Healthier living Starts Here. Revolutionizing...',
// //       className:'font-montserrat',
// //       tableData: [{ brand: 'Hint Work', hint: 'Strength train weekly', sponsor: 'Hint Work' }],
// //     },
// //     {
// //       id: 2,
// //       title: 'Hint Education',
// //       desc: 'Hint Education is your guide to unlocking knowledge...',
// //       className:'font-montserrat',
// //       tableData: [{ brand: 'Coursera', hint: 'Learn AI', sponsor: 'Coursera Org' }],
// //     },
// //     {
// //       id: 3,
// //       title: 'Hint Finance',
// //       desc: 'Hint Finance empowers you to take control of your finances...',
// //       className:'font-montserrat',
// //       tableData: [{ brand: 'HDFC', hint: 'Invest Smart', sponsor: 'HDFC Bank' }],
// //     },
// //     {
// //       id: 4,
// //       title: 'Hint Calm',
// //       desc: 'Hint Calm is your sanctuary for peace and mindfulness...',
// //       className:'font-montserrat',
// //       tableData: [],
// //     },
// //     {
// //       id: 5,
// //       title: 'Hint Health',
// //       desc: 'Hint Health provides guidance on nutrition...',
// //       className:'font-montserrat',
// //       tableData: [],
// //     },
// //     {
// //       id: 6,
// //       title: 'Hint Diet',
// //       desc: 'Hint Diet offers personalized nutrition and wellness solutions...',
// //       className:'font-montserrat',
// //       tableData: [],
// //     },
// //   ]);

// //   const [selectedCard, setSelectedCard] = useState(null);
// //   const [tableDataMap, setTableDataMap] = useState(() =>
// //     cards.reduce((acc, card) => {
// //       acc[card.id] = card.tableData;
// //       return acc;
// //     }, {})
// //   );

// //   const [isAddBrandFormVisible, setIsAddBrandFormVisible] = useState(false);
// //   const [isAddHintModalVisible, setIsAddHintModalVisible] = useState(false); // ✅ ADD MODAL STATE

// //   const handleCardClick = (card) => {
// //     setSelectedCard(card);
// //   };

// //   const handleBack = () => {
// //     setSelectedCard(null);
// //   };

// //   const handleAddHint = () => {
// //     const newHint = {
// //       brand: 'Hint Work',
// //       hint: 'New Hint Added',
// //       sponsor: 'Hint Work',
// //     };

// //     setTableDataMap((prev) => ({
// //       ...prev,
// //       [selectedCard.id]: [...(prev[selectedCard.id] || []), newHint],
// //     }));
// //   };

// //   const handleEditHint = (index) => {
// //     const updatedData = prompt('Enter updated hint:');
// //     if (!updatedData) return;

// //     const updated = [...tableDataMap[selectedCard.id]];
// //     updated[index].hint = updatedData;

// //     setTableDataMap((prev) => ({
// //       ...prev,
// //       [selectedCard.id]: updated,
// //     }));
// //   };

// //   const handleDeleteHint = (index) => {
// //     const updated = [...tableDataMap[selectedCard.id]];
// //     updated.splice(index, 1);
// //     setTableDataMap((prev) => ({
// //       ...prev,
// //       [selectedCard.id]: updated,
// //     }));
// //   };

// //   const handleAddBrand = (newBrandData) => {
// //     setCards((prevCards) => [
// //       ...prevCards,
// //       {
// //         id: prevCards.length + 1,
// //         title: newBrandData.brandName,
// //         desc: newBrandData.description,
// //         tableData: [],
// //       },
// //     ]);
// //     setIsAddBrandFormVisible(false);
// //   };

// //   const handleFileUpload = (file) => {
// //     console.log('File uploaded:', file.name);

// //     // Example logic: Add a dummy hint to selected card after upload
// //     if (selectedCard) {
// //       const newHint = {
// //         brand: selectedCard.title,
// //         hint: `Hint from ${file.name}`,
// //         sponsor: selectedCard.title,
// //       };

// //       setTableDataMap((prev) => ({
// //         ...prev,
// //         [selectedCard.id]: [...(prev[selectedCard.id] || []), newHint],
// //       }));
// //     }
// //   };

// //   if (selectedCard) {
// //     return (
// //       <HintDetailsPage
// //         title={selectedCard.title}
// //         onBack={handleBack}
// //         tableData={tableDataMap[selectedCard.id] || []}
// //         onAddHint={handleAddHint}
// //         onEditHint={handleEditHint}
// //         onDeleteHint={handleDeleteHint}
// //       />
// //     );
// //   }

// //   return (
// //     <div className="p-6 space-y-6">
// //       {isAddBrandFormVisible && (
// //         <AddBrandModal
// //           isOpen={isAddBrandFormVisible}
// //           onClose={() => setIsAddBrandFormVisible(false)}
// //           onSave={handleAddBrand}
// //         />
// //       )}

// //       {isAddHintModalVisible && (
// //         <AddHintsModal
// //           isOpen={isAddHintModalVisible}
// //           onClose={() => setIsAddHintModalVisible(false)}
// //           onUpload={handleFileUpload}
// //         />
// //       )}

// //       <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center">
// //         <h2 className="text-3xl sm:text-5xl font-semibold text-[#786A08]">Hints</h2>
// //         <div className="space-x-0 mt-4 sm:mt-0 flex flex-wrap gap-3 justify-center">
// //           <button
// //             onClick={() => setIsAddBrandFormVisible(true)}
// //             className="px-4 py-2 sm:px-6 sm:py-4 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] rounded hover:border-[#786A08] montserrat text-[20px]"
// //           >
// //             Add Private Hint
// //           </button>
// //           <button
// //             onClick={() => setIsAddHintModalVisible(true)} 
// //             className="px-4 py-2 sm:px-6 sm:py-4 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] rounded hover:border-[#786A08] montserrat text-[20px]"
// //           >
// //             Add Private Brand
// //           </button>
// //           <button className="px-4 py-2 sm:px-6 sm:py-4 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] rounded hover:border-[#786A08] montserrat text-[20px]">
// //             Upload Spreadsheet
// //           </button>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {cards.map((card) => (
// //           <div
// //             key={card.id}
// //             className="relative bg-[#FFFBEF] p-5 rounded-[8.5px] border-2 border-[#FFE891] shadow-md cursor-pointer hover:shadow-lg transition"
// //             onClick={() => handleCardClick(card)}
// //           >
// //             <div className="flex justify-end text-[#796b0b] hover:text-[#bca719]">
// //               <img src={Editicon} alt="editicon" />
// //             </div>

// //             <div className="flex items-start gap-4 sm:gap-6">
// //               <div className="flex flex-col items-center text-[#bca719] w-full max-w-fit">
// //                 <div className="rounded-full bg-[#FEDC63] size-10 flex items-center justify-center mb-2">
// //                   <img className="size-5" src={ImageIcon} alt="ImageIcon" />
// //                 </div>
// //                 <span className="font-semibold text-xs sm:text-[17px] text-black text-center">
// //                   {card.title}
// //                 </span>
// //               </div>
// //               <div className="text-sm sm:text-base font-medium leading-[21.3px] text-[#706000] line-clamp-2">
// //                 {card.desc}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };


// const [data, setData] = useState([
//     { brandName: "Sarah Parker", description: "Engineering", status: "Active", id: 1 },
//     { brandName: "Jessica", description: "Marketing", status: "Inactive", id: 2 },
//     { brandName: "Michael", description: "Sales", status: "Active", id: 3 },
//     { brandName: "Ema Davis", description: "HR", status: "Inactive", id: 4 },
//     { brandName: "Ema Davis", description: "Engineering", status: "Active", id: 5 },
//     // { brandName: "Brand 6", description: "This is Brand 6", status: "Inactive", id: 6 },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const columns = [
//     { header: "Name", accessor: "brandName" },
//     { header: "Department", accessor: "description" },
//     { header: "Status", accessor: "status" },
//   ];

//   const handleEdit = (brand) => {
//     console.log("Edit clicked for:", brand);
//   };

//   const handleDelete = (brand) => {
//     setData(data.filter((b) => b.id !== brand.id));
//     console.log("Delete clicked for:", brand);
//   };

//   const handleAddBrand = () => {
//     setIsModalOpen(true);
//   };

//   const handleSaveBrand = (newBrand) => {
//     const updatedBrand = {
//       brandName: newBrand.brandName,
//       description: newBrand.description,
//       status: Math.random() > 0.5 ? "Active" : "Inactive",
//       id: data.length + 1,
//     };
//     setData([...data, updatedBrand]);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="space-y-4 relative">
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-2xl md:text-3xl font-semibold text-[#645200]">
//           Brand
//         </div>
//         <div
//           onClick={handleAddBrand}
//           className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-white text-[16px] md:text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
//         >
//           Add Brand
//         </div>
//       </div>

//       <InlineTable
//         columns={columns}
//         data={data}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//         enablePagination={true}
//         rowsPerPage={4}
//         hasStatusColumn={true}
//         hasSerialNumberColumn={false}
//       />

//       <AddBrandModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSave={handleSaveBrand}
//       />
//     </div>
//   );
// };


// const InlineTable = ({
//   columns,
//   data,
//   onEdit,
//   onDelete,
//   enablePagination = false,
//   paginationThreshold = 4,
//   rowsPerPage = 4,
//   hasStatusColumn = false,
//   hasSerialNumberColumn = false,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const shouldPaginate = enablePagination && data.length > paginationThreshold;
//   const totalPages = Math.ceil(data.length / rowsPerPage);

//   const paginatedData = shouldPaginate
//     ? data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
//     : data;

//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
//   const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
//   const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

//   return (
//     <div className="space-y-4 relative">
//       <div className="overflow-x-auto rounded-[11px] shadow-md">
//         <table className="min-w-full table-auto rounded shadow-md">
//           <thead>
//             <tr className="bg-[#F8DD8A] text-[#786A08]">
//               {columns.map((col, index) => (
//                 <th
//                   key={index}
//                   className="px-4 py-[28px] text-center text-[#645200] text-2xl font-medium"
//                 >
//                   {col.header}
//                 </th>
//               ))}
//               {(onEdit || onDelete) && (
//                 <th className="px-4 py-[28px] text-center text-[#645200] text-2xl font-medium">
//                   Action
//                 </th>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={columns.length + (hasSerialNumberColumn ? 2 : 1)}
//                   className="text-center py-6 text-[#645200]"
//                 >
//                   No data available.
//                 </td>
//               </tr>
//             ) : (
//               paginatedData.map((row, rowIndex) => {
//                 const actualIndex = (currentPage - 1) * rowsPerPage + rowIndex;
//                 const isEvenRow = actualIndex % 2 === 0;
//                 const bgColor = isEvenRow ? "#FFFBEF" : "#F9EFCA";

//                 return (
//                   <tr
//                     key={row.id || rowIndex}
//                     style={{ backgroundColor: bgColor }}
//                     className="text-[#645200] text-xl font-medium text-center hover:bg-[#FFFBEF]"
//                   >
//                     {hasSerialNumberColumn && (
//                       <td className="px-4 py-[28px]">{actualIndex + 1}</td>
//                     )}
//                     {columns.map((col, colIndex) => (
//                       <td key={colIndex} className="px-4 py-[28px] text-xl">
//                         {col.accessor === "status" && hasStatusColumn ? (
//                           <span
//                             style={{
//                               backgroundColor:
//                                 row[col.accessor] === "Active"
//                                   ? "#C6EFD3"
//                                   : row[col.accessor] === "Inactive"
//                                   ? "#F6C7C7"
//                                   : "#FDD43E",
//                               borderRadius: "30px",
//                               padding: "4px 12px",
//                               fontWeight: "600",
//                               color:
//                                 row[col.accessor] === "Active"
//                                   ? "#157145"
//                                   : row[col.accessor] === "Inactive"
//                                   ? "#761111"
//                                   : "#333",
//                             }}
//                           >
//                             {row[col.accessor]}
//                           </span>
//                         ) : (
//                           row[col.accessor]
//                         )}
//                       </td>
//                     ))}
//                     {(onEdit || onDelete) && (
//                       <td className="px-4 py-[28px] flex justify-center gap-4">
//                         {onEdit && (
//                           <img
//                             src={Editicon}
//                             alt="Edit"
//                             className="cursor-pointer"
//                             onClick={() => onEdit(row)}
//                           />
//                         )}
//                         {onDelete && (
//                           <img
//                             src={Deleteicon}
//                             alt="Delete"
//                             className="cursor-pointer"
//                             onClick={() => onDelete(row)}
//                           />
//                         )}
//                       </td>
//                     )}
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
        

//       {shouldPaginate && (
//             <tfoot className="bg-[#FFFBEF]">
//               <tr>
//                 <td colSpan={columns.length + (hasSerialNumberColumn ? 2 : 1)}>
//                   <div className="flex justify-center items-center space-x-2 mt-5 mb-5 text-[#786A08]">
//                     <div
//                       onClick={handlePrev}
//                       className={`shadow-md px-3 py-1 rounded text-xl ${
//                         currentPage === 1 ? 'bg-[#FFFBEF] cursor-not-allowed' : 'bg-[#FFE074] hover:bg-[#E3B512] cursor-pointer'
//                       }`}
//                     >
//                       Prev
//                     </div>
//                     {[...Array(totalPages)].map((_, i) => (
//                       <div
//                         key={i}
//                         onClick={() => handlePageChange(i + 1)}
//                         className={`shadow-md px-4 py-1 rounded text-xl cursor-pointer ${
//                           currentPage === i + 1 ? 'bg-[#FFE074] font-semibold' : 'bg-[#FFFBEF] hover:bg-[#E3B512]'
//                         }`}
//                       >
//                         {i + 1}
//                       </div>
//                     ))}
//                     <div
//                       onClick={handleNext}
//                       className={`shadow-md px-3 py-1 rounded text-xl ${
//                         currentPage === totalPages ? 'bg-[#FFFBEF] cursor-not-allowed' : 'bg-[#FFE074] hover:bg-[#E3B512] cursor-pointer'
//                       }`}
//                     >
//                       Next
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </tfoot>
//           )}
//           </table>
//       </div>
//     </div>
//   );
// };

// export default Tab2;




import React, { useState, useEffect } from "react";
import axios from "axios";
import Editicon from "../../assets/edit.svg";
import Deleteicon from "../../assets/delete.svg";
import { ArrowLeft } from "lucide-react";
import AddEmployeeModal from "./AddEmployeeModal";
import ActionButtons from "./ActionButtons";
import BulkUploadEmployees from "./BulkUploadEmployees";
import { useAuth } from "../../contexts/AuthContext";
import API_BASE_URL from "../../config/apiConfig";

const ITEMS_PER_PAGE = 5;

const Tab2 = () => {
  const { user } = useAuth(); // get token info
  const token = localStorage.getItem("token");

  const [employees, setEmployees] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // FETCH EMPLOYEES
  const fetchEmployees = async (page = 1, searchTerm = "") => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_BASE_URL}/api/users/employees?page=${page}&limit=${ITEMS_PER_PAGE}&search=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEmployees(res.data.employees);
      setTotalPages(res.data.meta.totalPages);
    } catch (err) {
      console.error("Error fetching employees:", err);
    } finally {
      setLoading(false);
    }
  };



  const fetchEmployeeById = async (id) => {
  try {
    setLoading(true);

    const res = await axios.get(
      `${API_BASE_URL}/api/users/employees/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    setSelectedEmployee(res.data); // full employee from API
    setShowAddEmployee(true);      // open modal AFTER data arrives
  } catch (err) {
    console.error("Error fetching employee:", err);
  } finally {
    setLoading(false);
  }
};


  // INITIAL FETCH
  useEffect(() => {
    if (token) fetchEmployees(currentPage, search);
  }, [currentPage, search, token]);

  // SAVE / UPDATE EMPLOYEE
  const handleSaveEmployee = async (data) => {
  try {
    if (selectedEmployee) {
      // ✅ UPDATE
      await axios.patch(
        `${API_BASE_URL}/api/users/editEmployees/${selectedEmployee._id}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else {
      // ✅ ADD
      await axios.post(
        `${API_BASE_URL}/api/users/addEmployee`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }

    // ✅ REFRESH LIST (THIS updates page automatically)
    await fetchEmployees(currentPage, search);

    // ✅ RESET UI
    setShowAddEmployee(false);
    setSelectedEmployee(null);

  } catch (err) {
    console.error("Error saving employee:", err);
  }
};



const handleDeleteEmployee = async (id) => {
  if (!window.confirm("Are you sure you want to delete this employee?")) return;

  try {
    await axios.delete(
      `${API_BASE_URL}/api/users/employees/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // ✅ refresh list automatically
    await fetchEmployees(currentPage, search);

  } catch (err) {
    console.error("Error deleting employee:", err);
  }
};



  const paginatedEmployees = employees; // Already paginated by backend

   return (
    <div className="space-y-6  font-montserrat">
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6 mt-0">
        <div className="flex items-center gap-3 text-[#786A08]">
          <ArrowLeft className="cursor-pointer" />
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold montserrat">
            Employees
          </h1>
        </div>

        <ActionButtons
          buttons={[
            {
              label: "Add Employees",
              className: "font-semibold text-xl",
              onClick: () => setShowAddEmployee(true),
            },
            {
              label: "Bulk Upload (CSV)",
              className: "font-semibold text-xl",
              onClick: () => setShowBulkUpload(true),
            },
            {
              label: "Assign Plan",
              className: "font-semibold text-xl",
              onClick: () => console.log("Assign Plan clicked"),
            },
          ]}
        />
      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-3 py-2 border rounded-md"
        />
      </div>

      {/* TABLE */}
      <div className="-mx-4 sm:mx-0 overflow-x-auto rounded-2xl shadow-md">
        {loading ? (
          <p className="text-center py-10 text-lg">Loading...</p>
        ) : (
          <table className="min-w-[700px] md:min-w-full w-full">
            <thead className="bg-[#F8DD8A] montserrat">
              <tr>
                {["Name", "Department", "Plan", "Points", "Status", "Action"].map(
                  (head) => (
                    <th
                      key={head}
                      className="px-10 py-4 text-center text-base sm:text-2xl font-medium text-[#786A08] whitespace-nowrap montserrat"
                    >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {paginatedEmployees.map((emp, index) => (
                <tr
                  key={emp._id}
                  className={`text-center text-[#645200] ${
                    index % 2 === 0 ? "bg-[#FFFBEF]" : "bg-[#F9EFCA]"
                  }`}
                >
                  <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
                    {emp.fullName}
                  </td>
                  <td className="whitespace-nowrap text-xl font-medium montserrat">
                    {emp.department}
                  </td>
                  <td className="whitespace-nowrap text-xl font-medium montserrat">
                    {emp.plan || "Free"}
                  </td>
                  <td className="whitespace-nowrap text-xl font-medium montserrat">
                    {emp.points || "0"}
                  </td>

                  <td>
                    <span
                      className={`inline-flex items-center justify-center
                        w-[120px] h-[30px]
                        rounded-md text-xl font-medium
                        ${index % 2 === 0 ? "bg-[#FFF2C6]" : "bg-[#FFFBEF]"}`}
                    >
                      {emp.status}
                    </span>
                  </td>

                  <td className="flex justify-center gap-3 px-4 py-4 whitespace-nowrap">
                    <img
                      src={Editicon}
                      alt="edit"
                      onClick={() => {
                        fetchEmployeeById(emp._id)
                      }}
                      className="cursor-pointer"
                    />
                    <img src={Deleteicon} alt="delete" className="cursor-pointer" onClick={() => handleDeleteEmployee(emp._id)}/>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* PAGINATION */}
            <tfoot>
              <tr className="bg-[#FFF5CC]">
                <td colSpan={6} className="py-3">
                  <div className="flex justify-center gap-3 text-[#786A08] font-medium montserrat text-lg">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      className={`px-3 py-1 rounded-md shadow ${
                        currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-[#FFF9E5]"
                      }`}
                    >
                      Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-1 rounded-md shadow font-semibold ${
                            currentPage === page
                              ? "bg-[#FFD94A] text-white"
                              : "bg-[#FFF9E5] text-[#786A08]"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      className={`px-3 py-1 rounded-md shadow ${
                        currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-[#FFF9E5]"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>

      {/* MODALS */}
      <AddEmployeeModal
        isOpen={showAddEmployee}
        employee={selectedEmployee}
        onClose={() => {
          setShowAddEmployee(false);
          setSelectedEmployee(null);
        }}
        onSave={handleSaveEmployee}
      />

      <BulkUploadEmployees
        isOpen={showBulkUpload}
        onClose={() => setShowBulkUpload(false)}
      />
    </div>
  );
};

export default Tab2;