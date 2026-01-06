// import React, { useState, useEffect } from "react";
// import AddSponsorModal from "./AddSponsorModal";
// import Editicon from "../../assets/edit.svg";
// import Deleteicon from "../../assets/delete.svg";
// import Helpicon from "../../assets/help.svg";
// import { useSponsorContext } from "../../contexts/SponsorContext";

// const Tab4 = () => {
//   const {
//     sponsors,
//     loadingSponsors,
//     addSponsor,
//     deleteSponsorById,
//     fetchSponsors,
//   } = useSponsorContext();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [deleteSponsorData, setDeleteSponsorData] = useState(null);
//   const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
//   const [actionLoading, setActionLoading] = useState(false);
//   const [allBrands, setAllBrands] = useState([]);

//   useEffect(() => {
//     fetchSponsors(); // ✅ Fetch sponsors on mount
//   }, []);

//   const columns = [
//     { header: "Sponsor ID", accessor: "sponsorId" },
//     { header: "Sponsor Name", accessor: "name" },
//     { header: "Tier", accessor: "tier" },
//     { header: "Website URL", accessor: "websiteUrl" },
//     { header: "Associated Brand", accessor: "associatedBrands" },
//     { header: "Status", accessor: "status" },
//   ];

//   const handleEdit = (sponsor) => {
//     console.log("Edit clicked for sponsor:", sponsor);
//     // TODO: Add edit functionality if needed
//   };

//   const handleOpenDeleteModal = (sponsor) => {
//     setDeleteSponsorData(sponsor);
//     setIsDeleteModalVisible(true);
//   };

//   const handleDeleteConfirm = async () => {
//     if (!deleteSponsorData) return;
//     setActionLoading(true);
//     const res = await deleteSponsorById(deleteSponsorData._id);
//     if (res.success) {
//       alert("Sponsor deleted successfully!");
//       setDeleteSponsorData(null);
//       setIsDeleteModalVisible(false);
//     } else {
//       alert("Error deleting sponsor: " + res.message);
//     }
//     setActionLoading(false);
//   };

//   const handleDeleteCancel = () => {
//     setDeleteSponsorData(null);
//     setIsDeleteModalVisible(false);
//   };

//   const handleAddSponsorClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleSaveSponsor = async (newSponsor) => {
//     setActionLoading(true);

//     const associatedBrandIds = newSponsor.associatedBrands
//       .map((brandName) => {
//         const brand = allBrands.find((b) => b.name === brandName);
//         return brand ? brand._id : null;
//       })
//       .filter((id) => id !== null);

//     const payload = {
//       name: newSponsor.name || "Unknown",
//       tier: newSponsor.tier || "Gold",
//       websiteUrl: newSponsor.website,
//       associatedBrands: associatedBrandIds,
//       status: newSponsor.status ? "Active" : "Inactive",
//     };

//     const res = await addSponsor(payload);
//     if (res.success) {
//       alert("Sponsor added successfully!");
//       setIsModalOpen(false);
//     } else {
//       alert("Failed to add sponsor: " + res.message);
//     }
//     setActionLoading(false);
//   };

//   if (loadingSponsors) {
//     return <div className="text-center text-xl p-8">Loading sponsors...</div>;
//   }

//   return (
//     <div className="space-y-4 relative">
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-2xl md:text-3xl font-semibold text-[#645200]">
//           List of Sponsors
//         </div>
//         <div
//           onClick={handleAddSponsorClick}
//           className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-white text-[16px] md:text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
//         >
//           Add Sponsor
//         </div>
//       </div>

//       <InlineTable
//         columns={columns}
//         data={sponsors.map((s) => ({
//           ...s,
//           associatedBrands: Array.isArray(s.associatedBrands)
//             ? s.associatedBrands.join(", ")
//             : s.associatedBrands,
//           sponsorId: s.sponsorId || s._id,
//           id: s._id,
//         }))}
//         onEdit={handleEdit}
//         onDelete={handleOpenDeleteModal}
//         enablePagination={true}
//         rowsPerPage={4}
//         hasStatusColumn={true}
//         hasSerialNumberColumn={false}
//       />

//       <AddSponsorModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSave={handleSaveSponsor}
//         loading={actionLoading}
//       />

//       {isDeleteModalVisible && (
//         <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 rounded-lg w-full max-w-lg z-10">
//           <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[350px]">
//             <div className="flex justify-center mb-4">
//               <img src={Helpicon} alt="Delete Confirmation" className="w-16 h-16" />
//             </div>
//             <h3 className="text-xl font-semibold text-center">Are You Sure?</h3>
//             <p className="text-center text-gray-600 mt-2">
//               You won’t be able to revert this!
//             </p>
//             <div className="flex justify-center gap-5 mt-6">
//               <button
//                 onClick={handleDeleteConfirm}
//                 disabled={actionLoading}
//                 className="px-6 flex justify-center items-center py-2 bg-[#E30505] text-white rounded-sm text-bold text-[17px] cursor-pointer w-full max-w-[136px]"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={handleDeleteCancel}
//                 disabled={actionLoading}
//                 className="px-6 py-2 flex justify-center items-center bg-[#FDD43E] text-white rounded-sm text-bold text-[17px] cursor-pointer w-full max-w-[136px]"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
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
//         </table>
//       </div>

//       {shouldPaginate && (
//         <div className="flex justify-center gap-5 mt-6">
//           <button
//             disabled={currentPage === 1}
//             onClick={handlePrev}
//             className="px-4 py-2 bg-[#E3B512] text-white rounded"
//           >
//             Prev
//           </button>
//           {[...Array(totalPages).keys()].map((page) => (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page + 1)}
//               className={`px-4 py-2 rounded ${
//                 currentPage === page + 1 ? "bg-[#FDD43E]" : "bg-[#E3B512]"
//               } text-white`}
//             >
//               {page + 1}
//             </button>
//           ))}
//           <button
//             disabled={currentPage === totalPages}
//             onClick={handleNext}
//             className="px-4 py-2 bg-[#E3B512] text-white rounded"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tab4;









// import React, { useState } from "react";
// import { ArrowLeft } from "lucide-react";
// import Editicon from "../../assets/edit.svg";
// import DeleteIcon from "../../assets/delete.svg";
// import Bronze from "../../assets/Bronze.png";
// import Bronze1 from "../../assets/Bronze 1.png";
// import Spark from "../../assets/Spark.png";
// import Silver from "../../assets/Silver.png";
// import Diamond from "../../assets/Diamond.png";

// /* ================= DATA ================= */
// const reportsData = [
//   { name: "Sarah Parker", award: "Bronze", points: 300, status: "Active" },
//   { name: "Mike T", award: "Bronze1", points: 900, status: "In Active" },
//   { name: "Angela C", award: "Spark", points: 300, status: "Active" },
//   { name: "Samantha P", award: "Silver", points: 1800, status: "In Active" },
//   { name: "Ema Davis", award: "Diamond", points: 6000, status: "In Active" },
// ];

// const awardIcons = {
//   Bronze,
//   Bronze1,
//   Silver,
//   Spark,
//   Diamond,
// };

// /* ================= COMPONENT ================= */
// const Tab4 = () => {
//   const [selectedPage, setSelectedPage] = useState(1);

//   return (
//     <div className="font-montserrat space-y-6 px-2 sm:px-4">

//       {/* ================= HEADER ================= */}
//       <div className="flex items-center gap-3 text-[#786A08]
//                       mt-0 sm:-mt-6 lg:-mt-11">
//         <ArrowLeft className="cursor-pointer w-5 sm:w-6" />
//         <h1 className="text-[22px] sm:text-[32px] md:text-[48px] font-semibold">
//           Awards
//         </h1>
//       </div>

//       {/* ================= STATS ================= */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//         <StatCard title="Total Awards" value="20" />
//         <StatCard title="Redemptions" value="7" />
//         <StatCard title="Awards Points" value="1,250" />
//       </div>

//       {/* ================= TABLE ================= */}
//       <div
//         className="-mx-4 sm:mx-0 overflow-x-auto lg:overflow-x-visible
//                    rounded-2xl shadow-md"
//       >
//         <table className="min-w-[900px] w-full">
//           <thead className="bg-[#F8DD8A]">
//             <tr>
//               {["Name", "Logo", "Awards", "Points", "Status", "Action"].map(
//                 (head) => (
//                   <th
//                     key={head}
//                     className="px-4 sm:px-6 lg:px-10 py-3
//                                text-left text-[14px] sm:text-[18px] md:text-[24px]
//                                font-medium text-[#786A08] whitespace-nowrap"
//                   >
//                     {head}
//                   </th>
//                 )
//               )}
//             </tr>
//           </thead>

//           <tbody>
//             {reportsData.map((row, index) => (
//               <tr
//                 key={index}
//                 className={index % 2 === 0 ? "bg-[#FFFBEF]" : "bg-[#F9EFCA]"}
//               >
//                 {/* Name */}
//                 <td className="px-4 sm:px-6 lg:px-10 py-3
//                                text-[14px] sm:text-[18px] lg:text-[20px]
//                                font-medium text-[#786A08]">
//                   {row.name}
//                 </td>

//                 {/* Logo */}
//                 <td className="px-4 sm:px-6 md:px-10 py-3">
//                   <img
//                     src={awardIcons[row.award]}
//                     alt={row.award}
//                     className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
//                   />
//                 </td>

//                 {/* Award */}
//                 <td className="px-4 sm:px-6 md:px-10 py-3
//                                text-[14px] sm:text-[18px] md:text-[20px]
//                                font-medium text-[#786A08]">
//                   {row.award}
//                 </td>

//                 {/* Points */}
//                 <td className="px-4 sm:px-6 md:px-10 py-3
//                                text-[14px] sm:text-[18px] md:text-[20px]
//                                font-medium text-[#786A08]">
//                   {row.points}
//                 </td>

//                 {/* Status */}
//                 <td className="px-4 sm:px-6 md:px-10 py-3">
//                   <span
//                     className={`inline-flex items-center justify-center
//                                 px-3 py-1 sm:w-[120px] sm:h-[30px]
//                                 rounded-md
//                                 text-[12px] sm:text-[16px] md:text-[20px]
//                                 font-medium text-[#645200]
//                                 ${
//                                   index % 2 === 0
//                                     ? "bg-[#FFF2C6]"
//                                     : "bg-[#FFFBEF]"
//                                 }`}
//                   >
//                     {row.status}
//                   </span>
//                 </td>

//                 {/* Actions */}
//                 <td className="px-4 sm:px-6 md:px-10 py-3">
//                   <div className="flex items-center gap-3 sm:gap-4">
//                     <img
//                       src={Editicon}
//                       alt="Edit"
//                       className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]
//                                  cursor-pointer hover:scale-110 transition"
//                     />
//                     <img
//                       src={DeleteIcon}
//                       alt="Delete"
//                       className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]
//                                  cursor-pointer hover:scale-110 transition"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//           {/* ================= PAGINATION ================= */}
//           <tfoot>
//             <tr className="bg-[#FFF5CC]">
//               <td colSpan={6} className="py-3 ">
//                 <div
//                   className="flex flex-wrap justify-center gap-2 sm:gap-3
//                              text-[#786A08] font-medium text-[14px] sm:text-[18px]"
//                 >
//                   <button className="px-3 py-1 rounded-md shadow bg-[#FFF9E5]">
//                     Prev
//                   </button>

//                   {[1, 2].map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => setSelectedPage(page)}
//                       className={`px-4 py-1 rounded-md shadow font-semibold
//                         ${
//                           selectedPage === page
//                             ? "bg-[#FFD94A] text-white"
//                             : "bg-[#FFF9E5] text-[#786A08]"
//                         }`}
//                     >
//                       {page}
//                     </button>
//                   ))}

//                   <button className="px-3 py-1 rounded-md shadow bg-[#FFF9E5]">
//                     Next
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Tab4;

// /* ================= STAT CARD ================= */
// const StatCard = ({ title, value }) => (
//   <div className="bg-[#FFE074] rounded-xl p-4 shadow-md">
//     <p className="text-[14px] sm:text-[18px] font-bold text-[#796B0B]">
//       {title}
//     </p>
//     <p className="text-[22px] sm:text-[32px] font-semibold text-[#796B0B] mt-1">
//       {value}
//     </p>
//   </div>
// );







import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

import Editicon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";

import Bronze from "../../assets/Bronze.png";
import Bronze1 from "../../assets/Bronze 1.png";
import Spark from "../../assets/Spark.png";
import Silver from "../../assets/Silver.png";
import Diamond from "../../assets/Diamond.png";
import EditAwardModal from "./EditAwardModal";



const reportsData = [
  { name: "Sarah Parker", award: "Bronze", points: 300, status: "Active" },
  { name: "Mike T", award: "Bronze1", points: 900, status: "In Active" },
  { name: "Angela C", award: "Spark", points: 300, status: "Active" },
  { name: "Samantha P", award: "Silver", points: 1800, status: "In Active" },
  { name: "Ema Davis", award: "Diamond", points: 6000, status: "In Active" },
  { name: "Ema Davis", award: "Diamond", points: 6000, status: "In Active" },
  { name: "Ema Davis", award: "Diamond", points: 6000, status: "In Active" },
  { name: "Ema Davis", award: "Diamond", points: 6000, status: "In Active" },
];

const awardIcons = {
  Bronze,
  Bronze1,
  Spark,
  Silver,
  Diamond,
};


const Tab4 = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
const [selectedAward, setSelectedAward] = useState(null);

const ITEMS_PER_PAGE = 5;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(reportsData.length / ITEMS_PER_PAGE);

const paginatedReports = reportsData.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);



  return (
    <div className="font-montserrat space-y-4">

  
      <div className="flex items-center gap-3 text-[#786A08]">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
          Awards
        </h1>
      </div>

         
 
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        <StatCard title="Total Awards" value="20" />
        <StatCard title="Redemptions" value="7" />
        <StatCard title="Awards Points" value="1,250" />
      </div>



      
      <div className="relative w-full overflow-x-auto rounded-2xl shadow-md">
        <div className="min-w-[1100px]">

          <table className="w-full border-collapse">
            <thead className="bg-[#F8DD8A]">
              <tr>
                {["Name", "Logo", "Awards", "Points", "Status", "Action"].map(
                  (head) => (
                    <th
                      key={head}
                    //   className="px-4 sm:px-6 lg:px-10 py-4 text-center
                    //     text-sm sm:text-lg lg:text-2xl
                    //     font-medium text-[#786A08] whitespace-nowrap"
                    // >
                    className="px-10 py-4 text-center text-base sm:text-2xl font-medium text-[#786A08] whitespace-nowrap montserrat"
                  >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {paginatedReports.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#FFFBEF]" : "bg-[#F9EFCA]"}
                >
                
                  <td className="px-4 sm:px-6 lg:px-10 py-3 text-[#786A08]
                    text-sm sm:text-base lg:text-xl font-medium text-center">
                    {row.name}
                  </td>

                  
                  <td className="px-4 sm:px-6 lg:px-10 py-3 text-center">
                  <div className="flex justify-center">
                    <img
                      src={awardIcons[row.award]}
                      alt={row.award}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  </td>

               
                  <td className="px-4 sm:px-6 lg:px-10 py-3 text-[#786A08]
                    text-sm sm:text-base lg:text-xl font-medium text-center">
                    {row.award}
                  </td>

                
                  <td className="px-4 sm:px-6 lg:px-10 py-3 text-[#786A08]
                    text-sm sm:text-base lg:text-xl font-medium text-center">
                    {row.points}
                  </td>

                
                  <td className="px-4 sm:px-6 lg:px-10 py-3 text-center">
                    <span
                      className={`inline-flex items-center justify-center
                        px-3 py-1 rounded-md font-medium w-[120px] h-[30px]
                        text-xs sm:text-sm lg:text-base
                        text-[#645200]
                        ${index % 2 === 0 ? "bg-[#FFF2C6]" : "bg-[#FFFBEF]"}`}
                    >
                      {row.status}
                    </span>
                  </td>

               
                  <td className="px-4 sm:px-6 lg:px-10 py-3 text-center">
                    <div className="flex justify-center items-center gap-4">
                      <img
                        src={Editicon}
                        alt="Edit"
                        className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:scale-110 transition"
                        onClick={() => {
    setSelectedAward(row);
    setShowEditModal(true);
  }}
                      />
                      <img
                        src={DeleteIcon}
                        alt="Delete"
                        className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:scale-110 transition"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

         
            <tfoot>
  <tr className="bg-[#FFF5CC]">
    <td colSpan={6} className="py-3">
      <div className="flex justify-center gap-3 text-[#786A08] font-medium text-sm sm:text-base">

        {/* PREV */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className={`px-3 py-1 rounded-md
            ${currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#FFF9E5]"
            }`}
        >
          Prev
        </button>

        {/* PAGE NUMBERS */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-1 rounded-md font-semibold
                ${currentPage === page
                  ? "bg-[#FFD94A] text-white"
                  : "bg-[#FFF9E5] text-[#786A08]"
                }`}
            >
              {page}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          className={`px-3 py-1 rounded-md
            ${currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#FFF9E5]"
            }`}
        >
          Next
        </button>

      </div>
    </td>
  </tr>
</tfoot>

          </table>

        </div>
      </div>

    {showEditModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* 🔥 BLUR BACKDROP */}
    <div
      className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      onClick={() => {
        setShowEditModal(false);
        setSelectedAward(null);
      }}
    />

    {/* MODAL */}
    <div className="relative z-50">
      <EditAwardModal
        data={selectedAward}
        onClose={() => {
          setShowEditModal(false);
          setSelectedAward(null);
        }}
        onSave={() => {
          setShowEditModal(false);
        }}
      />
    </div>
  </div>
)}


    </div>
  );
};

export default Tab4;


const StatCard = ({ title, value }) => (
  <div className="bg-[#FFE074] rounded-xl p-4 shadow-md">
    <p className="text-sm sm:text-base lg:text-lg font-bold text-[#796B0B] montserrat">
      {title}
    </p>
    <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#796B0B] mt-1 montserrat">
      {value}
    </p>
  </div>
);



