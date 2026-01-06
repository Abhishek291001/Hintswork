import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const STATUS_OPTIONS = ["Active", "In Active"];

const EditAwardModal = ({ data, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [award, setAward] = useState("");
  const [points, setPoints] = useState("");
  const [status, setStatus] = useState(STATUS_OPTIONS[0]);

  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setAward(data.award || "");
      setPoints(data.points || "");
      setStatus(data.status || STATUS_OPTIONS[0]);
    }
  }, [data]);

  const handleSave = () => {
    onSave({ ...data, name, award, points, status });
  };

  return (
    <div
      className="bg-[#FFFDF5] p-6 rounded-lg w-full max-w-[689px] relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-[#786A08]"
      >
        <RxCrossCircled />
      </button>

      <h2 className="text-2xl font-semibold text-[#786A08] mb-2 text-center montserrat">
        Edit Award
      </h2>
      <p className="text-[#786A08] text-center mb-6 text-lg font-semibold">
        Update award details for the selected employee
      </p>

      <div className="flex flex-col gap-4">
        <Input label="Employee Name" value={name} onChange={setName} />
        <Input label="Award Type" value={award} onChange={setAward} />
        <Input label="Points" type="number" value={points} onChange={setPoints} />

        <div>
          <label className="block text-[#786A08] mb-1 font-semibold text-lg">
            Status
          </label>
          <select
            className="w-full border border-[#786A08] rounded p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <button
            className="bg-yellow-400 text-[#786A08] font-bold py-2 px-6 rounded min-w-[274px]"
            onClick={handleSave}
          >
            Save Award
          </button>

          <button
            className="bg-gray-200 text-[#786A08] font-bold py-2 px-6 rounded min-w-[219px]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-[#786A08] mb-1 font-semibold text-lg">
      {label}
    </label>
    <input
      type={type}
      className="w-full border border-[#786A08] rounded p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default EditAwardModal;
