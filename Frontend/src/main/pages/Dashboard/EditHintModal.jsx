import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const HINT_TYPES = ["Hint+", "Hint++"];
const CATEGORIES = [
  "HintDiet",
  "HintWork",
  "HintHealth",
  "HintFinance",
  "HintCalm",
  "HintEducation",
];

const EditHintModal = ({ hint, onClose, onSave }) => {
  const [hintType, setHintType] = useState(hint?.type || HINT_TYPES[0]);
  const [category, setCategory] = useState(hint?.category || CATEGORIES[0]);
  const [title, setTitle] = useState(hint?.title || "");
  const [desc, setDesc] = useState(hint?.desc || "");
  const [approval, setApproval] = useState(hint?.approval || false);

  const handleSave = () => {
    onSave({
      ...hint,
      type: hintType,
      category,
      title,
      desc,
      approval,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#FFFDF5] p-6 rounded-lg w-full max-w-[689px] relative" onClick={(e) => e.stopPropagation()}>
        
         <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-2xl text-[#786A08]"
                >
                  <RxCrossCircled />
                </button>

        <h2 className="text-2xl font-semibold text-[#786A08] mb-2 text-center montserrat">
          Add Private Company Hint
        </h2>
        <p className="text-[#786A08] text-center mb-4 text-lg font-semibold">
          Create a custom hint to share with your employees
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-[#786A08] mb-1 raleway font-semibold text-lg">Hint Type</label>
            <select
              className="w-full border border-[#786A08] rounded p-2 text-[#786A08]"
              value={hintType}
              onChange={(e) => setHintType(e.target.value)}
            >
              {HINT_TYPES.map((type) => (
                <option key={type}>{type}</option>
                
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#786A08] mb-1 raleway font-semibold text-lg">Category</label>
            <select
              className="w-full border border-[#786A08] rounded p-2 text-[#786A08]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#786A08] mb-1 raleway font-semibold text-lg">Hint Title</label>
            <input
              type="text"
              className="w-full border border-[#786A08] rounded p-2 text-[#786A08]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#786A08] mb-1 raleway font-semibold text-lg">Description</label>
            <textarea
              className="w-full border border-[#786A08] rounded p-2 text-[#786A08]"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

         
          <div className="flex items-center gap-4">
            <span className="text-[#786A08] raleway font-semibold text-lg">Approval Required</span>
            <button
              type="button"
              onClick={() => setApproval(!approval)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                approval ? "bg-yellow-400" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  approval ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
  <button
    className="
      bg-yellow-400 text-[#786A08] font-bold
      py-2 px-6
      rounded hover:brightness-105 montserrat
      text-sm sm:text-base md:text-lg lg:text-xl
      w-full sm:w-auto min-w-[274px]
    "
    onClick={handleSave}
  >
    Submit for Approval
  </button>

  <button
    className="
      bg-yellow-400 text-[#786A08] font-bold
      py-2 px-6
      rounded hover:brightness-105 montserrat
      text-sm sm:text-base md:text-lg lg:text-xl
      w-full sm:w-auto min-w-[219px]
    "
    onClick={handleSave}
  >
    Save Hint
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default EditHintModal;
