// AddBrandModal.jsx
import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import Uploadicon from '../../assets/upload.svg';

const AddBrandModal = ({ isOpen, onClose, onSave }) => {
  const [brandName, setBrandName] = useState('');
  const [totalHints, setTotalHints] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');
  const [isUnderHintsWork, setIsUnderHintsWork] = useState(false);
  const [image, setImage] = useState(null);


   useEffect(() => {
        if (isOpen) {
          setBrandName('');
          setTotalHints('');
          setHours('');
          setDescription('');
          setIsUnderHintsWork(false);
          setImage(null);
        }
      }, [isOpen]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSave = () => {
    const newBrand = {
      brandName,
      description,
      totalHints,
      hours,
      isUnderHintsWork,
      image,
    };
    onSave(newBrand);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#fffbefa6] bg-opacity-30 flex justify-center items-center overflow-y-auto p-4">
    <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-6 sm:px-11 py-8 sm:py-12 shadow-lg relative max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#786A08]">Add Brand</h2>
          <div onClick={onClose} className="text-3xl font-bold text-[#786A08] cursor-pointer"><RxCrossCircled /></div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Brand Name</label>
            <input
              type="text"
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Total No. of Hints</label>
              <input
                type="number"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={totalHints}
                onChange={(e) => setTotalHints(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Hours</label>
              <input
                type="number"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Short Description</label>
            <textarea
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className='border-[#786A08] bg-white rounded-[10px] size-[18px]'
              checked={isUnderHintsWork}
              onChange={(e) => setIsUnderHintsWork(e.target.checked)}
            />
            <label className='font-semibold text-lg text-[#786A08]'>Is under hints work?</label>
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-[#FF9400] bg-[#FFF7E5] pb-16 pt-5 text-center rounded-[10px] cursor-pointer transition hover:bg-yellow-50"
            >
            {image ? (
                <p className="text-green-600 font-medium">{image.name}</p>
            ) : (
                <div className="flex flex-col items-center text-[#786A08]">
                <img className='w-16 h-16' src={Uploadicon} alt='uploadicon'/>
                <p className="font-semibold text-lg text-black ">Drag & drop document files or browse</p>
                <p className="text-sm font-normal text-[#8B8B8B] mt-1">File size up to 15MB and supported file PNG, JPG</p>
                </div>
            )}
            <div className="mt-4">
                <label className="bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-lg font-bold px-5 py-2 rounded-sm cursor-pointer inline-block hover:bg-[#d6a80e] transition">
                Select from device
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
            </div>
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

export default AddBrandModal;
