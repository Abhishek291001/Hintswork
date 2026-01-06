import React from "react";
import { Element } from 'react-scroll'
import lightbulb from "../assets/lightbulb.png";
import doublePhone from "../assets/doublePhone.png";
import home from "../assets/Home.png";
import Header from "./Header";
import bulb from '../assets/bulb.png';
import trophy from '../assets/trophy.png';
const LandPage1 = () => {
  return (
    <Element name="Home">
    <div
      className="testing relative font-sans bg-[#fedc63] px-5 md:px-0 pt-24 md:bg-transparent ">
     
    <div className="relative"> 
    <div className="flex flex-col-reverse md:flex-row items-start justify-between md:pl-[72px] bg-transparent ">
      <div className="w-full max-w-1/2 text-center  md:text-left md:pr-30 md:flex-col mb-12 pt-0 md:pt-20 2xl:pt-56">
          <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl w-full 2xl:max-w-[790px] font-bold font-montserrat">
            Small Hints <span className="text-red-600">= Big Changes</span>
          </h1>
          <div className="max-w-sm 2xl:max-w-xl m-auto md:m-0">
            <p className="text-gray-700 text-Montserrat sm:text-xs md:text-xl 2xl:text-3xl md:z-10 mb-6 mt-6 md:mt-8 leading-relaxed text-wrap">
              Unlock your potential with science-backed micro-behaviors that transform your daily habits.
            </p>
          </div>
          <a
            href="#"
            className="bg-[#E2221F] w-[250px] mb-4 md:mt-6 text-white px-4 sm:px-6 ml-[0px] py-2 rounded-lg text-xl sm:text-2xl  font-medium shadow-md"
          >
            Explore Hints
          </a>
        </div>
        <div className="double-phnimg right-0  w-full max-w-1/2 md:7 h-auto ">
        <div className="">

          <img
            src={doublePhone}
            alt="phone"
            className="w-[100%] max-w-[90%] h-[100%]"
          />
        </div>
      </div>

      <img
            src={bulb}
            alt="bulb"
            className="h-[100px] w-[100px] absolute object-contain bottom-20 md:bottom-16 right-0 md:left-1/2 md:-translate-x-[80%] "
          />

          <img
            src={trophy}
            alt="trophy"
            className="h-[120px] md:h-[160px] absolute bottom-0 md:bottom-[-10%] 2xl:bottom-48 left-[-36px] md:left-0 w-[110] md:w-auto object-contain"
          />

    </div>
    </div> 
      {/* <img
            src={bulb}
            alt="bulb"
            className="h-[160px]  w-auto object-contain -mt-[320px] ml-[180px]"
          />

          <img
            src={trophy}
            alt="trophy"
            className="h-[160px]  w-auto object-contain ml-[40px]"
          /> */}
    </div>
    </Element>
  );
};
export default LandPage1;