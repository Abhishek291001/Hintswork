// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Editicon from "../../assets/edit.svg";
// import DeleteIcon from "../../assets/delete.svg";
// import ActionButtons from "./ActionButtons";
// import { ArrowLeft } from "lucide-react";
// import EditBrandModal from "./EditBrandModal";
// import DeleteConfirmModal from "./DeleteConfirmModal";

// const STORAGE_KEY = "brands_for_hint";

// const HintTablePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { hint } = location.state || {};

//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [brands, setBrands] = useState([]);
//   const [isDeleteOpen, setIsDeleteOpen] = useState(false); // ← NEW
// const [deleteId, setDeleteId] = useState(null); 

// const ITEMS_PER_PAGE = 5;
// const [currentPage, setCurrentPage] = useState(1);


//   // Load brands from localStorage or initialize default
//   useEffect(() => {
//   // 1️⃣ Try to load brands first (always)
//   const stored = localStorage.getItem(STORAGE_KEY);
//   if (stored) {
//     setBrands(JSON.parse(stored));
//     return;
//   }

//   // 2️⃣ Only create defaults if hint exists
//   if (!hint) return;

//   const defaultBrands = Array.from({ length: 6 }).map((_, index) => ({
//     id: index,
//     brandName: hint.title,
//     totalHints: index + 1,
//     shortDescription: `Sample description ${index + 1}`,
//     isUnderHintWorks: index % 2 === 0,
//     image: null,
//   }));

//   setBrands(defaultBrands);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBrands));
// }, [hint]);



//   // if (!hint) {
//   //   return <div className="p-6">No hint selected</div>;
//   // }

//   useEffect(() => {
//   if (!hint && !localStorage.getItem(STORAGE_KEY)) {
//     navigate("/dashboard/hints/manage-hints");
//   }
// }, [hint, navigate]);

  

//   const topButtons = [
//     {
//       label: "Create Hint",
//       onClick: () => navigate(-1),
//     },
//   ];

//   const handleEdit = (brand) => {
//     setSelectedBrand(brand);
//     setIsEditOpen(true);
//   };

//   const handleDelete = (id) => {
//     const updated = brands.filter((b) => b.id !== id);
//     setBrands(updated);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//   };

//  const handleModalSubmit = (updatedBrand) => {
//   const updated = brands.map((b) =>
//     b.id === updatedBrand.id ? updatedBrand : b
//   );
//   setBrands(updated);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//   setIsEditOpen(false);
// };


// const openDeleteModal = (id) => {
//   setDeleteId(id);
//   setIsDeleteOpen(true);
// };


// const confirmDelete = () => {
//   const updated = brands.filter((b) => b.id !== deleteId);
//   setBrands(updated);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//   setIsDeleteOpen(false);
//   setDeleteId(null);
// };


// const totalPages = Math.ceil(brands.length / ITEMS_PER_PAGE);

// const paginatedBrands = brands.slice(
//   (currentPage - 1) * ITEMS_PER_PAGE,
//   currentPage * ITEMS_PER_PAGE
// );


// useEffect(() => {
//   if (currentPage > totalPages) {
//     setCurrentPage(totalPages || 1);
//   }
// }, [brands, totalPages, currentPage]);


//   return (
//     <div className="bg-white relative">
//       {/* ================= HEADER ================= */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
//         <div className="flex items-center gap-3">
//           <ArrowLeft
//             size={24}
//             className="cursor-pointer text-[#786A08] hover:opacity-70"
//             onClick={() => navigate("/dashboard/hints/manage-hints")}
//           />
//           <h2 className="text-3xl sm:text-4xl font-semibold text-[#786A08] montserrat">
//             {hint.title}
//           </h2>
//         </div>
//         <div className="w-full sm:w-auto">
//           <ActionButtons buttons={topButtons} />
//         </div>
//       </div>

//       {/* ================= TABLE ================= */}
//       <div className="overflow-x-auto">
//         <div className="min-w-[900px] overflow-hidden rounded-xl">
//           <table className="min-w-[700px] md:min-w-full w-full">
//             <thead className="bg-[#F8DD8A] montserrat">
//               <tr>
//                 {["Sr. No", "Brand", "Hints", "Description", "Action"].map(
//                   (head) => (
//                     <th
//                       key={head}
//                       className="px-4 py-4 text-sm sm:text-2xl font-medium text-[#645200] text-center whitespace-nowrap montserrat"
//                     >
//                       {head}
//                     </th>
//                   )
//                 )}
//               </tr>
//             </thead>

//             <tbody>
//               {paginatedBrands.map((brand, index) => (
//                 <tr
//                   key={brand.id}
//                   className={`text-center text-[#645200] ${
//                     index % 2 === 0 ? "bg-[#FFFBEF]" : "bg-[#F9EFCA]"
//                   }`}
//                 >
//                   <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
//                     {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}

//                   </td>
//                   <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
//                     {brand.brandName}
//                   </td>
//                   <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
//                     Sample Hint {brand.totalHints}
//                   </td>
//                   <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
//                     {hint.title}
//                   </td>
//                   <td className="px-4 py-4 whitespace-nowrap">
//                     <div className="flex justify-center gap-3">
//                       <img
//                         src={Editicon}
//                         alt="edit"
//                         className="cursor-pointer"
//                         onClick={() => handleEdit(brand)}
//                       />
//                       <img
//   src={DeleteIcon}
//   alt="delete"
//   className="cursor-pointer"
//   onClick={() => openDeleteModal(brand.id)}   // ← CHANGED
// />


// <DeleteConfirmModal
//   isOpen={isDeleteOpen}
//   onClose={() => setIsDeleteOpen(false)}
//   onConfirm={confirmDelete}
// />


//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
            

//             <tfoot>
//   <tr className="bg-[#FFF5CC]">
//     <td colSpan={5} className="py-3">
//       <div className="flex justify-center gap-3 text-[#645200] font-medium montserrat text-xl">

//         {/* PREV */}
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           className={`px-3 py-1 rounded-md shadow
//             ${currentPage === 1
//               ? "bg-gray-200 cursor-not-allowed"
//               : "bg-[#FFF9E5]"
//             }`}
//         >
//           Prev
//         </button>

//         {/* PAGE NUMBERS */}
//         {Array.from({ length: totalPages }).map((_, i) => {
//           const page = i + 1;
//           return (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
//               className={`px-4 py-1 rounded-md shadow font-semibold
//                 ${currentPage === page
//                   ? "bg-[#FFD94A] text-white"
//                   : "bg-[#FFF9E5] text-[#645200]"
//                 }`}
//             >
//               {page}
//             </button>
//           );
//         })}

//         {/* NEXT */}
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() =>
//             setCurrentPage((p) => Math.min(p + 1, totalPages))
//           }
//           className={`px-3 py-1 rounded-md shadow
//             ${currentPage === totalPages
//               ? "bg-gray-200 cursor-not-allowed"
//               : "bg-[#FFF9E5]"
//             }`}
//         >
//           Next
//         </button>

//       </div>
//     </td>
//   </tr>
// </tfoot>



//           </table>
          
//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {isEditOpen && (
//         <EditBrandModal
//           isOpen={isEditOpen}
//           onClose={() => setIsEditOpen(false)}
//           onSubmit={handleModalSubmit}
//           initialData={selectedBrand}
//         />
//       )}
//     </div>
//   );
// };

// export default HintTablePage;



import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editicon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import ActionButtons from "./ActionButtons";
import { ArrowLeft } from "lucide-react";
import EditHintModal from "./EditHintModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import axios from "axios";
import API_BASE_URL from "../../config/apiConfig";

// const STORAGE_KEY = "hints_by_brand";
const ITEMS_PER_PAGE = 5;

const HintTablePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { brandId, brandName } = state || {};

  const [hints, setHints] = useState([]);
  const [selectedHint, setSelectedHint] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
const [loading, setLoading] = useState(false);


  // Load hints for this brand
  useEffect(() => {
  if (!brandId) {
    navigate("/dashboard/hints/manage-hints");
    return;
  }

  fetchHints();
}, [brandId, currentPage]);


  // const saveToStorage = (updatedHints) => {
  //   const all = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  //   all[brandId] = updatedHints;
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  //   setHints(updatedHints);
  // };


  const fetchHints = async () => {
  try {
    setLoading(true);
const token = localStorage.getItem("token"); // get token
    const res = await axios.get(
      `${API_BASE_URL}/api/hints/brands/${brandId}/hints`,
      {
        params: {
          page: currentPage,
          limit: ITEMS_PER_PAGE,
        },
        headers: {
          Authorization: `Bearer ${token}`, // attach token
        },
      }
    );

    setHints(
      res.data.hints.map((h) => ({
        id: h._id,
        title: h.title,
        description: h.description,
        brandName,
      }))
    );

    setTotalPages(res.data.totalPages);
  } catch (err) {
    console.error("Failed to fetch hints", err);
  } finally {
    setLoading(false);
  }
};


  const handleEdit = (hint) => {
    setSelectedHint(hint);
    setIsEditOpen(true);
  };

  // const handleModalSubmit = (updatedHint) => {
  //   const updated = hints.map((h) =>
  //     h.id === updatedHint.id ? updatedHint : h
  //   );
  //   saveToStorage(updated);
  //   setIsEditOpen(false);
  // };


const handleModalSubmit = async (hintData) => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(
      `${API_BASE_URL}/api/hints/admin/hints`,
      {
        title: hintData.title,
        description: hintData.description,
        brandId: hintData.brandId, // 🔥 THIS IS KEY
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchHints(); // refresh list
  } catch (err) {
    console.error("Failed to save hint", err);
  } finally {
    setIsEditOpen(false);
    setSelectedHint(null);
  }
};



  // const updated = selectedHint
  //   ? hints.map((h) => (h.id === selectedHint.id ? newHint : h))
  //   : [...hints, newHint];

  // saveToStorage(updated);
  // setIsEditOpen(false);
  // setSelectedHint(null);
//};



const confirmDelete = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(`${API_BASE_URL}/api/company/admin/hints/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchHints();
  } catch (err) {
    console.error("Delete failed", err);
  } finally {
    setIsDeleteOpen(false);
    setDeleteId(null);
  }
};



  // const totalPages = Math.ceil(hints.length / ITEMS_PER_PAGE);
  // const paginated = hints.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // );

  return (
    <div className="bg-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft
            className="cursor-pointer text-[#786A08]"
            onClick={() => navigate("/dashboard/hints/manage-hints")}
          />
          <h2 className="text-3xl font-semibold text-[#786A08] montserrat">
            {brandName}
          </h2>
        </div>
        <ActionButtons
  buttons={[
    {
      label: "Create Hint",
      onClick: () => {
        setSelectedHint({
          title: "",
          description: "",
        });
        setIsEditOpen(true);
      },
    },
  ]}
/>
      </div>

      {/* TABLE */}
      <table className="w-full">
        <thead className="bg-[#F8DD8A]">
          <tr>
            {["Sr. No", "Brand", "Title", "Description", "Action"].map((h) => (
              <th key={h} className="py-3 text-[#645200]">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {hints.map((hint, i) => (
            <tr key={hint.id} className="text-center">
              <td>{(currentPage - 1) * ITEMS_PER_PAGE + i + 1}</td>
              <td>{hint.brandName}</td>
              <td>{hint.title}</td>
              <td>{hint.description}</td>
              <td className="flex justify-center gap-3">
                <img src={Editicon} onClick={() => handleEdit(hint)} alt="edit" className="cursor-pointer" />
                <img
                  src={DeleteIcon}
                  onClick={() => {
                    setDeleteId(hint.id);
                    setIsDeleteOpen(true);
                  }}
                  alt="delete"
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditOpen && (
        <EditHintModal
          hint={selectedHint}
          brandId={brandId}
          onClose={() => setIsEditOpen(false)}
          onSave={handleModalSubmit}
        />
      )}

      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default HintTablePage;
