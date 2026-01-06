// import React, { useState } from "react";
// import logo from "../../assets/logo2.png";
// import trophy from "../../assets/trophy.png";
// import messageIcon from "../../assets/messageIcon.png";
// import rectangleLogin from "../../assets/rectangleLogin.png";
// import rectangleLogin2 from "../../assets/rectangleLogin2.png";
// import tick from "../../assets/tick.png";
// import { useNavigate } from "react-router-dom";

// const ForgetPass = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleBackToLogin = () => {
//     navigate("/login"); // update path if your login route is different
//   };

//   return (
//     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-[#FFF9E5]">

//       {/* LEFT PART (hidden below lg) */}
//       <div className="hidden lg:block  left-0 top-0 h-full w-1/2">

//         {/* Top Rectangles */}
//         <div className="absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
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

//         {/* Desktop Logo */}
//      <div className='absolute left-25 bottom-50'>
//               <img src={logo} className='w-[60%]' alt="Logo" />
//             </div>

   

//         {/* Bottom Rectangles */}
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

//       {/* MOBILE Logo */}
//       <div className="block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
//         <img src={logo} className="w-28" alt="Logo" />
//       </div>

//       {/* Message Icon (always visible) */}
//       <img
//         src={messageIcon}
//         className="hidden lg:block w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6"
//         alt="Message Icon"
//       />
//            {/* Trophy */}
//         <img src={trophy} alt=""  className="hidden lg:block w-[12%] sm:w-[8%] absolute md:w-[10%] z-20 mb-90 ml-50" />

//       {/* RIGHT PART FORM - full width on mobile/tablet, half on desktop+ */}
//       <div className="w-full lg:w-1/2  absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl flex flex-col items-center justify-center text-center px-4 sm:px-0">
//         <div className="w-[100px] md:w-[100px] lg:w-[100px]  sm:w-[120px] lg:mt-0  md:mt-0 mt-10 z-10">
//           <img src={tick} alt="Success" className="w-full object-contain" />
//         </div>

//         {/* Success Message */}
//         <div className="mt-6 ">
//           <h2 className="text-xl lg:text-2xl md:text-4xl font-semibold text-gray-700 mb-2">Password Updated!</h2>
//           <p className="text-gray-500 text-sm lg:text-base md:text-3xl">
//             Your password has been successfully updated.
//           </p>
//         </div>

//         {/* Back to Login Button */}
//         <button
//           className="mt-6 md:w-[300px] lg:h-[45px] lg:text-xl lg:font-semibold md:text-2xl md:font-bold md:h-[60px] bg-yellow-400 text-white font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
//           onClick={handleBackToLogin}
//         >
//           Back to Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ForgetPass;







import React, { useState,useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Rectangles from '../../assets/Rectangles.png';
import Image5 from '../../assets/Image5.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import tick from '../../assets/tick.png';


const PasswordDone = () => {
  
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res) navigate("/dashboard");
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/login");
  }, 2000);

  return () => clearTimeout(timer); // cleanup
}, [navigate]);


  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">

  {/* TOP LEFT LOGO */}
  <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
    <img src={logo} alt="HintsWork Logo" className="w-36 sm:w-48" />
  </div>

  {/* LEFT SECTION */}
 <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-16 py-16 lg:py-0">
 <img
      src={tick}
      alt="tick"
      className=""
    />
    
  {/* <h1 className="text-2xl sm:text-[30px] font-semibold text-black mb-2 text-center montserrat">
    Set a new password
  </h1>

  <p className="text-[#676767] mb-8 sm:mb-10 text-[14px] sm:text-[20px] text-center montserrat">
    Create a new password. Ensure it<br/> differs from previous ones for security  
  </p> */}

  {/* <form
    onSubmit={handleSubmit}
    className="w-full max-w-md space-y-6 text-center"
  > */}
    {/* <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your new password"
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

    {/* <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter password"
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

    {/* {error && <p className="text-red-500 text-sm">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="w-[160px] sm:w-[400px] bg-gradient-to-b from-[#FFD966] to-[#F1C232] text-[#494100] font-semibold py-1.5 rounded-lg text-[14px] sm:text-[20px] montserrat"
    >
      {loading ? "Updating..." : "Update Password"}
    </button> */}
  {/* </form> */}
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
        src={Image5}
        alt="Illustration"
        className="max-w-full max-h-[500px] sm:max-h-[600px] lg:max-h-[520px] w-auto"
      />
    </div>
  </div>
</div>

  );
};

export default PasswordDone;
