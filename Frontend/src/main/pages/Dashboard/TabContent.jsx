// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Tab1 from './Tab1';
// import Tab2 from './Tab2';
// import Tab3 from './Tab3';
// import ManageHints from './ManageHints';
// import Tab4 from './Tab4';
// import Tab5 from './Tab5';
// import Tab6 from './Tab6';
// import Tab7 from './Tab7';
// import Profile from './Profile';
// import Header from './Header';
// import HintTablePage from './HintTablePage';
// import Login from '../Login/Login';

// const TabContent = () => {
//   return (
//     <div className="content-container flex-1 w-full">
//       <div className="content px-4 pt-4 md:px-[34px] md:pt-[44px] flex-1 overflow-y-auto">
       
//         <Routes>
//           <Route path="/" element={<Tab1 />} />
//           <Route path="employees" element={<Tab2 />} />
//           <Route path="hints" element={<Tab3 />} />
//           <Route path="/hints/manage-hints" element={<ManageHints />} />
//           <Route path="/hints/manage-hints/hint-table" element={<HintTablePage />} />

//           <Route path="rewards" element={<Tab4 />} />
//           <Route path="reports" element={<Tab5 />} />
//           <Route path="announcement" element={<Tab6 />} />
//           <Route path="settings" element={<Tab7 />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default TabContent;




import React from "react";
import { Routes, Route } from "react-router-dom";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import ManageHints from "./ManageHints";
import HintTablePage from "./HintTablePage";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Tab6 from "./Tab6";
import Tab7 from "./Tab7";
import Profile from "./Profile";

const TabContent = () => {
  return (
    <div className="content-container flex-1 w-full">
      <div className="content px-4 pt-4 md:px-[34px] md:pt-[44px] flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<Tab1 />} />
          <Route path="employees" element={<Tab2 />} />
          <Route path="hints" element={<Tab3 />} />
          <Route path="hints/manage-hints" element={<ManageHints />} />
          <Route path="hints/manage-hints/hint-table" element={<HintTablePage />} />
          <Route path="rewards" element={<Tab4 />} />
          <Route path="reports" element={<Tab5 />} />
          <Route path="announcement" element={<Tab6 />} />
          <Route path="settings" element={<Tab7 />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default TabContent;
