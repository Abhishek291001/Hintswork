import React, { useState } from "react";
import Editicon from "../../assets/edit.svg";
import Moon from "../../assets/Moon.png";
import bulbs from "../../assets/bulbs.png";
import hints from "../../assets/hints.png";
import { ArrowLeft } from "lucide-react";


const Tab7 = () => {

    const [darkMode, setDarkMode] = useState(false);

    const [integrations, setIntegrations] = React.useState({
  SSO: true,
  SCIM: true,
  Webhooks: false,
});


const [editMode, setEditMode] = useState({
  company: false,
  plan: false,
  timeSlot: false,
  privacy: false,
  roles: false,
});


const toggleEdit = (key) => {
  setEditMode((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};



  return (
    <div className="w-full max-w-screen-2xl space-y-6 font-montserrat">


      {/* PAGE TITLE */}
     <div className="flex items-center justify-between mb-6 text-[#786A08]">
  {/* Left side: Back arrow + Title */}
  <div className="flex items-center gap-3">
    <ArrowLeft className="cursor-pointer" />
    <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#786A08] montserrat">
      Settings
    </h1>
  </div>

  {/* Right side: Hints + Bulb + Edit Icon */}
  <div className="relative w-12 h-12 sm:w-14 sm:h-14">
    {/* EDIT ICON ON TOP OF HINTS */}
   

    {/* HINTS ICON */}
    <img
      src={hints}
      className="w-10 h-10 sm:w-14 sm:h-14"
    />

    {/* BULB ON TOP OF HINTS */}
    <img
      src={bulbs}
      className="w-5 h-8 sm:w-8 sm:h-10 absolute top-2 left-3 z-10"
    />
  </div>
</div>



    

      {/* TOP CARD */}
      <div className="bg-[#FFF6CF] rounded-2xl px-4 py-3 flex flex-col xl:flex-row gap-4 xl:gap-6 mb-6">

        {/* LEFT */}
<div className="flex-1 lg:border-r-2 border-[#786A08] lg:pr-6 pr-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#786A08] text-lg sm:text-xl lg:text-2xl font-semibold montserrat">
              Company Profile
            </h2>
          <img
  src={Editicon}
  className={`w-5 h-5 cursor-pointer ${
    editMode.company ? "opacity-100" : "opacity-70"
  }`}
  onClick={() => toggleEdit("company")}
/>

          </div>

          <label className="block text-[#786A08] font-semibold mb-2 text-md raleway">
            Company Name
          </label>
          <input  
            value="HintsWork Inc."
             readOnly={!editMode.company}
             className={`w-full max-w-[360px] mb-4 rounded-lg border border-[#786A08] px-4 py-2 text-[#786A08] font-semibold text-sm sm:text-base lg:text-lg raleway ${
    editMode.company
      ? "bg-white cursor-text"
      : "bg-[#FFFDF5] cursor-not-allowed opacity-70"
  }`}
          />

          <label className="block text-[#786A08] font-semibold mb-2 text-md raleway">
            Domain
          </label>
          <input
            value="sso.hintswork.com"
            readOnly={!editMode.company}
            className={`w-full max-w-[360px] rounded-lg border border-[#786A08] px-4 py-2 text-[#786A08] font-semibold text-sm sm:text-base lg:text-lg raleway ${
    editMode.company
      ? "bg-white cursor-text"
      : "bg-[#FFFDF5] cursor-not-allowed opacity-70"
  }`}
          />
        </div>

        {/* RIGHT */}
        <div className="flex-1  relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#786A08] text-md font-semibold raleway">
              Current Plan
            </h2>
             <img
      src={Editicon}
      onClick={() => toggleEdit("plan")}
      className={`w-4 h-4 sm:w-5 sm:h-5 absolute top-1 -right-1 z-30 cursor-pointer ${
        editMode.plan ? "opacity-100" : "opacity-70"
      }`}
    />
          </div>

          <input
            value="Pro"
            readOnly={!editMode.plan}
            className={`w-full max-w-[360px] mb-4 rounded-lg border border-[#786A08] px-4 py-2 font-semibold text-[#786A08] text-sm sm:text-base lg:text-lg raleway ${
    editMode.plan
      ? "bg-white cursor-text"
      : "bg-[#FFFDF5] cursor-not-allowed opacity-70"
  }`}
          />

          <p className="text-[#786A08] font-semibold mb-2 text-md raleway">
            Active Brands
          </p>

          <div className="grid grid-cols-2 gap-x-6 text-[#E2221F] font-semibold text-sm montserrat">
            <span>HintDiet</span>
            <span>HintFinance</span>
            <span>HintFitness</span>
            <span>HintYoga</span>
            <span>HintCalm</span>
            <span>HintEducation</span>
          </div>

          {/* THEME TOGGLE */}
          {/* THEME TOGGLE */}
<div
  className="
    mt-10
    flex items-center gap-2
    2xl:absolute 2xl:bottom-0 2xl:right-0
  "
>
  <img src={Moon} className="w-7 h-7" />

  <div
    onClick={() => setDarkMode(!darkMode)}
    className={`w-10 sm:w-12 h-6 sm:h-7 rounded-full cursor-pointer flex items-center px-1 transition ${
      darkMode ? "bg-[#FFD94A]" : "bg-gray-300"
    }`}
  >
    <div
      className={`w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full transition-transform ${
        darkMode ? "translate-x-4 sm:translate-x-5" : "translate-x-0"
      }`}
    />
  </div>
</div>

        </div>
      </div>

      {/* MIDDLE ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6 mb-6">

        {/* TIME SLOT */}
        <div className="bg-[#FFF6CF] rounded-2xl px-4 py-3">
          <div className="flex justify-between mb-4">
            <h2 className="text-[#786A08] text-lg sm:text-xl lg:text-xl font-semibold montserrat">
              Time Slot Scheduling
            </h2>
           
           <img
  src={Editicon}
  onClick={() => toggleEdit("timeSlot")}
  className={`w-5 h-5 cursor-pointer ${
    editMode.timeSlot ? "opacity-100" : "opacity-70"
  }`}
/>
  
  </div>

          <div className="flex gap-6 flex-wrap">
            {[
              { label: "Morning", time: "9:00 - 12:00" },
              { label: "Afternoon", time: "1:00 - 4:00" },
              { label: "Evening", time: "6:00 - 9:00" },
            ].map((slot) => (
              <div key={slot.label}>
                <p className="font-medium text-[#786A08] mb-1 text-md montserrat">
                  {slot.label}
                </p>
                <div
  className={`border-2 border-[#786A08] rounded-lg px-4 py-2 font-medium text-base text-[#786A08] montserrat ${
    editMode.timeSlot
      ? "bg-white cursor-text"
      : "bg-[#FFFDF5] cursor-not-allowed opacity-70"
  }`}
>
  {slot.time}
</div>
              </div>
            ))}
          </div>
        </div>

        {/* PRIVACY */}
        <div className="bg-[#FFF6CF] rounded-2xl px-4 py-3">
          <div className="flex justify-between mb-4">
            <h2 className="text-[#786A08] text-lg sm:text-xl lg:text-xl font-semibold montserrat whitespace-nowrap">
              Privacy & Data Retention
            </h2>
            <img
  src={Editicon}
  onClick={() => toggleEdit("privacy")}
  className={`w-5 h-5 cursor-pointer ${
    editMode.privacy ? "opacity-100" : "opacity-70"
  }`}
/>

          </div>

          <p className="font-semibold text-[#786A08] mb-3 text-lg sm:text-xl lg:text-xl montserrat">
            Keep employee data for
          </p>

         <input
  value="12 Months"
  readOnly={!editMode.privacy}
  className={`border border-[#786A08] rounded-lg px-4 py-2 font-semibold text-[#786A08] text-md raleway ${
    editMode.privacy
      ? "bg-white cursor-text"
      : "bg-[#FFFDF5] cursor-not-allowed opacity-70"
  }`}
/>

        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* INTEGRATIONS */}
        <div className="bg-[#FFF6CF] rounded-2xl px-4 py-3">
          <h2 className="text-[#786A08] text-lg sm:text-xl lg:text-xl font-semibold mb-4 montserrat">
            Integrations
          </h2>

          {["SSO", "SCIM", "Webhooks"].map((item) => (
            <div key={item} className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#786A08] text-lg sm:text-xl lg:text-xl montserrat">
                {item}
              </span>
              <div
  onClick={() =>
    setIntegrations((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }
  className={`w-12 h-6 rounded-full flex items-center px-1 cursor-pointer transition ${
    integrations[item] ? "bg-[#FFD94A]" : "bg-gray-300"
  }`}
>
  <div
    className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${
      integrations[item] ? "translate-x-6" : "translate-x-0"
    }`}
  />
</div>

            </div>
          ))}
        </div>

        {/* ROLES */}
        <div className="bg-[#FFF6CF] rounded-2xl px-4 py-3">
          <div className="flex justify-between mb-4">
            <h2 className="text-[#786A08] text-lg sm:text-xl lg:text-xl font-semibold montserrat whitespace-nowrap">
              Admin Roles & Permissions
            </h2>
            <img
  src={Editicon}
  onClick={() => toggleEdit("roles")}
  className={`w-5 h-5 cursor-pointer ${
    editMode.roles ? "opacity-100" : "opacity-70"
  }`}
/>

          </div>

          <div
  className={`grid grid-cols-2 gap-y-3 font-semibold text-[#786A08] text-lg montserrat ${
    editMode.roles ? "cursor-text" : "cursor-not-allowed opacity-70"
  }`}
>
  <span>Role</span>
  <span>Permissions</span>
  <span>Admin</span>
  <span>All</span>
  <span>Manager</span>
  <span>Limited</span>
  <span>User</span>
  <span>Read-only</span>
</div>

        </div>
      </div>
    </div>
  );
};

export default Tab7;
