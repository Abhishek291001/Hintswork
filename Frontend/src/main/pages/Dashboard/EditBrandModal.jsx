import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { ArrowLeft } from "lucide-react";

const EditBrandModal = ({ isOpen, onClose, onSubmit, initialData = {} }) => {
  const [brandForm, setBrandForm] = useState({
    brandName: "",
    totalHints: "",
    shortDescription: "",
    isUnderHintWorks: false,
    image: null,
  });

  useEffect(() => {
    if (isOpen) {
      setBrandForm({
        brandName: initialData.brandName || "",
        totalHints: initialData.totalHints || "",
        shortDescription: initialData.shortDescription || "",
        isUnderHintWorks: initialData.isUnderHintWorks || false,
        image: initialData.image || null,
      });
    }
  }, [isOpen, initialData]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBrandForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setBrandForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(brandForm);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 backdrop-blur-sm flex justify-center items-center overflow-y-auto p-4" onClick={onClose}>
      <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-6 sm:px-11 py-8 shadow-lg relative max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-5">
  {/* Left side: Back arrow + title */}
  <div className="flex items-center gap-2">
    <ArrowLeft
      size={24}
      className="cursor-pointer text-[#786A08] hover:opacity-70"
      onClick={onClose}
    />
    <h2 className="text-2xl font-semibold text-[#786A08] montserrat">
      Edit Brand
    </h2>
  </div>

  {/* Right side: Close icon */}
  <div
    onClick={onClose}
    className="text-3xl text-[#786A08] cursor-pointer hover:opacity-70"
  >
    <RxCrossCircled />
  </div>
</div>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-[#786A08] raleway">
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              value={brandForm.brandName}
              onChange={handleFormChange}
              className="h-[54px] px-1.5 border border-[#786A08] text-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-[#786A08] raleway">
              Total No. of Hints
            </label>
            <input
              type="number"
              name="totalHints"
              value={brandForm.totalHints}
              onChange={handleFormChange}
              className="h-[54px] px-1.5 border border-[#786A08] text-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-[#786A08] raleway">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              value={brandForm.shortDescription}
              onChange={handleFormChange}
              className="p-2 border border-[#786A08] text-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isUnderHintWorks"
              checked={brandForm.isUnderHintWorks}
              onChange={(e) =>
                setBrandForm({ ...brandForm, isUnderHintWorks: e.target.checked })
              }
              className="h-5 w-5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
            />
            <label className="text-lg font-semibold text-[#786A08] montserrat">
              Is under Hint Work?
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-[#786A08] raleway">
              Image
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="py-3.5 w-full px-1.5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              />
              {brandForm.image && (
                <FaTrash
                  className="cursor-pointer text-red-500"
                  onClick={() => setBrandForm({ ...brandForm, image: null })}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-11">
            <button
              type="submit"
              className="px-6 py-3 text-xl h-[53px] w-full max-w-[192px] bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] font-bold rounded-sm cursor-pointer montserrat"
            >
              Update
            </button>
            <div
              onClick={onClose}
              className="px-6 py-3 text-xl text-center h-[53px] w-full max-w-[192px] bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] font-bold rounded-sm cursor-pointer montserrat"
            >
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBrandModal;
