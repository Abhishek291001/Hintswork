import { useState } from "react";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";



const AddAnnouncementModal = ({ isOpen, onClose }) => {
    const [publishType, setPublishType] = useState("Schedule");

  if (!isOpen) return null;




  return (
    
     <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4"
      onClick={onClose} // ✅ outside click
    >
      {/* BLUR + DARK BACKDROP */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* MODAL */}
      <div
        className="
          relative bg-[#FFFBEF] w-full
          max-w-2xl sm:max-w-3xl lg:max-w-4xl
          rounded-3xl p-5 sm:p-8 lg:p-10
          shadow-xl max-h-[90vh] overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()} // ✅ stop inside clicks
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#786A08]"
        >
          <RxCrossCircled size={28} />
        </button>

          {/* TITLE */}
          <h2
            className="text-center text-xl sm:text-2xl lg:text-3xl
            font-semibold text-[#786A08]
            mb-6 sm:mb-10 montserrat"
          >
            Create New Announcement
          </h2>

          {/* HEADLINE */}
          <div className="mb-5 sm:mb-6">
            <label className="text-[#786A08] text-base sm:text-lg font-semibold raleway">
              Enter Headline
            </label>
            <input
              type="text"
              className="w-full mt-2 px-3 sm:px-4 py-2 sm:py-3
              border-2 border-[#786A08] rounded-xl bg-transparent
              text-[#786A08] text-sm sm:text-base"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="text-[#786A08] text-base sm:text-lg font-semibold raleway">
              Message
            </label>
            <input
              type="text"
              className="w-full mt-2 px-3 sm:px-4 py-2 sm:py-3
              border-2 border-[#786A08] rounded-xl bg-transparent
              text-[#786A08] text-sm sm:text-base"
            />
          </div>

          {/* IMAGE + SETTINGS */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            
            {/* UPLOAD IMAGE */}
            <div
              className="w-full lg:flex-[0.8] bg-[#ECECEC] rounded-xl
              flex flex-col items-center justify-center
              py-8 sm:py-14 lg:py-16 cursor-pointer"
            >
              <div className="bg-[#BDBDBD] rounded-lg p-2 mb-3 sm:mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM5 5h14v8l-3-3-4 4-2-2-5 5V5Z" />
                </svg>
              </div>

              <p className="text-black text-sm sm:text-base font-bold montserrat">
                Upload Image
              </p>
            </div>

            {/* RIGHT PANEL */}
            <div
              className="w-full lg:flex-[1.2]
              border-2 border-black rounded-xl
              p-4 sm:p-6"
            >
              {/* EXPIRY DATE */}
              <div className="flex flex-col sm:flex-row sm:items-center  gap-3 mb-6">
                <span className="text-base sm:text-xl font-bold montserrat whitespace-nowrap">
                  Expiry Date
                </span>

                <select className="border-2 border-[#786A08] rounded-xl px-4 py-2 text-[#786A08] w-full">
                  <option>Select end date</option>
                </select>
              </div>

              {/* RADIO BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
  {["Schedule", "Publish Now"].map((option) => (
    <label
      key={option}
      className="flex items-center gap-2 cursor-pointer
      raleway font-semibold text-base sm:text-lg text-[#786A08]"
    >
      <input
        type="radio"
        name="publish"
        checked={publishType === option}
        onChange={() => setPublishType(option)}
        className="hidden"
      />

      {/* CUSTOM RADIO – SAME AS ASSIGN PLAN */}
      <div
        className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border
        flex items-center justify-center
        ${
          publishType === option
            ? "border-[#FFD34E]"
            : "border-[#FFD34E]"
        }`}
      >
        {publishType === option && (
          <div className="w-2 h-2 bg-[#FFD34E] rounded-full" />
        )}
      </div>

      <span>{option}</span>
    </label>
  ))}
</div>


              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
  <button
    className="w-full sm:w-auto
    bg-[#F5C518]
    py-2 sm:py-3
    px-6
    rounded-md
    font-bold montserrat
    text-lg sm:text-xl
    text-[#786A08]"
  >
    Preview
  </button>

  <button
    className="w-full sm:w-auto
    bg-[#F5C518]
    py-2 sm:py-3
    px-6
    rounded-md
    font-bold montserrat
    text-lg sm:text-xl
    text-[#786A08]"
  >
    Publish
  </button>
</div>

            </div>
          </div>
        </div>
      </div>
    
  );
};

export default AddAnnouncementModal;
