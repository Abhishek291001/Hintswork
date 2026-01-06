import React, { useState, useEffect, useRef } from "react";
import { RxCrossCircled } from "react-icons/rx";

const AddSponsorModal = ({ isOpen, onClose, onSave }) => {
  const availableBrands = [
    "hint work",
    "hint education",
    "hint calm",
    "hint finance",
    "hint health",
    "hint diet",
  ];

  const [name, setName] = useState("");
  const [tier, setTier] = useState("");
  const [website, setWebsite] = useState("");
  const [associatedBrands, setAssociatedBrands] = useState([]);
  const [status, setStatus] = useState(true);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setTier("");
      setWebsite("");
      setAssociatedBrands([]);
      setStatus(true);
      setDropdownOpen(false);
    }
  }, [isOpen]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleBrand = (brand) => {
    if (associatedBrands.includes(brand)) {
      setAssociatedBrands((prev) => prev.filter((b) => b !== brand));
    } else {
      setAssociatedBrands((prev) => [...prev, brand]);
    }
  };

  const removeBrand = (brand) => {
    setAssociatedBrands((prev) => prev.filter((b) => b !== brand));
  };

  const handleSave = () => {
    if (!name.trim() || !tier.trim()) {
      alert("Please fill required fields: Sponsor Name and Tier.");
      return;
    }

    const newSponsor = {
      name: name.trim(),
      tier: tier.trim(),
      website: website.trim(),
      associatedBrands,
      status,
    };
    onSave(newSponsor);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#fffbefa6] bg-opacity-30 flex justify-center items-center overflow-y-auto p-4">
      <div className="bg-[#FFFAF4] w-full max-w-[690px] rounded-[14px] px-6 sm:px-11 py-8 sm:py-12 shadow-lg relative max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#786A08]">Add Sponsor</h2>
          <div
            onClick={onClose}
            className="text-3xl font-bold text-[#786A08] cursor-pointer"
          >
            <RxCrossCircled />
          </div>
        </div>

        <div className="space-y-6">
          {/* Sponsor Name & Tier horizontal */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">
                Sponsor Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter sponsor name"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">
                Tier <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                placeholder="Enter tier (e.g. Gold, Silver)"
                required
              />
            </div>
          </div>

          {/* Website & Select Brand horizontal */}
          <div className="flex gap-6 items-start">
            <div className="flex-1">
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">
                Sponsor Website
              </label>
              <input
                type="url"
                className="w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            {/* Select Brand with dropdown */}
            <div className="flex-1 relative" ref={dropdownRef}>
              <label className="block font-semibold text-lg text-[#786A08] mb-1.5">
                Associated Brands
              </label>

              {/* Input field styled like tags input */}
              <div
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="min-h-[44px] w-full border border-[#786A08] bg-white rounded-[10px] p-2 mt-1 flex flex-wrap items-center gap-2 cursor-text"
              >
                {associatedBrands.length === 0 && (
                  <span className="text-gray-400 select-none">Select brands...</span>
                )}
                {associatedBrands.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center bg-yellow-200 text-[#786A08] rounded-full px-3 py-1 text-sm select-none"
                  >
                    <span>{brand}</span>
                    <RxCrossCircled
                      onClick={(e) => {
                        e.stopPropagation();
                        removeBrand(brand);
                      }}
                      className="ml-1 cursor-pointer hover:text-red-600"
                      size={16}
                    />
                  </div>
                ))}
              </div>

              {/* Dropdown list */}
              {dropdownOpen && (
                <div className="absolute z-50 mt-1 w-full max-h-40 overflow-y-auto rounded-md border border-[#786A08] bg-white shadow-lg">
                  {availableBrands.map((brand) => {
                    const selected = associatedBrands.includes(brand);
                    return (
                      <div
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className={`cursor-pointer px-4 py-2 hover:bg-yellow-100 ${
                          selected ? "bg-yellow-200 font-semibold" : ""
                        }`}
                      >
                        {brand}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Status checkbox below */}
          <div className="flex items-center gap-4">
            <label htmlFor="status" className="font-semibold text-lg text-[#786A08]">
              Subscribe User
            </label>
            <input
              type="checkbox"
              id="status"
              checked={status}
              onChange={() => setStatus(!status)}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleSave}
            className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl font-bold cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-12 py-2 rounded-sm bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-xl font-bold cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSponsorModal;
