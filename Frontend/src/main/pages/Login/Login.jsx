// import React, { useState } from 'react'
// import logo from "../../assets/logo2.png"
// import trophy from "../../assets/trophy.png"
// import messageIcon from "../../assets/messageIcon.png"
// import rectangleLogin from "../../assets/rectangleLogin.png"
// import rectangleLogin2 from "../../assets/rectangleLogin2.png"
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../contexts/AuthContext'  // :white_check_mark: useAuth hook from context
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");       // :white_check_mark: email state
//   const [password, setPassword] = useState("");
//   const { login, loading, error } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await login(email, password);
//     if (data) {
//       navigate('/dashboard');
//     }
//   };
//   return (
//     <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-white md:bg-white lg:bg-[#FFF9E5]">
//       <div className="hidden lg:block  left-0 top-0 h-full w-1/2">
//         <div className="hidden md:block absolute transform rotate-[130deg] origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
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
//         <div className='absolute left-25 bottom-50'>
//           <img src={logo} className='w-[60%]' alt="Logo" />
//         </div>
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
//       <div className='block md:block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
//         <img src={logo} className='w-32' alt="Logo" />
//       </div>
//       <img src={messageIcon} className='hidden lg:block   w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6' alt="Message" />
//       <img src={trophy} alt="" className='hidden lg:block w-[10%] sm:w-[8%]  md:w-[10%] md:mt-[35%] absolute z-20 mb-[50%] ml-40' />
//       <div className='w-full md:w-full lg:w-[50%] absolute right-0 md:h-full h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
//         <form
//           onSubmit={handleSubmit}
//           className="w-[90%] lg:w-[100%] md:w-[100%] max-w-[340px] lg:max-w-[450px] md:max-w-[600px] mx-auto mt-20 lg:mt-40 md:mt-70 z-10 bg-white px-6 py-8 rounded-md"
//         >
//           <h2 className="text-2xl lg:text-2xl md:text-6xl font-bold text-center mb-1">Welcome Back</h2>
//           <p className="text-gray-500 text-sm lg:text-sm md:text-3xl md:mt-4 md:mb-20 lg:mb-5 text-center mb-6">
//             Enter your Email and Password to login
//           </p>
//           {/* Email */}
//           <div className="mb-4">
//             <input
//               type="email"
//               id="username"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
//               required
//             />
//           </div>
//           {/* Password */}
//           <div className="mb-6 relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10 placeholder-gray-400"
//               required
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
//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full lg:text-lg lg:font-semibold lg:h-[40px] bg-yellow-400 text-white md:text-2xl md:font-bold md:h-[50px] font-semibold py-1 rounded-md mb-1 hover:bg-yellow-500 transition duration-300"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//           <Link to="/forgot-password" className="text-sm lg:text-sm text-gray-900 italic block text-right md:text-lg">
//             Forgot password ?
//           </Link>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default Login





import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import Rectangles from '../../assets/Rectangles.png';
import Image1 from '../../assets/Image1.png';
import { FiEye, FiEyeOff } from "react-icons/fi";


const Login = () => {
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
    Welcome Back
  </h1>

  <p className="text-[#676767] mb-8 sm:mb-10 text-sm sm:text-xl text-center montserrat">
    Enter your Email and Password to login
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

    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
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

    <div className="text-right text-base italic text-[#181818] cursor-pointer poppins" onClick={()=>{
      navigate("/forgot-password")
    }}>
      Forgot password ?
    </div>

    {error && <p className="text-red-500 text-sm">{error}</p>}

    <button
      type="submit"
      disabled={loading}
      className="w-[160px] sm:w-[400px] bg-gradient-to-b from-[#FFD966] to-[#F1C232] text-[#494100] font-semibold py-1.5 rounded-lg text-sm sm:text-xl montserrat"
    >
      {loading ? "Logging in..." : "Login"}
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
        src={Image1}
        alt="Illustration"
        className="max-w-full max-h-[500px] sm:max-h-[600px] lg:max-h-[520px] w-auto"
      />
    </div>
  </div>
</div>

  );
};

export default Login;
