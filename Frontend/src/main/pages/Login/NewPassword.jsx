// import React, { useState } from 'react';
// import logo from "../../assets/logo2.png";
// import trophy from "../../assets/trophy.png";
// import messageIcon from "../../assets/messageIcon.png";
// import rectangleLogin from "../../assets/rectangleLogin.png";
// import rectangleLogin2 from "../../assets/rectangleLogin2.png";
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext'; // ✅ adjust path if needed

// const ResetPassword = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { resetPassword, loading } = useAuth(); // ✅ from context
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const res = await resetPassword(newPassword);
//     if (res) {
//       navigate("/done");
//     }
//   };

//   return (
//     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-[#FFF9E5]">

//       {/* LEFT DESIGN */}
//       <div className="hidden lg:block left-0 top-0 h-full w-1/2">
//         <div className="absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
//           <img src={rectangleLogin} alt="" className="w-[80%] absolute top-4 object-cover object-top" />
//           <img src={rectangleLogin2} alt="" className="w-[80%] absolute top-10 left-0 object-cover object-top" />
//         </div>
//         <div className='absolute left-25 bottom-50'>
//           <img src={logo} className='w-[60%]' alt="Logo" />
//         </div>
//         <div className="absolute bottom-0 left-0 md:left-80 w-full h-[120px] overflow-hidden z-0">
//           <img src={rectangleLogin} alt="" className="w-[80%] absolute top-4 object-cover object-top" />
//           <img src={rectangleLogin2} alt="" className="w-[80%] absolute top-10 left-0 object-cover object-top" />
//         </div>
//       </div>

//       {/* MOBILE LOGO */}
//       <div className='block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
//         <img src={logo} className='w-32' alt="Logo" />
//       </div>

//       <img src={messageIcon} className='hidden lg:block w-[10%] absolute bottom-10 right-6' alt="Message" />
//       <img src={trophy} alt="" className='hidden lg:block w-[12%] absolute z-20 ml-50' />

//       {/* FORM */}
//       <div className='w-full lg:w-[50%] absolute right-0 h-screen bg-white rounded-b-4xl rounded-t-4xl z-10 shadow-2xl'>
//         <div className="w-[90%] max-w-[340px] mx-auto mt-20 px-6 py-8 rounded-md">
//           <h2 className="text-2xl font-bold text-center mb-1">Set a new password</h2>
//           <p className="text-gray-500 text-sm text-center mb-6">
//             Create a new password. Ensure it differs from previous ones for security.
//           </p>

//           {/* New Password */}
//           <div className="mb-4 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-6 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Re-enter password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10 placeholder-gray-400"
//             />
//             <div
//               className="absolute right-0 top-1 cursor-pointer pr-2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <EyeIcon className="h-5 w-5 text-gray-500" />
//               ) : (
//                 <EyeSlashIcon className="h-5 w-5 text-gray-500" />
//               )}
//             </div>
//           </div>

//           <button
//             className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-300"
//             onClick={handleClick}
//             disabled={loading}
//           >
//             {loading ? "Updating..." : "Update Password"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;




// // import React, { useState } from 'react'
// // import logo from "../../assets/logo2.png"
// // import trophy from "../../assets/trophy.png"
// // import messageIcon from "../../assets/messageIcon.png"
// // import rectangleLogin from "../../assets/rectangleLogin.png"
// // import rectangleLogin2 from "../../assets/rectangleLogin2.png"
// // import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
// // import { useNavigate } from 'react-router-dom'

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false)
// //   const navigate = useNavigate()

// //   const handleClick = () => {
// //     navigate("/done")
// //   }

// //   return (
// //     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-[#FFF9E5]">

// //       {/* LEFT PART WRAPPER - hidden on mobile & tablet, visible on desktop+ */}
// //       <div className="hidden lg:block  left-0 top-0 h-full w-1/2">

// //         {/* Top background rectangles */}
// //         <div className="absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
// //           <img
// //             src={rectangleLogin}
// //             alt=""
// //             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
// //           />
// //           <img
// //             src={rectangleLogin2}
// //             alt=""
// //             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
// //           />
// //         </div>

// //         {/* Desktop Logo */}
// //    <div className='absolute left-25 bottom-50'>
// //             <img src={logo} className='w-[60%]' alt="Logo" />
// //           </div>

     

// //         {/* Bottom background rectangles */}
// //         <div className="absolute bottom-0 left-0 md:left-80 w-full h-[120px] overflow-hidden z-0">
// //           <img
// //             src={rectangleLogin}
// //             alt=""
// //             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
// //           />
// //           <img
// //             src={rectangleLogin2}
// //             alt=""
// //             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
// //           />
// //         </div>

// //       </div>

// //       {/* Mobile Logo */}
// //       <div className='block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
// //         <img src={logo} className='w-32' alt="Logo" />
// //       </div>

// //       {/* Message Icon */}
// //       <img src={messageIcon} className='hidden lg:block w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6' alt="Message" />
// //          {/* Trophy */}
// //         <img src={trophy} alt="" className='hidden lg:block md:mt-[55%] mb-[70%]  w-[12%] absolute sm:w-[8%] md:w-[10%]  z-20  ml-50' />

// //       {/* Form section - full width on mobile/tablet, half width on desktop+ */}
// //       <div className='w-full lg:w-[50%] absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
// //         <div className="w-[90%]  max-w-[340px] lg:max-w-[340px] md:max-w-[540px] mx-auto mt-20 lg:mt-30 md:mt-70 bg-white px-6 py-8 rounded-md">

// //           <h2 className="text-2xl lg:text-2xl font-bold text-center mb-1 md:text-5xl lg:mb-2 md:mb-4">Set a new password</h2>

// //           <p className="text-gray-500 text-sm text-center mb-6 lg:text-sm md:text-xl lg:mb-5 md:mb-18">
// //             Create a new password. Ensure it differs from previous ones for security
// //           </p>

// //           <div className="mb-4 relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               id="password"
// //               placeholder="Enter your new password"
// //               className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
// //             />
// //           </div>

// //           <div className="mb-6 relative">
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               id="password"
// //               placeholder="Re-enter password"
// //               className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10 placeholder-gray-400"
// //             />
// //             <div
// //               className="absolute right-0 top-1 cursor-pointer pr-2"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? (
// //                 <EyeIcon className="h-5 w-5 text-gray-500" />
// //               ) : (
// //                 <EyeSlashIcon className="h-5 w-5 text-gray-500" />
// //               )}
// //             </div>
// //           </div>

// //           <button
// //             className="w-full bg-yellow-400 lg:w-full lg:font-semibold lg:text-lg lg:h-[40px] md:h-[50px] md:w-full md:text-2xl md:font-bold text-white font-semibold py-1 rounded-md mb-1 hover:bg-yellow-500 transition duration-300"
// //             onClick={handleClick}
// //           >
// //             Update Password
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login






import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Rectangles from '../../assets/Rectangles.png';
import Image4 from '../../assets/Image4.png';
import { FiEye, FiEyeOff } from "react-icons/fi";


const NewPassword = () => {
  const { resetPassword, loading, error } = useAuth();
  const navigate = useNavigate();


  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const res = await resetPassword(password); // call API
  if (res) {
    alert("Password updated successfully!");
    navigate("/passwordDone"); // redirect to login page
  }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">

  {/* TOP LEFT LOGO */}
  <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
    <img src={logo} alt="HintsWork Logo" className="w-36 sm:w-48" />
  </div>

  {/* LEFT SECTION */}
<div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-16 py-16 lg:py-0">
  <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2 text-center montserrat">
    Set a new password
  </h1>

  <p className="text-[#676767] mb-8 sm:mb-10 text-sm sm:text-xl text-center montserrat">
    Create a new password. Ensure it<br/> differs from previous ones for security  
  </p>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md space-y-6 text-center"
  >
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your new password"
        className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-4 pr-12 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
      </button>
    </div>

    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter password"
        className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-4 pr-12 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
      </button>
    </div>

    {/* <div className="text-right text-[16px] italic text-[#181818] cursor-pointer poppins">
      Forgot password ?
    </div> */}

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="w-[160px] sm:w-[400px] bg-gradient-to-b from-[#FFD966] to-[#F1C232] text-[#494100] font-semibold py-1.5 rounded-lg text-sm sm:text-xl montserrat"
    >
      {loading ? "Updating..." : "Update Password"}
    </button>
  </form>
</div>


  {/* RIGHT SECTION */}
  <div className="hidden lg:flex lg:flex-1 mt-10 mb-8 mr-6 relative bg-[#FFD966] rounded-[10px] overflow-hidden">

    {/* RECTANGLES BACKGROUND with padding */}
    <img
      src={Rectangles}
      alt="Background pattern"
      className="absolute top-4 left-4 right-4 bottom-4 object-cover rounded-lg"
    />

    {/* MAIN ILLUSTRATION */}
    <div className="relative z-10 flex items-center justify-center w-full h-full">
      <img
        src={Image4}
        alt="Illustration"
        className="max-w-full max-h-[500px] sm:max-h-[600px] lg:max-h-[520px] w-auto"
      />
    </div>
  </div>
</div>

  );
};

export default NewPassword;
