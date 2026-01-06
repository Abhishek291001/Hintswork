
import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import Uploadicon from '../../assets/upload.svg';

const AddHintsModal = ({ isOpen, onClose, onUpload }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setFile(null); 
    }
  }, [isOpen]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    if (file && onUpload) {
      onUpload(file);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#fffbefa6] bg-opacity-30 flex justify-center items-center overflow-y-auto p-4">
    <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-6 sm:px-11 py-8 sm:py-12 shadow-lg relative max-h-screen overflow-y-auto">
        
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#786A08]">Add Hints</h2>

          <div className="flex items-center gap-3">
            <a
              href="/template.xlsx" 
              download
              className="text-lg bg-gradient-to-b from-[#FFE074] to-[#E3B512] font-bold !text-white border rounded-[6px] px-4 py-2 transition"
            >
              Download Template
            </a>

            {/* <div onClick={onClose} className="text-3xl text-[#786A08] cursor-pointer">
              <RxCrossCircled />
            </div> */}
          </div>
        </div>

       
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-[#FF9400] bg-[#FFF7E5] pb-16 pt-5 text-center rounded-[10px] cursor-pointer transition hover:bg-yellow-50"
        >
          {file ? (
            <p className="text-green-600 font-medium">{file.name}</p>
          ) : (
            <div className="flex flex-col items-center text-[#786A08]">
              <img className='w-16 h-16' src={Uploadicon} alt='uploadicon' />
              <p className="font-semibold text-lg text-black">Drag & drop document files or browse</p>
              <p className="text-sm font-normal text-[#8B8B8B] mt-1">
                File size up to 15MB and supported file PNG, JPG
              </p>
            </div>
          )}
          <div className="mt-4">
            <label className="bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-lg font-bold px-5 py-2 rounded-sm cursor-pointer inline-block hover:bg-[#d6a80e] transition">
              Select from device
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          </div>
        </div>

       
        <div className="flex justify-center gap-4 mt-8">
          <div
            onClick={handleUpload}
            className="px-5 md:px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-lg md:text-xl font-bold cursor-pointer"
          >
            Upload
          </div>
          <div
            onClick={onClose}
            className="px-5 md:px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-lg md:text-xl font-bold cursor-pointer"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHintsModal;
