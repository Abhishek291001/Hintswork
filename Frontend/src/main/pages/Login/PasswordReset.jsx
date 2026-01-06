import React, { useState } from 'react'
import logo from "../../assets/logo2.png"
import trophy from "../../assets/trophy.png"
import messageIcon from "../../assets/messageIcon.png"
import rectangleLogin from "../../assets/rectangleLogin.png"
import rectangleLogin2 from "../../assets/rectangleLogin2.png"
import { useNavigate } from 'react-router-dom'

const ForgetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/new-password")
  }

  return (
    <div className="w-full relative overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-[#FFF9E5]">

      {/* LEFT PART WRAPPER - hidden on mobile & tablet, visible on desktop+ */}
      <div className="hidden lg:block  left-0 top-0 h-full w-1/2">

        {/* Background Top */}
        <div className="absolute transform rotate-130 origin-top-left top-0 mt-[-10px] left-80 w-full h-[120px] ">
          <img
            src={rectangleLogin}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
          />
          <img
            src={rectangleLogin2}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
          />
        </div>

        {/* Desktop Logo */}
    <div className='absolute left-25 bottom-50'>
             <img src={logo} className='w-[60%]' alt="Logo" />
           </div>

        {/* Background Bottom */}
        <div className="absolute bottom-0 left-0 md:left-80 w-full h-[120px] overflow-hidden z-0">
          <img
            src={rectangleLogin}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-4 object-cover object-top"
          />
          <img
            src={rectangleLogin2}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-[40%] absolute top-10 left-0 object-cover object-top"
          />
        </div>

      </div>

      {/* Mobile Logo */}
      <div className='block lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
        <img src={logo} className='w-32' alt="Logo" />
      </div>

      {/* Message Icon */}
      <img src={messageIcon} className='hidden lg:block w-[10%] sm:w-[6%] md:w-[6%] z-20 absolute bottom-10 right-6' alt="Message" />
      
        {/* Trophy Icon */}
        <img src={trophy} alt="" className='hidden lg:block md:mt-[35%] mb-[60%] w-[12%] absolute sm:w-[8%] md:w-[10%]  z-20  ml-50' />

      {/* Form Section - full width on mobile/tablet, half width on desktop+ */}
      <div className='w-full lg:w-[50%]  absolute right-0 h-screen bg-white rounded-b-4xl shadow-2xl rounded-t-4xl z-10'>
        <div className="w-[90%] max-w-[340px] lg:max-w-[340px] md:max-w-[440px]   lg:mt-30 mx-auto mt-20 md:mt-70 z-10 bg-white px-6 py-8 rounded-md">

          <h2 className="text-3xl lg:text-3xl md:text-5xl font-bold text-center md:mb-10 mb-3">Password reset</h2>

          <p className="text-gray-500 text-sm lg:text-sm md:text-3xl md:mb-15 text-center mb-6">
            Your password has been successfully reset. <br />
            Click confirm to set a new password
          </p>

          <button
            className="w-full lg:w-full lg:font-semibold lg:text-xlg lg:h-[42px] md:w-full md:text-2xl md:font-bold md:h-[50px] bg-yellow-400 text-white font-semibold py-1 rounded-md hover:bg-yellow-500 transition duration-300"
            onClick={handleClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass
