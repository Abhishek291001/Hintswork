import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo2.png";
import Rectangles from '../../assets/Rectangles.png';
import Image1 from '../../assets/Image1.png';
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const { signup, loading, error } = useAuth(); // make sure you have a signup hook
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  // const [assignedPlan, setAssignedPlan] = useState("free");
  const [showPassword, setShowPassword] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup({
      fullName,
      email,
      password,
      phoneNumber,
      department,
     
    });
    if (res) navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
        <img src={logo} alt="HintsWork Logo" className="w-36 sm:w-48" />
      </div>

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-16 py-16 lg:py-0">
        <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2 text-center montserrat">
          Create Account
        </h1>

        <p className="text-[#676767] mb-8 sm:mb-10 text-sm sm:text-xl text-center montserrat">
          Fill in your details to sign up
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 text-center"
        >
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-2 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-2 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
          />


          

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-2 pr-12 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-2 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
          />

          {/* Department */}
          <input
            type="text"
            placeholder="Department (optional)"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border border-gray-400 rounded-lg px-4 sm:px-5 py-3 sm:py-2 text-sm sm:text-lg focus:outline-none text-[#1A171761] montserrat"
          />

          {/* Assigned Plan */}
          {/* <div className="flex justify-between gap-3">
            {["free", "starter", "pro"].map((plan) => (
              <label key={plan} className="flex-1 flex items-center gap-2 cursor-pointer font-semibold">
                <input
                  type="radio"
                  checked={assignedPlan === plan}
                  onChange={() => setAssignedPlan(plan)}
                  className="hidden"
                />
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${assignedPlan === plan ? "border-[#FFD34E]" : "border-gray-400"}`}>
                  {assignedPlan === plan && (
                    <div className="w-2 h-2 bg-[#FFD34E] rounded-full" />
                  )}
                </div>
                <span className="text-sm text-[#786A08] capitalize">{plan}</span>
              </label>
            ))}
          </div> */}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-[160px] sm:w-[400px] bg-gradient-to-b from-[#FFD966] to-[#F1C232] text-[#494100] font-semibold py-1.5 rounded-lg text-sm sm:text-xl montserrat"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:flex-1 mt-10 mb-8 mr-6 relative bg-[#FFD966] rounded-[10px] overflow-hidden">
        <img
          src={Rectangles}
          alt="Background pattern"
          className="absolute top-4 left-4 right-4 bottom-4 object-cover rounded-lg"
        />
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

export default Signup;
