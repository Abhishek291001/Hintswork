import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";

const AddUserModal = ({ isOpen, onClose, onSave }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setSelectedBrand('');
    }
  }, [isOpen]);


  const handleSave = () => {
    const newUser = {
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedBrand,
    };
    onSave(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#fffbefa6] bg-opacity-30 flex justify-center items-center overflow-y-auto p-4">
    <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-6 sm:px-11 py-8 sm:py-12 shadow-lg relative max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#786A08]">Add User</h2>
          <div onClick={onClose} className="text-3xl font-bold text-[#786A08] cursor-pointer">
            <RxCrossCircled />
          </div>
        </div>

        <div className="space-y-4">
         
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">First Name</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Last Name</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

         
          <div>
            <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Email Address</label>
            <input
              type="email"
              className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

         
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Phone Number</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">Select Brand</label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              />
            </div>
          </div>
        </div>

       
        <div className="flex justify-center gap-4 mt-6">
          <div
            onClick={handleSave}
            className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl font-bold cursor-pointer"
          >
            Save
          </div>
          <div
            onClick={onClose}
            className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl font-bold cursor-pointer"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
