import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editicon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import ActionButtons from "./ActionButtons";
import { ArrowLeft } from "lucide-react";
import EditBrandModal from "./EditBrandModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

const STORAGE_KEY = "brands_for_hint";

const HintTablePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hint } = location.state || {};

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brands, setBrands] = useState([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // ← NEW
const [deleteId, setDeleteId] = useState(null); 

const ITEMS_PER_PAGE = 5;
const [currentPage, setCurrentPage] = useState(1);


  // Load brands from localStorage or initialize default
  useEffect(() => {
  // 1️⃣ Try to load brands first (always)
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    setBrands(JSON.parse(stored));
    return;
  }

  // 2️⃣ Only create defaults if hint exists
  if (!hint) return;

  const defaultBrands = Array.from({ length: 6 }).map((_, index) => ({
    id: index,
    brandName: hint.title,
    totalHints: index + 1,
    shortDescription: `Sample description ${index + 1}`,
    isUnderHintWorks: index % 2 === 0,
    image: null,
  }));

  setBrands(defaultBrands);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBrands));
}, [hint]);



  // if (!hint) {
  //   return <div className="p-6">No hint selected</div>;
  // }

  useEffect(() => {
  if (!hint && !localStorage.getItem(STORAGE_KEY)) {
    navigate("/dashboard/hints/manage-hints");
  }
}, [hint, navigate]);

  

  const topButtons = [
    {
      label: "Create Hint",
      onClick: () => navigate(-1),
    },
  ];

  const handleEdit = (brand) => {
    setSelectedBrand(brand);
    setIsEditOpen(true);
  };

  const handleDelete = (id) => {
    const updated = brands.filter((b) => b.id !== id);
    setBrands(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

 const handleModalSubmit = (updatedBrand) => {
  const updated = brands.map((b) =>
    b.id === updatedBrand.id ? updatedBrand : b
  );
  setBrands(updated);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  setIsEditOpen(false);
};


const openDeleteModal = (id) => {
  setDeleteId(id);
  setIsDeleteOpen(true);
};


const confirmDelete = () => {
  const updated = brands.filter((b) => b.id !== deleteId);
  setBrands(updated);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  setIsDeleteOpen(false);
  setDeleteId(null);
};


const totalPages = Math.ceil(brands.length / ITEMS_PER_PAGE);

const paginatedBrands = brands.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);


useEffect(() => {
  if (currentPage > totalPages) {
    setCurrentPage(totalPages || 1);
  }
}, [brands, totalPages, currentPage]);


  return (
    <div className="bg-white relative">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
        <div className="flex items-center gap-3">
          <ArrowLeft
            size={24}
            className="cursor-pointer text-[#786A08] hover:opacity-70"
            onClick={() => navigate("/dashboard/hints/manage-hints")}
          />
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#786A08] montserrat">
            {hint.title}
          </h2>
        </div>
        <div className="w-full sm:w-auto">
          <ActionButtons buttons={topButtons} />
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px] overflow-hidden rounded-xl">
          <table className="min-w-[700px] md:min-w-full w-full">
            <thead className="bg-[#F8DD8A] montserrat">
              <tr>
                {["Sr. No", "Brand", "Hints", "Sponsor", "Action"].map(
                  (head) => (
                    <th
                      key={head}
                      className="px-4 py-4 text-sm sm:text-2xl font-medium text-[#645200] text-center whitespace-nowrap montserrat"
                    >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {paginatedBrands.map((brand, index) => (
                <tr
                  key={brand.id}
                  className={`text-center text-[#645200] ${
                    index % 2 === 0 ? "bg-[#FFFBEF]" : "bg-[#F9EFCA]"
                  }`}
                >
                  <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
                    {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}

                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
                    {brand.brandName}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
                    Sample Hint {brand.totalHints}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">
                    {hint.title}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex justify-center gap-3">
                      <img
                        src={Editicon}
                        alt="edit"
                        className="cursor-pointer"
                        onClick={() => handleEdit(brand)}
                      />
                      <img
  src={DeleteIcon}
  alt="delete"
  className="cursor-pointer"
  onClick={() => openDeleteModal(brand.id)}   // ← CHANGED
/>


<DeleteConfirmModal
  isOpen={isDeleteOpen}
  onClose={() => setIsDeleteOpen(false)}
  onConfirm={confirmDelete}
/>


                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            

            <tfoot>
  <tr className="bg-[#FFF5CC]">
    <td colSpan={5} className="py-3">
      <div className="flex justify-center gap-3 text-[#645200] font-medium montserrat text-xl">

        {/* PREV */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className={`px-3 py-1 rounded-md shadow
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
              className={`px-4 py-1 rounded-md shadow font-semibold
                ${currentPage === page
                  ? "bg-[#FFD94A] text-white"
                  : "bg-[#FFF9E5] text-[#645200]"
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
          className={`px-3 py-1 rounded-md shadow
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

      {/* ================= MODAL ================= */}
      {isEditOpen && (
        <EditBrandModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSubmit={handleModalSubmit}
          initialData={selectedBrand}
        />
      )}
    </div>
  );
};

export default HintTablePage;
