import React, { useState } from 'react';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import Arrowicon from '../../assets/arrow.svg';

const EditBrandForm = ({ onSubmit, onCancel, initialData = {} }) => {
  const [brandForm, setBrandForm] = useState({
    brandName: initialData.brandName || '',
    totalHints: initialData.totalHints || '',
    hours: initialData.hours || '',
    shortDescription: initialData.shortDescription || '',
    isUnderHintWorks: initialData.isUnderHintWorks || false,
    image: initialData.image || null,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBrandForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setBrandForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(brandForm); 
  };

  return (
    <div className="p-6 space-y-6">
      

      <div className="bg-[#FFFBEF] p-11 rounded-lg shadow-md w-full max-w-[690px] mx-auto">
        <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2.5">
                <img className="cursor-pointer text-xl text-[#786A08]" src={Arrowicon} alt='arrowicon' onClick={onCancel}/>
            
            <h2 className="text-2xl font-semibold text-[#786A08]">Add Brand</h2>
            </div>
        </div>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-raleway font-semibold text-[#786A08] mb-1.5">Brand Name</label>
            <input
              type="text"
              name="brandName"
              value={brandForm.brandName}
              onChange={handleFormChange}
              className="h-[54px] px-1.5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-lg font-raleway font-semibold text-[#786A08] mb-1.5">Total No. of Hints</label>
              <input
                type="number"
                name="totalHints"
                value={brandForm.totalHints}
                onChange={handleFormChange}
                className="h-[54px] px-1.5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              />
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-lg font-raleway font-semibold text-[#786A08] mb-1.5">Hours</label>
              <input
                type="number"
                name="hours"
                value={brandForm.hours}
                onChange={handleFormChange}
                className="h-[54px] px-1.5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-raleway font-semibold text-[#786A08] mb-1.5">Short Description</label>
            <textarea
              name="shortDescription"
              value={brandForm.shortDescription}
              onChange={handleFormChange}
              className="p-2 px-1.5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
            />
          </div>

          <div className="flex items-center gap-2">
            
            <input
              type="checkbox"
              name="isUnderHintWorks"
              checked={brandForm.isUnderHintWorks}
              onChange={(e) => setBrandForm({ ...brandForm, isUnderHintWorks: e.target.checked })}
              className="h-5 w-5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
            />
            <label className="text-lg font-raleway font-semibold text-[#786A08] mb-1.5">Is under Hint Work?</label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-raleway font-semibold text-[#786A08] mb-1.5">Image</label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="py-3.5 w-full px-1.5 border border-[#786A08] rounded-[10px] bg-[#FFFAF4]"
              />
              {brandForm.image && (
                <FaTrash
                  className="cursor-pointer text-red-500"
                  onClick={() => setBrandForm({ ...brandForm, image: null })}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-11">
            <div
              type="submit"
              className="px-6 py-3 text-xl text-center w-full max-w-[192px] bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] font-bold rounded-sm cursor-pointer"
            >
              Save
            </div>
            <div
              type="button"
              onClick={onCancel}
              className="px-6 py-3 text-xl text-center w-full max-w-[192px] bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] font-bold rounded-sm cursor-pointer"
            >
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBrandForm;
