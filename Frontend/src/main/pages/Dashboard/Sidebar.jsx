import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; 
import HinsLogo from '../../assets/hintslogo.svg';
import Brandicon from '../../assets/brand.svg';
import Dashboardicon from '../../assets/dashboard.svg';
import Hinticon from '../../assets/hints.svg';
import Sponsoricon from '../../assets/sponsor.svg';
import Hintslogo from '../../assets/hintslogo.svg';
import Usersicon from '../../assets/users.svg';
import Nousers from '../../assets/3users.png';
import Star from '../../assets/star.png';
import Book from '../../assets/book.png';
import Settings from '../../assets/settings.png';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  
  useEffect(() => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
   
  }, [location.pathname]);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10 lg:hidden transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-[284px] bg-[#ffedb1] text-[#796b0b] p-2.5 overflow-y-auto z-30 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:static lg:translate-x-0 lg:flex-shrink-0`}
      >
       
        <div className="flex justify-between items-center p-2.5 pb-4">
          <img src={Hintslogo} alt="hintlogo" className="w-[150px]" />
         
          <div onClick={toggleSidebar} className="flex justify-center items-center w-[30px] h-[30px] border-2 border-[#796B0B] lg:hidden text-x text-[#796b0b] hover:text-[#b88a00] cursor-pointer rounded-full ">
            <FaTimes />
          </div>
        </div>
 
        <ul className='list-none p-0 pt-2 border-t border-[#999999] montserrat'>
          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard"
              onClick={toggleSidebar} 
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Dashboardicon} alt='dashboardicon' /> Dashboard
            </Link>
          </li>


          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/employees"
              onClick={toggleSidebar} 
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Nousers} alt='employeeicon' /> Employees
            </Link>
          </li>



          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/hints/manage-hints"
              onClick={toggleSidebar}
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Hinticon} alt='hinticon' /> Hints
            </Link>
          </li>

<li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/hints"
              onClick={toggleSidebar}
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Hinticon} alt='hinticon' /> Brand control
            </Link>
          </li>

          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/rewards"
              onClick={toggleSidebar}
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Star} alt='staricon' /> Rewards
            </Link>
          </li>



          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332] ">
            <Link
              to="/dashboard/reports"
              onClick={toggleSidebar}
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00] "
            >
              <img className='w-6' src={Book} alt='bookicon' /> Reports
            </Link>
          </li>

{/* 

          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/brands"
              onClick={toggleSidebar} 
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Brandicon} alt='brandicon' /> Brands
            </Link>
          </li> */}

          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/announcement"
              onClick={toggleSidebar} 
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Sponsoricon} alt='sponsoricon' /> Announcement
            </Link>
          </li>

          {/* <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/users"
              onClick={toggleSidebar}
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Usersicon} alt='usersicon' /> Users
            </Link>
          </li> */}

          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link
              to="/dashboard/settings"
              onClick={toggleSidebar}
              className="!text-[#796B0B] w-full p-2.5 flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]"
            >
              <img className='w-6' src={Settings} alt='settingsicon' /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
