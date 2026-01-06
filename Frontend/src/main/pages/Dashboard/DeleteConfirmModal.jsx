import React from "react";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center " onClick={onClose}>
      <div className="bg-white rounded-2xl p-10 w-full max-w-[520px] text-center shadow-xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-8 border-yellow-400 flex items-center justify-center">
            <span className="text-yellow-400 text-5xl font-bold">!</span>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold mb-4">Are You Sure?</h2>
        <p className="text-gray-400 text-xl mb-10">
          You won't be able to revert this!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white text-xl rounded-lg font-semibold hover:bg-red-700 w-[136.03px] h-[38.85px]"
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="bg-yellow-400 text-white text-xl rounded-lg font-semibold hover:bg-yellow-500 w-[136.03px] h-[38.85px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
