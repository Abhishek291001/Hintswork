// import React, { useEffect, useState } from 'react';
// import { FaUsers, FaUserShield, FaLightbulb, FaUserTie } from 'react-icons/fa';
// import CircleProgress from './CircleProgress';
// import BarProgress from './BarProgress';
// import HintsGrid from './HintsGrid';
// import Nousers from '../../assets/3users.png';
// // import Totalhints from '../../assets/totalhints.png';
// // import HintsBrand from '../../assets/brands.png';
// // import Sponsoricon from '../../assets/sponsor.png';
// import Hands from '../../assets/Hands.png';
// import Star from '../../assets/star.png';
// import Level from '../../assets/level.png';
// const Tab1 = () => {

//     const dashboardData = [
//         { title: 'Active User', value: 1200, icon: Nousers },
//         { title: 'Engagement Rate', value: 560, icon: Hands },
//         { title: 'Total Points Earned', value: 10, icon: Star },
//         { title: 'Average Streak', value: 5, icon: Level },
//     ];

//     const [hintCategories, setHintCategories] = useState([]);
//     const [showAllHints, setShowAllHints] = useState(false);



//     useEffect(() => {
//     const dummyHints = [
//       { label: 'Hint Work', color: '#c46e0d' },
//       { label: 'Hint Calm', color: '#796b0b' },
//       { label: 'Hint Health', color: '#edb438' },
//       { label: 'Hint Diet', color: '#3b3509' },
//       { label: 'Hint Education', color: '#af948d' },
//       { label: 'Hint Focus', color: '#8b5cf6' },
//       { label: 'Hint Sleep', color: '#22d3ee' },
//     ];

//     setHintCategories(dummyHints);
//   }, []);


//     return (
//         <>
        
//             <div className="tab1-container w-full mx-auto">
//                 <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {dashboardData.map((data, index) => (
//                         <div className="card flex flex-col bg-[#FEDC63] rounded-2xl shadow-md p-6 text-center gap-6" key={index}>
//                             <div className='icon-text-block flex gap-2 align-end'>
//                                 <img className='size-6' src={data.icon} alt='icon'/>
//                                 <h4 className='text-[16px] font-bold montserrat leading-[28px] text-[#796B0B] m-0 text-start'>{data.title}</h4>
//                             </div>
//                             <p className="card-value text-[32px] font-semibold montserrat leading-8 text-[#796B0B] m-0 text-start">{data.value}</p>
                            

//                         </div>
//                     ))}
//                 </div>
                
//             </div>
//                     <div className='flex'>
//             <div className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] montserrat text-[20px] md:text-xl cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out w-[211px] h-[44px] rounded-[6px] my-[20px] flex items-center justify-center">Add Employees</div>

//             <div className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] montserrat text-[20px] md:text-xl cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out w-[211px] h-[44px] rounded-[6px] my-[20px] mx-10 flex items-center justify-center">Generate Reports</div>
//             </div>


//             <div className='progress-block flex flex-col lg:flex-row bg-[#fff5d1] py-8 rounded-3xl shadow-md mt-10'>
//                 <div className='circleprog-block w-full lg:w-1/2 pl-[23px] pr-6 pb-6 lg:pb-0 border-b-4 lg:border-b-0 lg:border-r-4 border-[#FEDC63]'> 
//                 <p className='text-[#796B0B] text-2xl font-medium leading-[48px]'>Hints Shared</p>  
//                     <div className='flex pl-0 md:pl-6 lg:pl-0 py-12 xl:pl-12 pr-6 gap-0 justify-between items-center'>
//                      <div className=''>
//                     <CircleProgress />
//                       </div>
//                     <div className="flex flex-col justify-between items-center h-full">
                        
//                         <div className="flex flex-col gap-1 pr-0 xl:pr-12">
//                             {(showAllHints ? hintCategories : hintCategories.slice(0, 5)).map((hint, index) => (
//                                 <div className="flex items-center gap-2" key={index}>
//                                 <div className="w-2 h-2" style={{ backgroundColor: hint.color }}></div>
//                                 <span className="text-[16px]  text-black">{hint.label}</span>
//                                 </div>
//                             ))}
//                         </div>

                       
//                         <div className="flex items-center justify-between mt-2 w-fit gap-3 pr-12" onClick={() => setShowAllHints(!showAllHints)}>
//                             <span className="text-[#B88A00] text-4 cursor-pointer font-semibold" >
//                                 {showAllHints ? 'View Less' : 'View More'}
//                             </span>
//                             <svg className="w-4 h-4 text-white bg-[#B88A00] rounded-full cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                     </div>
//                     </div>
//                     <div className='pl-0 xl:pl-16'>
//                     < HintsGrid/>
//                     </div>
//                 </div>
//                 <div className='barprog-block w-full lg:w-1/2 pl-6 pt-6 lg:pt-0'>
//                 <p className='text-[#796B0B] text-2xl leading-[48px] font-medium'>Active Users</p>  
//                    <div className='mt-[47px]'>
//                     <BarProgress />
//                    </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Tab1;





import React, { useEffect, useState } from 'react';
// import { FaUsers, FaUserShield, FaLightbulb, FaUserTie } from 'react-icons/fa';
// import CircleProgress from './CircleProgress';
import BarProgress from './BarProgress';
// import HintsGrid from './HintsGrid';
import Nousers from '../../assets/3users.png';
// import Totalhints from '../../assets/totalhints.png';
// import HintsBrand from '../../assets/brands.png';
// import Sponsoricon from '../../assets/sponsor.png';
import Hands from '../../assets/Hands.png';
import Star from '../../assets/star.png';
import Level from '../../assets/level.png';
import Sponsor from '../../assets/sponsor.png';
import Book from '../../assets/book.png';
import AddEmployeeModal from './AddEmployeeModal';
import ActionButtons from './ActionButtons';
const Tab1 = () => {

    const dashboardData = [
        { title: 'Active User', value: 800, icon: Nousers },
        { title: 'Engagement Rate', value: '75%', icon: Hands },
        { title: 'Total Points Earned', value: '12,340', icon: Star },
        { title: 'Average Streak', value: 7, icon: Level },
    ];

    const [hintCategories, setHintCategories] = useState([]);
    const [showAllHints, setShowAllHints] = useState(false);

    const [showAddEmployee, setShowAddEmployee] = useState(false);


    useEffect(() => {
    const dummyHints = [
      { label: 'Hint Work', color: '#c46e0d' },
      { label: 'Hint Calm', color: '#796b0b' },
      { label: 'Hint Health', color: '#edb438' },
      { label: 'Hint Diet', color: '#3b3509' },
      { label: 'Hint Education', color: '#af948d' },
      { label: 'Hint Focus', color: '#8b5cf6' },
      { label: 'Hint Sleep', color: '#22d3ee' },
    ];

    setHintCategories(dummyHints);
  }, []);

   return (
  <>
    
    <div className="tab1-container w-full mx-auto">
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardData.map((data, index) => (
          <div
            className="card flex flex-col bg-[#FEDC63] rounded-2xl shadow-md p-4 text-center gap-6"
            key={index}
          >
            <div className="icon-text-block flex gap-2 align-end">
              <img className="size-6" src={data.icon} alt="icon" />
              <h4 className="text-base font-bold montserrat leading-[28px] text-[#796B0B] m-0 text-start">
                {data.title}
              </h4>
            </div>

            <p className="card-value text-3xl font-semibold montserrat leading-8 text-[#796B0B] m-0 text-start">
              {data.value}
            </p>
          </div>
        ))}
      </div>
    </div>

    
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
  
  {/* <div
  onClick={() => setShowAddEmployee(true)}
  className="px-4 py-2 md:px-6 md:py-3 font-semibold 
  bg-gradient-to-b from-[#FFE074] to-[#E3B512] 
  text-[#786A08] montserrat text-[18px] md:text-xl 
  cursor-pointer transition-all duration-200 
  w-full sm:w-[211px] h-[44px] rounded-[6px] 
  flex items-center justify-center">
  Add Employees
</div> */}




<div className="mt-3">
  <ActionButtons
    size="medium"
    buttons={[
      {
        label: "Add Employees",
        onClick: () => setShowAddEmployee(true),
      },
      {
        label: "Generate Reports",
        onClick: () => console.log("Generate Reports"),
      },
    ]}
  />
</div>



  {/* <div className="px-4 py-2 md:px-6 md:py-3 font-semibold 
    bg-gradient-to-b from-[#FFE074] to-[#E3B512] 
    text-[#786A08] montserrat text-[18px] md:text-xl 
    cursor-pointer transition-all duration-200 ease-in-out 
    w-full sm:w-[211px] h-[44px] rounded-[6px] 
    flex items-center justify-center">
    Generate Reports
  </div> */}

</div>


    
    <div className="progress-block flex flex-col lg:flex-row bg-[#fff5d1] py-4 rounded-3xl shadow-md mt-5 w-full ">

   
      <div className="barprog-block w-full lg:w-1/2 pl-6 pt-6 lg:pt-0 border-b-4 lg:border-b-0 lg:border-r-4 border-[#FEDC63]">
        <p className="text-[#796B0B] text-2xl leading-[23px] font-medium montserrat">
          Engagement Trend
        </p>

        <div className="mt-[15px]">
          <BarProgress />
        </div>
      </div>

      
      <div className="w-full lg:w-[537px] pl-10 pr-10">
        <p className="text-[#796B0B] text-2xl font-medium leading-[26px] montserrat mb-7">
          Quick Actions
        </p>

       <div className="flex flex-col gap-6 mt-2">
  <div className="bg-[#FEDC63] rounded-xl shadow-sm p-5 pl-6 cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-start gap-3" onClick={() => setShowAddEmployee(true)}>
    <img
      src={Nousers}
      alt="Add Employees"
      className="w-[24px] h-[24px]"
    />
    <span className="text-[#786A08] text-lg font-semibold montserrat">
      Add Employees
    </span>
  </div>

  <div className="bg-[#FEDC63] rounded-xl shadow-sm p-5 pl-6 cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-start gap-3">
    <img
      src={Sponsor}
      alt="Create Announcement"
      className="w-[24px] h-[24px]"
    />
    <span className="text-[#786A08] text-lg font-semibold montserrat">
      Create Announcement
    </span>
  </div>

  <div className="bg-[#FEDC63] rounded-xl shadow-sm p-5 pl-6 cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-start gap-3">
    <img
      src={Book}
      alt="Generate Reports"
      className="w-[24px] h-[24px]"
    />
    <span className="text-[#786A08] text-lg font-semibold montserrat">
      Generate Reports
    </span>
  </div>
</div>

      </div>
    </div>

    <AddEmployeeModal
  isOpen={showAddEmployee}
  onClose={() => setShowAddEmployee(false)}
  onSave={() => setShowAddEmployee(false)}
/>

  </>
);

};

export default Tab1;