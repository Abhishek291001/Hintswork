import React from 'react'
import HowItWorks from '../assets/howitworks.png'
import { Element } from 'react-scroll'
import hiw1 from "../assets/hiw1.svg";
import hiw2 from "../assets/hiw2.svg";
import hiw3 from "../assets/hiw3.svg";
import hiw4 from "../assets/hiw4.svg";
import hiwv1 from "../assets/hiwv1.svg";
import hiwv2 from "../assets/hiwv2.svg";
const HIW = () => {
  return (
    <>
    <Element name='HIW'>
    <div className='flex flex-col items-center gap-8 px-5 md:px-16'>
      <div className='flex items-center flex-row flex-nowrap gap-2 justify-center'>
        <span className='text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-normal text-black font-bold'>How</span>
        <span className='text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-normal text-[#E2221F] font-bold'>It Works</span>
      </div>
      <div className='icon-block flex flex-col md:flex-row justify-center gap-10 md:gap-0'>
         <div className='flex flex-col items-center'>
          <div className='w-[97px] h-[97px]'>
             <img src={hiw1} alt='hiw1' className='w-full h-full'/>
           </div>
           <p className='sm:text-xs md:text-xl 2xl:text-3xl text-black font-semibold text-center'>Receive a Hint</p>
           <p className='text-[#666666] sm:text-xs md:text-[18px] 2xl:text-[26px] !leading-[100%] font-normal text-center w-full max-w-[190px] 2xl:max-w-[200px]'>Simple, science-backed nudge.</p>
         </div>

         <div className='hidden md:block'>
             <img src={hiwv1} alt='hiw1' className='w-full h-full'/>
           </div>

         <div className='flex flex-col items-center'>
          <div className='w-[97px] h-[97px]'>
             <img src={hiw2} alt='hiw1' className='w-full h-full'/>
           </div>
           <p className='sm:text-xs md:text-xl 2xl:text-3xl text-black font-semibold text-center'>Take Action</p>
           <p className='text-[#666666] sm:text-xs md:text-[18px] 2xl:text-[26px] !leading-[100%] font-normal text-center w-full max-w-[190px] 2xl:max-w-[200px]'>Apply it in your daily routine.</p>
         </div>

          <div className='hidden md:block'>
             <img src={hiwv2} alt='hiw1' className='w-full h-full'/>
           </div>

         <div className='flex flex-col items-center'>
          <div className='w-[97px] h-[97px]'>
             <img src={hiw3} alt='hiw1' className='w-full h-full'/>
           </div>
           <p className='sm:text-xs md:text-xl 2xl:text-3xl text-black font-semibold text-center'>Earn Points</p>
           <p className='text-[#666666] sm:text-xs md:text-[18px] 2xl:text-[26px] !leading-[100%] font-normal text-center w-full max-w-[190px] 2xl:max-w-[200px]'>Get rewarded for consistency.</p>
         </div>

          <div className='hidden md:block'>
             <img src={hiwv1} alt='hiw1' className='w-full h-full'/>
           </div>

         <div className='flex flex-col items-center'>
          <div className='w-[97px] h-[97px]'>
             <img src={hiw4} alt='hiw1' className='w-full h-full'/>
           </div>
           <p className='sm:text-xs md:text-xl 2xl:text-3xl text-black font-semibold text-center'>Track Progress</p>
           <p className='text-[#666666] sm:text-xs md:text-[18px] 2xl:text-[26px] !leading-[100%] font-normal text-center w-full max-w-[190px] 2xl:max-w-[200px]'>Watch your streaks grow.</p>
         </div>

      </div>
       <button className="bg-[#E2221F] w-[250px] mb-4 md:mt-6 text-white px-4 sm:px-6 ml-[0px] py-2 rounded-lg text-xl sm:text-2xl  font-medium shadow-md">
            Try a Sample Hint
      </button>
    </div>
    </Element>
    </>
  )
}

export default HIW