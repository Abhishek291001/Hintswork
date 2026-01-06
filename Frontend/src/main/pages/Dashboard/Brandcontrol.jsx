import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const brandsList = [
  "HintDiet",
  "HintFinance",
  "HintFitness",
  "HintYoga",
  "HintCalm",
  "HintEducation",
];  

const Tab3 = () => {
  const navigate = useNavigate();

  const [brands, setBrands] = useState({
    HintDiet: true,
    HintFinance: false,
    HintFitness: false,
    HintCalm: false,
    HintYoga: false,
    HintEducation: false,
  });

  const toggleBrand = (brand) => {
    setBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };

  return (
    <div className="space-y-6 font-montserrat">

    
      <div>
        <div className="flex items-center gap-3 text-[#786A08]">
          <ArrowLeft className="cursor-pointer" />
          <h1
            className="
              text-xl sm:text-3xl lg:text-4xl font-semibold">
            Brand Control
          </h1>
        </div>


        <p
          className="
            text-sm
            sm:text-lg
            md:text-2xl
            text-[#676767]
            ml-9
          "
        >
          Manage Your brands and hints.
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard title="Total Rewards" value="20" />
        <StatCard title="Redemptions" value="7" />
        <StatCard title="Rewards Points" value="1,250" />
      </div>

    
      <div className="bg-[#FFF6CF] rounded-xl px-4 sm:px-6 py-4 shadow-md">

        <h2
          className="
            text-lg
            sm:text-2xl
            md:text-3xl
            font-semibold
            text-[#786A08]
            mb-4
          "
        >
          Brands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
          {brandsList.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-between"
            >
              <span
                className="
                  text-sm
                  sm:text-lg
                  md:text-xl
                  font-medium
                  text-[#786A08]
                "
              >
                {brand}
              </span>

              <Toggle
                enabled={brands[brand]}
                onToggle={() => toggleBrand(brand)}
              />
            </div>
          ))}
        </div>

        
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() => navigate("manage-hints")}
            className="
              px-4 py-2
              sm:px-6 sm:py-3
              rounded-md
              bg-gradient-to-b from-[#FFE074] to-[#E3B512]
              text-[#786A08]
              font-semibold
              text-sm sm:text-base md:text-xl
            "
          >
            Manage Hints
          </button>

          <button
            className="
              px-4 py-2
              sm:px-6 sm:py-3
              rounded-md
              bg-gradient-to-b from-[#FFE074] to-[#E3B512]
              text-[#786A08]
              font-semibold
              text-sm sm:text-base md:text-xl
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};



const StatCard = ({ title, value }) => (
  <div className="bg-[#FFE074] rounded-xl p-3 shadow-md">
    <p
      className="
        text-xs
        sm:text-sm
        md:text-lg
        font-bold
        text-[#786A08]
      "
    >
      {title}
    </p>

    <p
      className="
        text-lg
        sm:text-2xl
        md:text-3xl
        font-semibold
        text-[#786A08]
        mt-1
      "
    >
      {value}
    </p>
  </div>
);

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`
      w-[42px] h-[22px]
      sm:w-[52px] sm:h-[28px]
      rounded-full
      flex items-center
      px-1
      transition
      ${enabled ? "bg-[#FFD94A]" : "bg-gray-300"}
    `}
  >
    <div
      className={`
        w-[18px] h-[18px]
        sm:w-[22px] sm:h-[22px]
        rounded-full
        bg-white
        shadow
        transform
        transition
        ${enabled ? "translate-x-5 sm:translate-x-6" : "translate-x-0"}
      `}
    />
  </button>
);

export default Tab3;
