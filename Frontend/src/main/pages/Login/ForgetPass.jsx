// import React, { useState } from 'react'
// import logo from "../../assets/logo2.png"
// import trophy from "../../assets/trophy.png"
// import messageIcon from "../../assets/messageIcon.png" 
// import rectangleLogin from "../../assets/rectangleLogin.png"
// import rectangleLogin2 from "../../assets/rectangleLogin2.png"
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../../contexts/AuthContext';

// const ForgetPass = () => {
//   const [email, setEmail] = useState("");
//   const [localError, setLocalError] = useState(null);
//   const { forgotPassword, loading, error: authError } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     setLocalError(null);  // clear previous local errors
//     if (!email) {
//       setLocalError("Please enter your email.");
//       return;
//     }

//     const response = await forgotPassword(email);
//     if (response) {
//       navigate("/email-OTP");
//     }
//   }

//   return (
//     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-white md:bg-white lg:bg-[#FFF9E5]">
//       {/* ...same UI code as before... */}

//       <div className='w-full md:w-full lg:w-[50%] absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
//         <div className="w-[90%] lg:w-[340px] lg:mt-40 lg:max-w-[340px] max-w-[340px] md:w-[100%] md:max-w-[440px] md:mt-[40%] mx-auto mt-20 z-10 bg-white px-6 py-8 rounded-md">
//           <h2 className="text-3xl font-bold lg:mb-5 md:mb-3 lg:text-3xl md:text-5xl text-center mb-3">Forgot password</h2>

//           <p className="text-gray-500 md:text-xl lg:text-sm text-sm text-center mb-6">
//             Please enter your email to reset your password
//           </p>

//           <div className="mb-4">
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter Your email"
//               className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoComplete="email"
//             />
//           </div>

//           {/* Display local error first, then auth context error */}
//           {(localError || authError) && (
//             <p className="text-red-500 mb-4 text-center">{localError || authError}</p>
//           )}

//           <button
//             className={`w-full lg:font-semibold lg:h-[40px] lg:text-lg bg-yellow-400 md:h-[50px] md:text-xl md:font-bold text-white font-semibold py-1 rounded-md hover:bg-yellow-500 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Send OTP"}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ForgetPass;








import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; 
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Rectangles from '../../assets/Rectangles.png';
import Image2 from '../../assets/Image2.png';
// import { FiEye, FiEyeOff } from "react-icons/fi";



const ForgetPass = () => {
  const { forgotPassword, loading, error } = useAuth();
  const navigate = useNavigate();
 

  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await forgotPassword(email);
    if (res) navigate("/verify-otp");
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
    Forgot Password
  </h1>

  <p className="text-[#676767] mb-8 sm:mb-10 text-sm sm:text-xl text-center montserrat">
    Enter your Email to forgot password
  </p>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md space-y-6 text-center"
  >
    <input
      type="email"
      placeholder="Enter Email"
      className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

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
    </div> */}

    {/* <div className="text-right text-[16px] italic text-[#181818] cursor-pointer poppins">
      Forgot password ?
    </div> */}

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="w-[160px] sm:w-[400px] bg-gradient-to-b from-[#FFD966] to-[#F1C232] text-[#494100] font-semibold py-1.5 rounded-lg text-sm sm:text-xl montserrat"
    >
      {loading ? "Sending..." : "Send"}
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
        src={Image2}
        alt="Illustration"
        className="max-w-full max-h-[500px] sm:max-h-[600px] lg:max-h-[520px] w-auto"
      />
    </div>
  </div>
</div>

  );
};

export default ForgetPass;
