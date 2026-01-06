// import React, { useState, useRef } from 'react';
// import logo from "../../assets/logo2.png";
// import trophy from "../../assets/trophy.png";
// import messageIcon from "../../assets/messageIcon.png";
// import rectangleLogin from "../../assets/rectangleLogin.png";
// import rectangleLogin2 from "../../assets/rectangleLogin2.png";
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';


// const ForgetPass = () => {
//   const inputsRef = useRef([]);
//   const navigate = useNavigate();
//   const { verifyOtp } = useAuth(); // ✅ get verifyOtp from context

//   const handleClick = async () => {
//     const otp = inputsRef.current.map((input) => input.value).join("");

//     if (otp.length !== 5) {
//       alert("Please enter all 5 digits of the OTP.");
//       return;
//     }

//     const result = await verifyOtp(otp);

//     if (result) {
//       navigate("/password-reset");
//     } else {
//       alert("Invalid or expired OTP. Please try again.");
//     }
//   };

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (value.length === 1 && index < 4) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   return (
//     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-[#FFF9E5]">
//       <div className="hidden lg:block left-0 top-0 h-full w-1/2">
//         <div className="hidden md:block absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
//           <img src={rectangleLogin} alt="" className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top" />
//           <img src={rectangleLogin2} alt="" className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top" />
//         </div>
//         <div className='absolute left-25 bottom-50'>
//           <img src={logo} className='w-[60%]' alt="Logo" />
//         </div>
//         <div className="absolute bottom-0 left-0 md:left-80 w-full h-[120px] overflow-hidden z-0">
//           <img src={rectangleLogin} alt="" className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top" />
//           <img src={rectangleLogin2} alt="" className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top" />
//         </div>
//       </div>

//       <div className='block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
//         <img src={logo} className='w-32' alt="Logo" />
//       </div>

//       <img src={messageIcon} className='hidden lg:block w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6' alt="Message" />
//       <img src={trophy} alt="" className='hidden lg:block md:mt-[35%] mb-[60%] w-[12%] sm:w-[10%] absolute md:w-[10%]  z-20  ml-50' />

//       <div className='w-full lg:w-[50%] absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
//         <div className="w-[90%] max-w-[340px] mx-auto mt-20 lg:mt-30 md:mt-70 z-10 bg-white px-6 py-8 rounded-md">
//           <h2 className="text-2xl lg:text-2xl md:text-5xl font-bold text-center mb-3">Check your email</h2>
//           <p className="text-gray-500 lg:text-sm md:text-2xl md:mt-10 md:mb-10 text-sm text-center mb-6">
//             We sent a reset link to contact@dscode...com <br />
//             Enter 5 digit code mentioned in the email
//           </p>

//           <div className="flex justify-center mb-4">
//             {[...Array(5)].map((_, i) => (
//               <input
//                 key={i}
//                 type="text"
//                 maxLength="1"
//                 className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-md text-center text-xl mx-1 focus:outline-none focus:border-yellow-400"
//                 onChange={(e) => handleChange(e, i)}
//                 ref={(el) => (inputsRef.current[i] = el)}
//               />
//             ))}
//           </div>

//           <button
//             className="w-full lg:font-semibold lg:text-lg lg:h-[40px] bg-yellow-400 md:h-[50px] md:text-xl md:font-bold text-white mt-4 font-semibold py-1 rounded-md hover:bg-yellow-500 transition duration-300"
//             onClick={handleClick}
//           >
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPass;







// import React, { useState, useRef } from 'react'
// import logo from "../../assets/logo2.png"
// import trophy from "../../assets/trophy.png"
// import messageIcon from "../../assets/messageIcon.png"
// import rectangleLogin from "../../assets/rectangleLogin.png"
// import rectangleLogin2 from "../../assets/rectangleLogin2.png"
// import { useNavigate } from 'react-router-dom'

// const ForgetPass = () => {
//   const inputsRef = useRef([])
//   const navigate = useNavigate()

//   const handleClick = () => {
//     navigate("/password-reset")
//   }

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (value.length === 1 && index < 4) {
//       inputsRef.current[index + 1].focus();
//     }
//   }

//   return (
//     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-[#FFF9E5]">

//       {/* LEFT PART WRAPPER - hidden on mobile & tablet, visible on desktop+ */}
//       <div className="hidden lg:block  left-0 top-0 h-full w-1/2">

//         {/* Background top */}
//        {/* Background Rectangles */}
//                     <div className="hidden md:block absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
//                                  <img
//                                    src={rectangleLogin}
//                                    alt=""
//                                    className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
//                                  />
//                                  <img
//                                    src={rectangleLogin2}
//                                    alt=""
//                                    className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
//                                  />
//                                </div>
//         {/* Desktop Logo */}
//    <div className='absolute left-25 bottom-50'>
//             <img src={logo} className='w-[60%]' alt="Logo" />
//           </div>

     

//         {/* Background bottom */}
//         <div className="absolute bottom-0 left-0 md:left-80 w-full h-[120px] overflow-hidden z-0">
//           <img
//             src={rectangleLogin}
//             alt=""
//             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
//           />
//           <img
//             src={rectangleLogin2}
//             alt=""
//             className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
//           />
//         </div>

//       </div>

//       {/* Mobile Logo */}
//       <div className='block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
//         <img src={logo} className='w-32' alt="Logo" />
//       </div>

//       {/* Message Icon */}

//       <img src={messageIcon} className='hidden lg:block w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6' alt="Message" />
//          {/* Trophy */}
//         <img src={trophy} alt="" className='hidden lg:block md:mt-[35%] mb-[60%] w-[12%] sm:w-[10%] absolute md:w-[10%]  z-20  ml-50' />

//       {/* Form - full width on mobile/tablet, half width on desktop+ */}
//       <div className='w-full lg:w-[50%]  absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
//         <div className="w-[90%]  max-w-[340px]  mx-auto mt-20 lg:mt-30 md:mt-70 z-10 bg-white px-6 py-8 rounded-md">

//           <h2 className="text-2xl lg:text-2xl md:text-5xl font-bold text-center mb-3">Check your email</h2>

//           <p className="text-gray-500 lg:text-sm md:text-2xl md:mt-10 md:mb-10 text-sm text-center mb-6">
//             We sent a reset link to contact@dscode...com <br />
//             Enter 5 digit code mentioned in the email
//           </p>

//           {/* OTP Inputs */}
//           <div className="flex justify-center mb-4">
//             {[...Array(5)].map((_, i) => (
//               <input
//                 key={i}
//                 type="text"
//                 maxLength="1"
//                 className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-md text-center text-xl mx-1 focus:outline-none focus:border-yellow-400"
//                 onChange={(e) => handleChange(e, i)}
//                 ref={(el) => (inputsRef.current[i] = el)}
//               />
//             ))}
//           </div>

//           <button
//             className="w-full lg:font-semibold lg:text-lg lg:h-[40px] bg-yellow-400 md:h-[50px] md:text-xl md:font-bold text-white mt-4  font-semibold py-1 rounded-md hover:bg-yellow-500 transition duration-300"
//             onClick={handleClick}
//           >
//             Reset Password
//           </button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default ForgetPass






import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Rectangles from '../../assets/Rectangles.png';
import Image3 from '../../assets/Image3.png';
import { FiEye, FiEyeOff } from "react-icons/fi";


const CheckEmail = () => {
  const { verifyOtp, loading, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "",""]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); 
    const res = await verifyOtp(otpValue);
    // if (res) navigate("/resetPassword");

     if (res && res.resetToken) {
    localStorage.setItem("resetToken", res.resetToken); // save token for password reset
    navigate("/resetPassword"); // redirect to new password page
  } else {
    alert(res?.message || "OTP verification failed");
  }
    
console.log("OTP Entered:", otpValue);

  };


  const handleOtpChange = (value, index) => {
  if (!/^\d?$/.test(value)) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  // Move to next input
  if (value && index < otp.length - 1) {
    document.getElementById(`otp-${index + 1}`).focus();
  }
};

const handleOtpBackspace = (e, index) => {
  if (e.key === "Backspace" && !otp[index] && index > 0) {
    document.getElementById(`otp-${index - 1}`).focus();
  }
};

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">

  {/* TOP LEFT LOGO */}
  <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
    <img src={logo} alt="HintsWork Logo" className="w-36 sm:w-48" />
  </div>

  {/* LEFT SECTION */}
  {/* LEFT SECTION */}
<div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-16 py-16 lg:py-0">
  <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2 text-center montserrat">
    Check your email
  </h1>

  <p className="text-[#676767] mb-8 sm:mb-10 text-sm sm:text-xl text-center montserrat">
    We sent a reset link to contact@dscode...com<br/>
     enter 6 digit code that mentioned in the email
  </p>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md space-y-6 text-center"
  >
    <div className="flex justify-center gap-3 sm:gap-4">
  {otp.map((digit, index) => (
    <input
      key={index}
      id={`otp-${index}`}
      type="text"
      maxLength="1"
      value={digit}
      onChange={(e) => handleOtpChange(e.target.value, index)}
      onKeyDown={(e) => handleOtpBackspace(e, index)}
      className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg sm:text-xl
                 border border-[#E5E5E5] rounded-lg
                 focus:outline-none focus:border-[#FFD966]
                 montserrat"
    />
  ))}
</div>


    {/* <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-4 pr-12 text-[14px] sm:text-[18px] focus:outline-none text-[#1A171761] montserrat"
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

    <div className="text-right text-[16px] italic text-[#181818] cursor-pointer poppins">
      Forgot password ?
    </div> */}

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="w-[160px] sm:w-[400px] bg-gradient-to-b from-[#FFD966] to-[#F1C232] text-[#494100] font-semibold py-1.5 rounded-lg text-sm sm:text-xl montserrat"
    >
      {loading ? "Verifying..." : "Verify-otp"}
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
        src={Image3}
        alt="Illustration"
        className="max-w-full max-h-[500px] sm:max-h-[600px] lg:max-h-[520px] w-auto"
      />
    </div>
  </div>
</div>

  );
};

export default CheckEmail;
