import React from 'react';
import messageIcon from '../assets/messageIcon.png'; 
import scienceSays from '../assets/scienseSays.png';
import { Element } from 'react-scroll';
const ScienceSays = () => {
  return (
    <Element name='Science'>
    <div className='px-5 md:px-0'>

    <div className="py-8 px-6 w-full max-w-[1054px] mx-auto relative">
      <img
            src={messageIcon}
            alt="Message Icon"
            className="w-16 h-16 md:w-32 md:h-20 md:mt-60 left-0 md:left-[-20px] bottom-0 md:bottom-[20px] object-contain absolute"
          />
      <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl  font-bold text-center md:text-center mb-8">
        Science <span className="text-red-500">Says...</span>
      </h2>

      <div className="flex flex-col  md:flex-row items-center justify-center lg:ml-45  md:ml-7 md:items-center gap-8">
        <div className="flex w-[100%] max-w-full md:max-w-1/2 flex-row items-center justify-center space-x-6 mb-8 md:mb-0">
          

          <img
            src={scienceSays}
            alt="Group Picture"
            className=" rounded-lg "
          />
        </div>

        <div className="text-center md:text-left w-[100%] max-w-1/2 md:mt-15 ">
          <h3 className="text-3xl md:text-3xl font-bold mb-4">Science Says</h3>
          <p className="text-gray-500 text-lg md:text-md 2xl:text-xl leading-relaxed">
            Hints Work! is grounded in behavioral science. Studies indicate that
            small, consistent nudges can improve long-term outcomes sustainably.
            Each Hint you see is connected to research and real-world evidence in
            plain language.
          </p>
        </div>
      </div>
    </div>
    </div>
    </Element>
  );
};

export default ScienceSays;
