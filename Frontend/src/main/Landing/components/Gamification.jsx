import React from 'react';
import phoneGam from '../assets/phoneGam.png'; 
import bulbMessage from '../assets/bulbmessage.png'; 
import medal from '../assets/medal2.png'; 
// test
const Gamification = () => {
  return (
    <div className="w-full px-4  md:px-16  py-10">
      <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl py-6 mb-4 md:mb-10 lg:mr-125 font-bold text-red-500 text-center font-Montserrat tracking-wide">
        Gamification
      </h1>
      <div className="w-full max-w-[1100px] m-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 relative">
        <img
          src={medal}
          alt="Trophy Icon"
          className="hidden md:block absolute md:h-25 md:w-25 md:mt-40 md:pr-8  left-0   top-35  right-2 w-32"
        />
        <div className="flex-1 flex flex-col items-center sm:items-start mt-15 ml-15 max-w-xl z-10 leading-relaxed">
          <h2 className="text-2xl 2xl:text-3xl font-bold mb-2 text-center sm:text-start">Stay Motivated with Gamification</h2>
          <p className="text-gray-600 text-base md:text-lg 2xl:text-2xl mb-6 text-center sm:text-start">
            We designed points, streaks, and trophies to keep you engaged. Celebrate small wins, share your progress, and unlock bonuses as you go.
          </p>
          <button className="bg-[#E2221F] w-[250px] mb-4 md:mt-6 text-white px-4 sm:px-6 ml-[0px] py-2 rounded-lg text-xl sm:text-2xl  font-medium shadow-md">
            How Points Work
          </button>
        </div>
        <div className=" relative flex-shrink-0 flex items-center justify-center  z-10">
          <div
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -z-10"
            style={{
              width: '260px',
              height: '260px',
              background: 'linear-gradient(135deg, #fff 0%, #fdf3c8ff 100%)',
              borderRadius: '50% 40% 60% 50% / 60% 50% 40% 50%',
            }}
          ></div>
          <img
            src={phoneGam}
            alt=""
            className="w-[180px] md:w-[220px] drop-shadow-2xl  relative"
          />
          <img
            src={bulbMessage}
            alt=""
            className="absolute right-[-40px] top-[-40px] w-20 pointer-events-none"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gamification;