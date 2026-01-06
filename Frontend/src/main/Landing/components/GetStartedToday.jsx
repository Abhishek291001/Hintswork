import React from 'react';
import frame2 from '../assets/frame2.png';
import cycle from '../assets/cycle.png';
import dualPhone2 from '../assets/dualPhone2.png';
import gradientBg from '../assets/bgGST.png';
import Appstore from '../assets/appstore.png';
import Googlestore from '../assets/googleplay.png'
import { Link } from 'react-router-dom';


const GetStartedToday = () => {
  return (
    <div className='px-4'>
    <div className="relative bg-red md:flex flex-col md:flex-row items-center justify-between py-12 w-full max-w-[1024px] mx-auto">
     <div className=''>
      <img
        src={dualPhone2}
        alt="phone mockup"
        className="hidden md:block"
      />
      
     </div>
      <div className="flex flex-col gap-3 items-center md:items-start relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
        <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold md:whitespace-nowrap">
          Get <span className="text-red-500">Started Today</span>
        </h2>

        <p className="text-gray-500 text-base sm:text-lg 2xl:text-xl md:max-w-md mx-auto md:mx-0">
          Available soon on App Store & Google Play
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-6 relative z-20 justify-center md:justify-start items-center">
          <Link to="/app-store" className='relative z-20'>
            <img
              src={Appstore}
              alt="App Store"
              className="h-14 sm:h-[64px] md:mr-25 w-[160px] sm:w-[180px] hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            />
          </Link>

          <Link to="/google-play" className='relative z-20'>
            <img
              src={Googlestore}
              alt="Google Play"
              className="h-14 w-[160px] mt-15 sm:h-[64px] sm:w-[180px] md:mr-30 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <img src={gradientBg} alt="" className='hidden md:block absolute ml-20 -z-10 right-[-2%] top-[15%] w-full max-w-[460px]' />
       <img src={cycle} alt="Google Play" className="hidden md:block absolute left-0 bottom-0 w-full max-w-[220px] h-full max-h-[170px]" />
      
    </div>
</div>
  );
};

export default GetStartedToday;
