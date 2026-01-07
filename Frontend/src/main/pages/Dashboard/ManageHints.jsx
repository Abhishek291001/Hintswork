import React, { useEffect, useState } from "react";
import ActionButtons from "./ActionButtons";
import Editicon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import camera from "../../assets/camera.png";
import EditHintModal from "./EditHintModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/apiConfig";
import EditBrandModal from "./EditBrandModal";

// const STORAGE_KEY = "manage_hints";

const ManageHints = () => {
  const navigate = useNavigate();

  // const [hints, setHints] = useState(() => {
  //   const saved = localStorage.getItem(STORAGE_KEY);
  //   return saved ? JSON.parse(saved) : [
  //     { id: 1, title: "Hint Work", desc: "Your Path to Healthier living Starts Here. Revolutionizing...", image: null },
  //     { id: 2, title: "Hint Education", desc: "Hint Education is your guide to unlocking knowledge...", image: null },
  //     { id: 3, title: "Hint Finance", desc: "Hint Finance empowers you to take control of your finances...", image: null },
  //     { id: 4, title: "Hint Calm", desc: "Hint Calm is your sanctuary for peace and mindfulness...", image: null },
  //     { id: 5, title: "Hint Health", desc: "Hint Health provides guidance on nutrition and wellness...", image: null },
  //     { id: 6, title: "Hint Diet", desc: "Hint Diet offers personalized nutrition and wellness solutions...", image: null },
  //   ];
  // });


    const [hints, setHints] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedHint, setSelectedHint] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isNew, setIsNew] = useState(false); // Track if it's a new hint
  const [selectedHintTable, setSelectedHintTable] = useState(null);
  const [showEditBrandModal, setShowEditBrandModal] = useState(false);
const [selectedBrand, setSelectedBrand] = useState(null);


   useEffect(() => {
    const fetchHints = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/brand/brands`, {
          headers: { Authorization: `Bearer ${token}` },
        });

       const mappedHints = res.data.brands.map((brand) => ({
          _id: brand._id,
          title: brand.name,
          desc: brand.shortDescription,
          image: brand.image?.url || null,
          totalHints: brand.totalHints,
          isSystemBrand: brand.isSystemBrand,
        }));

        setHints(mappedHints);
      } catch (err) {
        console.error("Failed to fetch hints:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHints();
  }, []);


  // Open modal for editing
  const handleEditClick = (hint) => {
    setSelectedHint(hint);
    setIsNew(false);
    setShowEditModal(true);
  };

  // Open modal for creating new hint
  const handleAddClick = () => {
    setSelectedHint({ title: "", desc: "", image: null });
    setIsNew(true);
    setShowEditModal(true);
  };

  const handleAddBrandClick = () => {
  setSelectedBrand({ name: "", shortDescription: "", image: null });
  setIsNew(true); // optional if you want to track new brand
  setShowEditBrandModal(true);
};


 const handleSave = async (hintData) => {
    const token = localStorage.getItem("token");

    try {
      if (isNew) {
        const res = await axios.post(`${API_BASE_URL}/api/brand/admin/brands`, {
          name: hintData.name,
          shortDescription: hintData.shortDescription,
          image: hintData.image,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const newHint = {
          _id: res.data.brand._id,
          title: res.data.brand.name,
          desc: res.data.brand.shortDescription,
          image: res.data.brand.image?.url || null,
        };

        setHints((prev) => [...prev, newHint]);
      } else {
        const res = await axios.put(
          `${API_BASE_URL}/api/brand/${hintData._id}`,
          {
            name: hintData.name,
            shortDescription: hintData.shortDescription,
            image: hintData.image,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const updatedHint = {
          _id: res.data.brand._id,
          title: res.data.brand.name,
          desc: res.data.brand.shortDescription,
          image: res.data.brand.image?.url || null,
        };

        setHints((prev) =>
          prev.map((h) => (h._id === updatedHint._id ? updatedHint : h))
        );
      }
    } catch (err) {
      console.error("Failed to save hint:", err);
      alert("Failed to save hint. Please try again.");
    } finally {
      setShowEditModal(false);
      setSelectedHint(null);
    }
  };


const handleSaveBrand = async (brandData) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${API_BASE_URL}/api/brand/admin/brands`,
      {
        name: brandData.name,
        shortDescription: brandData.shortDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    setHints(prev => [
      ...prev,
      {
        _id: res.data.brand._id,
        title: res.data.brand.name,
        desc: res.data.brand.shortDescription,
        image: null,
      },
    ]);
  } catch (err) {
    console.error("Failed to save brand:", err.response?.data || err);
    alert("Failed to save brand");
  } finally {
    setShowEditBrandModal(false);
    setSelectedBrand(null);
  }
};





  const handleDeleteBrand = async (_id) => {
    if (!_id) return;

    const confirmed = window.confirm("Are you sure you want to delete this brand?");
    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/brand/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setHints((prev) => prev.filter((hint) => hint._id !== _id));
    } catch (err) {
      console.error("Failed to delete brand:", err.response?.data?.message || err.message);
      alert("Failed to delete brand. Please try again.");
    }
  };



  const topButtons = [
    { label: "Add Private Hint", onClick: () => handleAddClick("Private Hint") },
    { label: "Add Private Brand", onClick: () => handleAddBrandClick("Private Brand") },
    { label: "Upload Spreadsheet", onClick: () => console.log("Upload clicked") },
  ];

return (
    <div className="p-6 bg-white font-montserrat">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between mb-6 gap-4">
        <h1 className="text-3xl lg:text-4xl font-semibold text-[#786A08] montserrat">
          Hints
        </h1>

        <ActionButtons
          buttons={topButtons}
          className="text-base lg:text-xl montserrat font-semibold flex flex-wrap justify-start lg:justify-end gap-3"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hints.map((hint) => (
            <div
              key={hint._id}
              className="relative flex items-start gap-4 border-[2.55px] border-yellow-300 rounded-lg p-4 hover:shadow-md transition bg-[#FFFDF5] cursor-pointer"
              onClick={() => navigate("hint-table", { state: { hint } })}
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src={hint.image || camera}
                    alt="cam"
                    className="w-[40.81px] h-[40.81px] object-cover rounded"
                  />
                  <h2 className="font-semibold text-lg mt-1 text-center montserrat">
                    {hint.title}
                  </h2>
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
                  e.stopPropagation();
                  handleEditClick(hint);
                }}
              />

              <img
                src={DeleteIcon}
                alt="delete"
                className="cursor-pointer right-2 absolute mt-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteBrand(hint._id);
                }}
              />
            </div>
          ))}
        </div>
      )}

      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => {
              setShowEditModal(false);
              setSelectedHint(null);
            }}
          />
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


      {showEditBrandModal && (
  <EditBrandModal
    isOpen={showEditBrandModal}
    initialData={selectedBrand}
    onClose={() => {
      setShowEditBrandModal(false);
      setSelectedBrand(null);
    }}
    onSubmit={handleSaveBrand}
    //{
      
    //=>
    // {
      // handle save logic for brand
      // console.log("Brand data submitted:", handleSaveBrand);
      // setShowEditBrandModal(false);
      // setSelectedBrand(null);
      // optionally update the brand list here
    //}}
  />
)}

    </div>
  );
};

export default ManageHints;