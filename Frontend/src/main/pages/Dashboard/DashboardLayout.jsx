
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TabContent from './TabContent'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <div className='flex-1 overflow-y-auto'>
          <TabContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
