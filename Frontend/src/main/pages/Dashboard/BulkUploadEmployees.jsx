import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { RxCrossCircled } from "react-icons/rx";
import Upload from "../../assets/Upload.png";

const BulkUploadEmployees = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4" onClick={onClose}>
      {/* Modal */}
      <div
        className="
          relative
          bg-[#FFFAF4]
          w-full
          max-w-[560px]        /* ✅ desktop width like Add Employee */
          max-h-[90vh]
          rounded-xl
          px-5 sm:px-6
          py-5 sm:py-6
          shadow-lg
          overflow-y-auto
          font-montserrat
          scrollbar-thin scrollbar-thumb-[#FFD34E]
        " onClick={(e) => e.stopPropagation()} 
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#786A08]"
        >
          <RxCrossCircled size={22} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-[#786A08]">
            Bulk Upload Employees
          </h2>
          <p className="text-xs sm:text-sm text-[#8B7A1C] mt-1 font-semibold">
            Upload a CSV file with employee details to <br className="hidden sm:block" />
            add them in bulk
          </p>
        </div>

        {/* Upload Box */}
        <div
          onClick={handleBrowseClick}
          className="
            cursor-pointer
            rounded-2xl
            border-2 border-dashed border-[#F5A623]
            bg-[#FFF3D6]
            px-4 py-8 sm:p-10
            text-center
            w-full
            max-w-[520px]       /* ✅ keeps desktop look */
            mx-auto
          "
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px]">
              <img src={Upload} alt="Upload" className="object-contain" />
            </div>

            <p className="text-sm sm:text-base font-semibold text-[#000]">
              Drag & drop your CSV file here
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#000]">
              or click to browse
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Download Sample */}
        <div className="mt-5 flex justify-center">
          <button
            className="
              rounded-md
              bg-gradient-to-b from-[#FFE074] to-[#E3B512]
              px-5 py-2.5
              text-sm sm:text-base
              font-bold
              text-[#786A08]
            "
          >
            Download sample CSV template
          </button>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button
            className="
              rounded-md
              bg-gradient-to-b from-[#FFE074] to-[#E3B512]
              px-6 py-2
              text-sm sm:text-base
              font-bold
              text-[#786A08]
            "
          >
            Upload Employees
          </button>

          <button
            onClick={onClose}
            className="
              rounded-md
              bg-gradient-to-b from-[#FFE074] to-[#E3B512]
              px-6 py-2
              text-sm sm:text-base
              font-bold
              text-[#786A08]
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkUploadEmployees;
