import React, { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import Editicon from "../../assets/edit.svg";
import camera from "../../assets/camera.png";
import EditHintModal from "./EditHintModal";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "manage_hints";

const ManageHints = () => {
  const navigate = useNavigate();

  const [hints, setHints] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Hint Work", desc: "Your Path to Healthier living Starts Here. Revolutionizing...", image: null },
      { id: 2, title: "Hint Education", desc: "Hint Education is your guide to unlocking knowledge...", image: null },
      { id: 3, title: "Hint Finance", desc: "Hint Finance empowers you to take control of your finances...", image: null },
      { id: 4, title: "Hint Calm", desc: "Hint Calm is your sanctuary for peace and mindfulness...", image: null },
      { id: 5, title: "Hint Health", desc: "Hint Health provides guidance on nutrition and wellness...", image: null },
      { id: 6, title: "Hint Diet", desc: "Hint Diet offers personalized nutrition and wellness solutions...", image: null },
    ];
  });

  const [selectedHint, setSelectedHint] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isNew, setIsNew] = useState(false); // Track if it's a new hint
  const [selectedHintTable, setSelectedHintTable] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(hints));
  }, [hints]);

  // Open modal for editing
  const handleEditClick = (hint) => {
    setSelectedHint(hint);
    setIsNew(false);
    setShowEditModal(true);
  };

  // Open modal for creating new hint
  const handleAddClick = (type) => {
    setSelectedHint({ id: Date.now(), title: type, desc: "", image: null }); // default values
    setIsNew(true);
    setShowEditModal(true);
  };

  const handleSave = (hintData) => {
    if (isNew) {
      setHints((prev) => [...prev, hintData]);
    } else {
      setHints((prev) =>
        prev.map((h) => (h.id === hintData.id ? hintData : h))
      );
    }
    setShowEditModal(false);
    setSelectedHint(null);
  };

  const topButtons = [
    { label: "Add Private Hint", onClick: () => handleAddClick("Private Hint") },
    { label: "Add Private Brand", onClick: () => handleAddClick("Private Brand") },
    { label: "Upload Spreadsheet", onClick: () => console.log("Upload clicked") },
  ];

  return (
    <div className="p-2 bg-white font-montserrat" >
   <div
  className="
    flex flex-col
    lg:flex-row
    items-start lg:items-center
    justify-start lg:justify-between
    mb-6 gap-4 
  "
>
  <h1 className="text-3xl lg:text-4xl font-semibold text-[#786A08] montserrat">
    Hints
  </h1>

  <ActionButtons
    buttons={topButtons}
    className="
      text-base lg:text-xl
      montserrat font-semibold
      flex flex-wrap
      justify-start lg:justify-end
      gap-3
    "
  />
</div>




      {/* Hint Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {hints.map((hint) => (
  <div
    key={hint.id}
    className="relative flex items-start gap-4 border-[2.55px] border-yellow-300 rounded-lg p-4 hover:shadow-md transition bg-[#FFFDF5] cursor-pointer"
    onClick={() =>navigate("hint-table", { state: { hint } })} // open table on click

    
            
 
  >
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <img
          src={hint.image || camera}
          alt="cam"
          className="w-[40.81px] h-[40.81px] object-cover rounded"
        />
        <h2 className="font-semibold text-lg mt-1 text-center montserrat">{hint.title}</h2>
      </div>

      <div className="flex-1">
        <p className="text-sm text-[#706000] font-medium montserrat line-clamp-2 mr-5">
          {hint.desc}
        </p>
      </div>
    </div>

    <img
      src={Editicon}
      alt="edit"
      className="cursor-pointer right-2 absolute"
      onClick={(e) => {
        e.stopPropagation(); // prevent opening table
        handleEditClick(hint);
      }}
    />
  </div>
))}

{selectedHintTable && (
  <div className="mt-8 bg-white p-4 rounded shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-[#786A08]">{selectedHintTable.title}</h2>
      <button
        className="text-[#786A08] font-bold"
        onClick={() => setSelectedHintTable(null)}
      >
        Back
      </button>
    </div>
    <table className="min-w-full border border-yellow-300">
      <thead className="bg-yellow-200 text-left">
        <tr>
          <th className="p-2 border text-[#645200]">Sr. No</th>
          <th className="p-2 border">Brand</th>
          <th className="p-2 border">Hints</th>
          <th className="p-2 border">Sponsor</th>
          <th className="p-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 8 }).map((_, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-yellow-50" : "bg-white"}>
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">{selectedHintTable.title}</td>
            <td className="p-2 border">Sample Hint {index + 1}</td>
            <td className="p-2 border">{selectedHintTable.title}</td>
            <td className="p-2 border flex gap-2">
              <img src={Editicon} alt="edit" className="w-4 h-4 cursor-pointer"/>
              <span className="cursor-pointer text-red-500">🗑</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
      </div>

      {showEditModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Background blur overlay */}
    <div
      className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      onClick={() => {
        setShowEditModal(false);
        setSelectedHint(null);
      }}
    />

    {/* Modal content */}
    <div className="relative z-50">
      <EditHintModal
        hint={selectedHint}
        onClose={() => {
          setShowEditModal(false);
          setSelectedHint(null);
        }}
        onSave={handleSave}
      />
    </div>
  </div>
)}

    </div>
  );
};

export default ManageHints;
