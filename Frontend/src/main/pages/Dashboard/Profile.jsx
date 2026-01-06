// import React, { useState, useEffect } from 'react';
// import avatarImage from '../../assets/profile.png';
// import Editicon from '../../assets/edit.svg';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'; 

// const Profile = () => {
//   const initialInfo = {
//     name: 'Hi Mike',
//     email: 'mike123@gmail.com',
//     avatar: avatarImage,
//     phone: '+1 9873356789',
//     firstName: 'Mike',
//   };

//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(initialInfo);
//   const [originalData, setOriginalData] = useState(initialInfo);

  
//   useEffect(() => {
//     setFormData(prev => ({
//       ...prev,
//       name: `Hi ${prev.firstName}`,
//     }));
//   }, [formData.firstName]);

//   const handleEditClick = () => setIsEditing(true);

//   const handleSave = () => {
//     setOriginalData(formData); 
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setFormData(originalData); 
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="profile-page p-0 md:p-6 w-full h-full overflow-y-auto mb-11">

//       <h1 className="!text-3xl md:!text-5xl text-[#786A08] font-semibold mb-11">My Profile</h1>

     
//       <div className="profile-info flex flex-col justify-center gap-4 items-center mb-8 w-full max-w-[480px] mx-auto rounded-[12px] border-2 border-[#FEDC63] bg-[#FFFBED] py-7 sm:py-[59px]">
//         <img
//           src={formData.avatar}
//           alt="Profile"
//           className="w-14 h-14 sm:w-24 sm:h-24 rounded-full"
//         />
//         <div>
//           <p className="text-2xl text-[#6C5D00] font-semibold">{formData.name}</p>
//         </div>
//       </div>

     
//       <div className="personal-info w-full max-w-[1090px] mx-auto border-2 border-[#FEDC63] rounded-[13px] bg-[#FFFBED] p-6 sm:pt-[48px] sm:pl-[39px] sm:pr-[30px] sm:pb-[63px]">

//         <div className="flex justify-between items-center mb-5 sm:mb-10">
//           <p className="text-3xl text-[#786A08] font-semibold">My Personal Information</p>

//           {!isEditing && (
//             <div
//               onClick={handleEditClick}
//               className="flex gap-1 sm:gap-2.5 h-[40px] sm:h-[53px] items-center px-0 w-[130px] justify-center sm:px-6 rounded-sm shadow-md bg-gradient-to-b from-[#FFE074] to-[#E3B512] cursor-pointer"
//             >
//               <p className='font-bold text-[20px] sm:text-[22.93px] text-[#786A08]'>Edit</p>
//               <img className='size-[20px] sm:size-6' src={Editicon} alt='editicon' />
//             </div>
//           )}
//         </div>

        
//         <div className="flex gap-4 mb-5 sm:mb-8">
//           <div className="w-1/2 flex flex-col gap-3 sm:gap-7">
//             <p className="text-2xl sm:text-3xl font-medium text-[#9B8F36]">First Name</p>
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="text-[22px] sm:text-[26px] font-medium text-[#604E00] bg-[#fffbed] px-2 py-[2px] rounded border border-[#9B8F36 ] focus:outline-none"
//               />
//             ) : (
//               <p className="text-[22px] sm:text-[26px] font-medium text-[#604E00]">{formData.firstName}</p>
//             )}
//           </div>
//         </div>

       
//         <div className="flex flex-wrap gap-5 sm:gap-10 justify-start">
         
//           <div>
//             <p className="text-2xl sm:text-3xl text-[#9B8F36] font-medium mb-[10px] sm:mb-5">Email</p>
//             {isEditing ? (
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="text-[22px] sm:text-[26px] font-medium text-[#604E00] bg-[#fffbed] px-2 py-[2px] rounded border border-[#9B8F36 ] focus:outline-none"
//               />
//             ) : (
//               <p className="text-[22px] sm:text-[26px] font-medium text-[#604E00]">{formData.email}</p>
//             )}
//           </div>

//           <div>
//             <p className="text-2xl sm:text-3xl text-[#9B8F36] font-medium mb-[10px] sm:mb-5">Phone Number</p>
//             {isEditing ? (
//               <PhoneInput
//                 country={'us'} // default country
//                 value={formData.phone}
//                 onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
//                 inputStyle={{
//                   width: '100%',
//                   fontSize: '22px',
//                   fontWeight: '500',
//                   backgroundColor: '#fffbed',
//                   border: '1px solid #9B8F36',
//                   borderRadius: '6px',
//                   padding: '8px 12px',
//                   color: '#604E00',
//                 }}
//                 buttonStyle={{
//                   backgroundColor: '#fffbed',
//                   borderRight: '1px solid #9B8F36',
//                 }}
//                 dropdownStyle={{ backgroundColor: '#fffbed' }}
//               />
//             ) : (
//               <p className="text-[22px] sm:text-[26px] font-medium text-[#604E00]">
//                 {formData.phone}
//               </p>
//             )}
//           </div>
//         </div>

       
//         {isEditing && (
//           <div className="flex justify-start gap-4 mt-10">
//              <div
//               onClick={handleSave}
//               className="px-6 py-2 text-lg font-semibold text-[#786A08] bg-gradient-to-b from-[#FFE074] to-[#E3B512] rounded cursor-pointer"
//             >
//               Save
//             </div>
//             <div
//               onClick={handleCancel}
//               className="px-6 py-2 text-lg font-semibold text-[#786A08] bg-gradient-to-b from-[#FFE074] to-[#E3B512] rounded cursor-pointer"
//             >
//               Cancel
//             </div>
           
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;













// import React, { useEffect, useState } from "react";
// import avatarImage from "../../assets/profile.png";
// import { ArrowLeft } from "lucide-react";
// import axios from "axios";
// import API_BASE_URL from "../../config/apiConfig";

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     fullName: "",
//     email: "",
//     department: "",
//     avatar: { url: null },
//   });

//   // frontend-only
//   const [notifications, setNotifications] = useState(true);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//           console.warn("Token missing");
//           setLoading(false);
//           return;
//         }

//         const res = await axios.get(`${API_BASE_URL}/api/users/me`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setProfile(res.data);
//       } catch (err) {
//         console.error(
//           "Failed to fetch profile:",
//           err.response?.data || err.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <h1>Loading Profile...</h1>;


//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-10 pt-2 pb-3 font-raleway ">

//       {/* PAGE TITLE */}
//       <div className="flex items-center gap-3 mb-3 text-[#786A08] ">
//         <ArrowLeft className="cursor-pointer"/>

//         {/* 👇 Desktop size preserved */}
//         <h1
//           className="
//             font-semibold text-[#786A08] montserrat
//             text-2xl sm:text-3xl md:text-4xl
//             lg:text-4xl
//           "
//         >
//           Profile
//         </h1>
//       </div>

//       {/* MAIN CARD */}
//       <div className="mx-auto max-w-[1100px] bg-[#FFF6CF] rounded-2xl px-4 sm:px-6 lg:px-10 py-4 lg:py-6 lg:mt-3">

//         {/* PROFILE HEADER */}
//         <div className="flex flex-col items-center mb-4 text-center">
//           <img
//             src={profile.avatar?.url || avatarImage}
//             alt="Profile"
//             className="w-24 h-24 sm:w-26 sm:h-26 lg:w-29 lg:h-29 rounded-full object-cover mb-2"
//           />

//           <h2
//             className="
//               font-semibold montserrat
//               text-lg sm:text-xl
//               lg:text-2xl
//             "
//           >
//             Hi {profile.fullName}
//           </h2>

//           <p
//             className="
//               montserrat
//               text-xs sm:text-sm
//               lg:text-base
//             "
//           >
//             {profile.email}
//           </p>
//         </div>

//         {/* FORM */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

//           {/* NAME */}
//           <div className="">
//             <label
//               className="
//                 block mb-3 text-[#786A08] font-semibold montserrat
//                 text-sm sm:text-base
//                 lg:text-xl
//               "
//             >
//               Name
//             </label>
//             <input
//               value={profile.fullName}
//               className="
//                 w-full rounded-lg border border-[#9B8A00]
//                 px-4 py-2 lg:py-2
//                 bg-[#FFFDF5] focus:outline-none
//                 font-semibold text-[#786A08] raleway
//                 text-sm sm:text-base
//                 lg:text-xl
//               "
//             />
//           </div>

//           {/* FULL NAME */}
//           <div className="">
//             <label
//               className="
//                 block mb-3 text-[#786A08] font-semibold montserrat
//                 text-sm sm:text-base
//                 lg:text-xl
//               "
//             >
//               Full Name
//             </label>
//             <input
//               value={profile.fullName}
//               className="
//                 w-full rounded-lg border border-[#9B8A00]
//                 px-4 py-2 lg:py-2
//                 bg-[#FFFDF5] focus:outline-none
//                 font-semibold text-[#786A08] raleway
//                 text-sm sm:text-base
//                 lg:text-lg
//               "
//             />
//           </div>

//           {/* DEPARTMENT */}
//           <div className="mt-2">
//             <label
//               className="
//                 block mb-3 text-[#786A08] font-semibold montserrat
//                 text-sm sm:text-base
//                 lg:text-xl
//               "
//             >
//               Department
//             </label>
//             <input
//               value={profile.department}
//               className="
//                 w-full rounded-lg border border-[#9B8A00]
//                 px-4 py-2 lg:py-2
//                 bg-[#FFFDF5] focus:outline-none
//                 font-semibold text-[#786A08] raleway
//                 text-sm sm:text-base
//                 lg:text-lg
//               "
//             />
//           </div>

//           {/* MOBILE */}
//           <div className="mt-2">
//             <label
//               className="
//                 block mb-3 text-[#786A08] font-semibold montserrat
//                 text-sm sm:text-base
//                 lg:text-xl
//               "
//             >
//               Mobile
//             </label>
//             <input
//               value={profile.mobile}
//               className="
//                 w-full rounded-lg border border-[#9B8A00]
//                 px-4 py-2 lg:py-2
//                 bg-[#FFFDF5] focus:outline-none
//                 font-semibold text-[#786A08] raleway
//                 text-sm sm:text-base
//                 lg:text-lg
//               "
//             />
//           </div>
//         </div>

//         {/* NOTIFICATION */}
//         <div className="mt-6">
//           <p
//             className="
//               text-[#786A08] font-semibold montserrat mb-3
//               text-sm sm:text-base
//               lg:text-xl
//             "
//           >
//             Notification Preferences
//           </p>

//           <div className="flex items-center gap-4">
//            <button
//   onClick={() => setNotifications(!notifications)}
//   className={`
//     flex items-center rounded-full px-1 transition
//     w-[42px] h-[22px]
//     sm:w-[52px] sm:h-[28px]
//     lg:w-[54px] lg:h-[28px]
//     ${notifications ? "bg-[#F5C518]" : "bg-gray-300"}
//   `}
// >
//   <span
//     className={`
//       bg-white rounded-full shadow transition-transform
//       w-4 h-4
//       sm:w-4.5 sm:h-4.5
//       lg:w-5 lg:h-5
//       ${notifications ? "translate-x-5 sm:translate-x-6 lg:translate-x-7" : "translate-x-0"}
//     `}
//   />
// </button>


//             <span
//               className="
//                 text-[#786A08] font-semibold montserrat whitespace-nowrap
//                 text-sm sm:text-base
//                 lg:text-xl
//               "
//             >
//               Enable notification
//             </span>
//           </div>
//         </div>

//         {/* SAVE BUTTON */}
//         <div className="mt-4 flex justify-center">
//           <button
//             className="
//               bg-gradient-to-b from-[#FFE074] to-[#E3B512]
//               px-6 sm:px-8 lg:px-10
//               py-2 sm:py-2.5 lg:py-3
//               rounded-md font-bold text-[#786A08] shadow montserrat
//               text-sm sm:text-base
//               lg:text-xl
//             "
//           >
//             Save Changes
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Profile;





import React, { useEffect, useState } from "react";
import avatarImage from "../../assets/profile.png";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import API_BASE_URL from "../../config/apiConfig";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    department: "",
    avatar: { url: null },
    phoneNumber:"",
  });

  // frontend-only notifications
  const [notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("notifications")) ?? true
  );

  const [loading, setLoading] = useState(true);

  // ================= FETCH PROFILE =================
  useEffect(() => {

    const token = localStorage.getItem("token");

  if (!token) {
    setLoading(false);
    return;
  }
    const fetchProfile = async () => {
      try {

        const res = await axios.get(`${API_BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile({
          fullName: res.data.user.fullName || "",
          email: res.data.user.email || "",
          department: res.data.user.department || "",
          avatar: res.data.avatar || { url: null },
          phoneNumber: res.data.user.phoneNumber || "",
        });
      } catch (err) {
        console.error(
          "Failed to fetch profile:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ================= HANDLE INPUT CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= SAVE PROFILE (PATCH) =================
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      await axios.patch(
        `${API_BASE_URL}/api/users/me`,
        {
          fullName: profile.fullName,
          department: profile.department,
          phoneNumber:profile.phoneNumber,
          email:profile.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // persist notifications (frontend-only)
      localStorage.setItem(
        "notifications",
        JSON.stringify(notifications)
      );

      alert("Profile updated successfully");
    } catch (err) {
      console.error(
        "Failed to update profile:",
        err.response?.data || err.message
      );
      alert("Failed to update profile");
    }
  };

  if (loading) return <h1>Loading Profile...</h1>;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-2 pb-3 font-raleway ">
      {/* PAGE TITLE */}
      <div className="flex items-center gap-3 mb-3 text-[#786A08] ">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="font-semibold text-[#786A08] montserrat text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Profile
        </h1>
      </div>

      {/* MAIN CARD */}
      <div className="mx-auto max-w-[1100px] bg-[#FFF6CF] rounded-2xl px-4 sm:px-6 lg:px-10 py-4 lg:py-6 lg:mt-3">
        {/* PROFILE HEADER */}
        <div className="flex flex-col items-center mb-4 text-center">
          <img
            src={profile.avatar?.url || avatarImage}
            alt="Profile"
            className="w-24 h-24 sm:w-26 sm:h-26 lg:w-29 lg:h-29 rounded-full object-cover mb-2"
          />

          <h2 className="font-semibold montserrat text-lg sm:text-xl lg:text-2xl">
            Hi {profile.fullName}
          </h2>

          <p className="montserrat text-xs sm:text-sm lg:text-base">
            {profile.email}
          </p>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <label className="block mb-3 text-[#786A08] font-semibold montserrat">
              Name
            </label>
            <input
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#9B8A00] px-4 py-2 bg-[#FFFDF5] focus:outline-none font-semibold text-[#786A08]"
            />
          </div>

          <div>
            <label className="block mb-3 text-[#786A08] font-semibold montserrat">
              Email
            </label>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#9B8A00] px-4 py-2 bg-[#FFFDF5] focus:outline-none font-semibold text-[#786A08]"
            />
          </div>

          <div className="mt-2">
            <label className="block mb-3 text-[#786A08] font-semibold montserrat">
              Department
            </label>
            <input
              name="department"
              value={profile.department}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#9B8A00] px-4 py-2 bg-[#FFFDF5] focus:outline-none font-semibold text-[#786A08]"
            />
          </div>

          <div className="mt-2">
            <label className="block mb-3 text-[#786A08] font-semibold montserrat">
              Mobile
            </label>
            <input
              name="phoneNumber"
              value={profile.phoneNumber}
              
              onChange={handleChange}
              className="w-full rounded-lg border border-[#9B8A00] px-4 py-2 bg-[#FFFDF5] text-[#786A08]"
            />
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="mt-6">
          <p className="text-[#786A08] font-semibold montserrat mb-3">
            Notification Preferences
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const value = !notifications;
                setNotifications(value);
                localStorage.setItem(
                  "notifications",
                  JSON.stringify(value)
                );
              }}
              className={`flex items-center rounded-full px-1 transition w-[52px] h-[28px] ${
                notifications ? "bg-[#F5C518]" : "bg-gray-300"
              }`}
            >
              <span
                className={`bg-white rounded-full shadow transition-transform w-5 h-5 ${
                  notifications ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <span className="text-[#786A08] font-semibold montserrat">
              Enable notification
            </span>
          </div>
        </div>

        {/* SAVE */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleSave}
            className="bg-gradient-to-b from-[#FFE074] to-[#E3B512] px-8 py-3 rounded-md font-bold text-[#786A08]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
