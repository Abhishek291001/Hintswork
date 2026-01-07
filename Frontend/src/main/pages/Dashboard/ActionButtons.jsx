import React from "react";

const ActionButtons = ({ buttons = [] }) => {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {buttons.map((btn, index) => (
        <button 
          key={index}
          onClick={btn.onClick}
          disabled={btn.disabled}
          className={`
             sm:px-4 sm:py-3
            
            font-semibold
            text-base sm:text-lg
            transition-all duration-300

flex items-center justify-center

            px-4 py-2 text-lg rounded-[6px] 
            ${
              btn.disabled
                ? "bg-[#FFEFB5] text-[#B5A44A] cursor-not-allowed"
                : `
                  text-[#786A08]
                  bg-gradient-to-b from-[#FFE074] to-[#E3B512]
                  hover:from-[#E3B512] hover:to-[#FFE074]
                `
            }
          `}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
