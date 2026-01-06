import React, { useEffect, useState } from 'react';

const HintsGrid = () => {
  const [hintData, setHintData] = useState([]);


  const borderColors = [
    'border-l-[#FEDA59]', 
    'border-l-[#BE5C00]',
    'border-l-[#685900]',
    'border-l-[#FEDA59]', 
    'border-l-[#282100]', 
    'border-l-[#A08180]',
  ];

  useEffect(() => {
    const dummyData = [
      { title: "Total Hints Shared", value: "100%" },
      { title: "Hint Calm", value: "100%" },
      { title: "Hint Work", value: "100%" },
      { title: "Hint Health", value: "100%" },
      { title: "Hint Diet", value: "100%" },
      { title: "Hint Education", value: "100%" },
    ];

    setHintData(dummyData);
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-[17px] md:p-4 rounded-md">
      {hintData.map((hint, index) => (
        <div
          key={index}
          className={`px-3 py-2 flex flex-col items-start justify-center text-left border-l-3 ${borderColors[index % borderColors.length]}`}
        >
          <p className="font-medium text-black text-base montserrat text-xl">{hint.title}</p>
          <p className="text-base text-black font-regular montserrat text-xl">{hint.value}</p>
        </div>
      ))}
    </div>
  );
};

export default HintsGrid;
