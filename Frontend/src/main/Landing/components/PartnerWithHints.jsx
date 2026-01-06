import React, { useState } from 'react';
import imgPartner from '../assets/bgPartner2.png';
import PartnerImg from '../assets/PartnerImgBg.png';
import { Element } from 'react-scroll';
import { useBookDemo } from '../Context/BookDemoContext'; // ✅ import context

const PartnerWithHints = () => {
  const { bookDemo, loading, response, error } = useBookDemo(); // ✅ use context
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookDemo(formData);
      alert("Demo request sent successfully!");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" }); // reset formData
    } catch (err) {
      alert("Failed to send demo request.");
    }
  };

  return (
    <Element name='contactUs'>
      <div className="relative text-center m-auto px-6 mt-10 bg-white w-full max-w-[1200px]">
        <div className='relative z-10'>
        <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6">
          Partner <span className="text-red-500">with HintsWork</span>
        </h2>

        <p className="text-gray-500 text-base md:text-xl font-normal mb-10 max-w-2xl mx-auto">
          Are you a brand, wellness coach, or corporate looking to engage your audience? 
          Partner with us to launch your own Hints and grow together.
        </p>
       </div>
        <div className="relative z-10 flex flex-col-reverse md:flex-row justify-center items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 mb-1 md:ml-10 flex items-center justify-end">
            
            <div className='w-full h-full max-w-full md:max-w-[460px] max-h-full md:max-h-[460px]'>
              <img src={PartnerImg} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* ✅ integrated context API here */}
          <form 
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 md:mb-17 z-10"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4 ">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-gray-300 hover:border-red-600 hover:border-2 rounded-md p-2 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 hover:border-red-600 hover:border-2 rounded-md p-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium  text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border hover:border-red-600 hover:border-2 border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full hover:border-red-600 hover:border-2 border border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Write a message...</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full hover:border-red-600 hover:border-2 border border-gray-300 rounded-md p-2 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition"
            >
              {loading ? "Sending..." : "Book a demo"}
            </button>

            {error && <p className="text-red-500 mt-2">{error.message}</p>}
            {response && <p className="text-green-500 mt-2">{response.message}</p>}
          </form>
        </div>

        <img src={imgPartner} alt="" className="hidden md:block absolute left-[50px] bottom-[10px] w-full max-w-[650px] h-full max-h-[540px] object-contain z-0" />
      </div>
    </Element>
  );
};

export default PartnerWithHints;
