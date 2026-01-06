import React from 'react';
import Cypfree from '../assets/cypfree.png';
import Cypstart from '../assets/cypstart.png';
import Cyppro from '../assets/cyppro.png';
import Redcheck from '../assets/redcheck.svg';
import Whitecheck from '../assets/whitecheck.svg';

const ChooseYourPlan = () => {
  const plans = [
    { img: Cypfree, title: 'Free', price:'$0', desc: 'Basic Hints + Progress Tracking.', icon: Redcheck },
    { img: Cypstart, title: 'Start', price:'$5', desc: 'Unlock Gamification & Rewards.', icon: Redcheck },
    { img: Cyppro, title: 'Pro', price:'$15', desc: 'Full Access + Advanced Insights.', icon: Whitecheck },
  ];

  return (
    <div className="mt-10 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center md:text-left">
        Choose <span className="text-red-500">Your Plan</span>
      </h2>

      <p className="text-gray-500 text-lg 2xl:text-xl text-center md:text-left mt-4 max-w-xl mx-auto md:mx-0">
        Start Free. Upgrade anytime. No commitments.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 w-full max-w-[100%] sm:max-w-[70%]">
     {plans.map(({ img, title, price, desc, icon }, idx) => (
  <div
    key={idx}
    className="relative m-auto sm:w-[281px] md:w-1/3 h-60 sm:h-80 rounded-xl bg-no-repeat bg-center bg-contain flex items-center justify-center"
    style={{
      backgroundImage: `url(${img})`,
    }}
  >
    <div className="pb-6 rounded-lg text-center w-[281px] sm:w-[375px] md:w-[100%]">
      {/* Conditionally apply white text if plan is "Pro" */}
      <p className={`text-2xl font-bold pb-2 ${title === 'Pro' ? 'text-white' : 'text-black'}`}>
        {title}
      </p>
      <p className={`text-2xl border-b pb-2 ${title === 'Pro' ? 'text-white border-white' : 'text-black border-black'}`}>
        {price}
      </p>
      <div className='flex gap-1 w-full max-w-[194px] m-auto pt-2'>
        <img src={icon} alt="check" className="w-5 h-5 mt-[2px]" />
        <p className={`text-base font-medium text-start ${title === 'Pro' ? 'text-white' : 'text-[#4B4B4B]'}`}>
          {desc}
        </p>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default ChooseYourPlan;
