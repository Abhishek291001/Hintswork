import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";

const CreateHintModal = ({ isOpen, onClose, onSave }) => {
  const [brand, setBrand] = useState('');
  const [hints, setHints] = useState('');
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [item3, setItem3] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setBrand('');
      setHints('');
      setItem1('');
      setItem2('');
      setItem3('');
      setDescription('');
    }
  }, [isOpen]);

  const handleSave = () => {
    const newHint = {
      brand,
      hints,
      item1,
      item2,
      item3,
      description,
    };
    onSave(newHint);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#fffbefa6] bg-opacity-30 flex justify-center items-center overflow-y-auto p-4">
    <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-6 sm:px-11 py-8 sm:py-12 shadow-lg relative max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#786A08]">Create Hint</h2>
          <div onClick={onClose} className="text-3xl font-bold text-[#786A08] cursor-pointer"><RxCrossCircled /></div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Select Brand</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Hints</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2"
                value={hints}
                onChange={(e) => setHints(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Actionable Item 1</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2"
                value={item1}
                onChange={(e) => setItem1(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Actionable Item 2</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2"
                value={item2}
                onChange={(e) => setItem2(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Actionable Item 3</label>
            <input
              type="text"
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2"
              value={item3}
              onChange={(e) => setItem3(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Description for more</label>
            <textarea
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <div onClick={handleSave} className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl font-bold cursor-pointer">Save</div>
          <div onClick={onClose} className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl font-bold cursor-pointer">Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default CreateHintModal;
