import React, { useState,useEffect } from "react";
import Editicon from "../../assets/edit.svg";
import Deleteicon from "../../assets/delete.svg";
import { ArrowLeft } from "lucide-react";
import AddEmployeeModal from "./AddEmployeeModal";
import ActionButtons from "./ActionButtons";
import BulkUploadEmployees from "./BulkUploadEmployees";
import AddAnnouncementModal from "./AddAnnouncementModal";


const STORAGE_KEY = "announcements_data_v2";


const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 1,
    announcement: "Wellness Week",
    posted: "Oct 29",
    expiry: "Nov 3",
    engagement: "84%",
  },
  {
    id: 2,
    announcement: "Reward Week",
    posted: "Oct 25",
    expiry: "Nov 1",
    engagement: "67%",
  },
  {
    id: 3,
    announcement: "Coffee Break",
    posted: "Oct 23",
    expiry: "Oct 28",
    engagement: "50%",
  },
  {
    id: 4,
    announcement: "Reward Week",
    posted: "Oct 19",
    expiry: "Oct 23",
    engagement: "78%",
  },
  {
    id: 5,
    announcement: "Wellness Week",
    posted: "Oct 15",
    expiry: "Oct 20",
    engagement: "92%",
  },
  {
    id: 6,
    announcement: "Wellness Week",
    posted: "Oct 15",
    expiry: "Oct 20",
    engagement: "92%",
  },
  {
    id: 7,
    announcement: "Wellness Week",
    posted: "Oct 15",
    expiry: "Oct 20",
    engagement: "92%",
  },
  {
    id: 8,
    announcement: "Wellness Week",
    posted: "Oct 15",
    expiry: "Oct 20",
    engagement: "92%",
  },
];


const Tab6 = () => {
   
  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_ANNOUNCEMENTS; 
  });

  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
 const ITEMS_PER_PAGE = 5;
const [currentPage, setCurrentPage] = useState(1);
const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);



  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(announcements));
  }, [announcements]);

 
  const handleSaveEmployee = (data) => {
    if (selectedEmployee) {
     
      setAnnouncements((prev) =>
        prev.map((emp) =>
          emp.id === selectedEmployee.id
            ? { ...emp, ...data }
            : emp
        )
      );
    } else {
      
      setAnnouncements((prev) => [
        ...prev,
        {
          id: Date.now(),
          points: "0",
          ...data,
        },
      ]);
    }

    setShowAddEmployee(false);
    setSelectedEmployee(null);
  };



const totalPages = Math.ceil(announcements.length / ITEMS_PER_PAGE);


const paginatedAnnouncements = announcements.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);

useEffect(() => {
  if (currentPage > totalPages) {
    setCurrentPage(totalPages || 1);
  }
}, [announcements, totalPages, currentPage]);


  return (
    <div className="space-y-6 font-montserrat">
     
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 text-[#786A08]">
          <ArrowLeft className="cursor-pointer" />
          <h1 className="text-3xl sm:text-4xl font-semibold montserrat">Announcement</h1>
        </div>

    <ActionButtons
          buttons={[
            { label: "Add Announcement", className: "font-semibold text-xl font-semibold", onClick: () => setShowAddEmployee(true) },
          ]}
        />  

      </div>






     
<div className=" overflow-x-auto rounded-xl shadow-md min-w-[900px] ">
  <table className="md:min-w-full w-full">
    <thead className="bg-[#F8DD8A] montserrat">
      <tr>
        {["Announcement", "Posted On", "Expiry", "Engagement", "Action"].map(
          (head) => (
            <th
              key={head}
              className="px-10 py-4 text-center text-base sm:text-2xl font-medium text-[#786A08] whitespace-nowrap montserrat"
                  >
              {head}
            </th>       
                    
          )
        )}
      </tr>
    </thead>

    <tbody>
      {paginatedAnnouncements.map((emp, index) => (
        <tr
          key={emp.id}
          className={`text-center text-[#645200]
          ${index % 2 === 0 ? "bg-[#FFFBEF]" : "bg-[#F9EFCA]"}`}
        >
          <td className="px-4 py-4 whitespace-nowrap text-xl font-medium montserrat">{emp.announcement}</td>
          <td className="whitespace-nowrap text-xl font-medium montserrat">{emp.posted}</td>
          <td className="whitespace-nowrap text-xl font-medium montserrat">{emp.expiry}</td>
          <td className="whitespace-nowrap text-xl font-medium montserrat">{emp.engagement}</td>

          <td className="flex justify-center gap-3 px-4 py-4 whitespace-nowrap">
          
            <img src={Editicon} alt="edit" onClick={() =>{
              setSelectedEmployee(emp); 
               setShowAddEmployee(true);
               }} className="cursor-pointer"/>
            <img src={Deleteicon} alt="delete" className="cursor-pointer"/>
          </td>
        </tr>
      ))}
    </tbody>

  <tfoot>
  <tr className="bg-[#FFF5CC]">
    <td colSpan={5} className="py-3">
      <div className="flex justify-center gap-3 text-[#645200] font-medium montserrat text-xl">

        {/* PREV */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className={`px-3 py-1 rounded-md shadow
            ${currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#FFF9E5]"
            }`}
        >
          Prev
        </button>

        {/* PAGE NUMBERS */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-1 rounded-md shadow font-semibold
                ${currentPage === page
                  ? "bg-[#FFD94A] text-white"
                  : "bg-[#FFF9E5] text-[#645200]"
                }`}
            >
              {page}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          className={`px-3 py-1 rounded-md shadow
            ${currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#FFF9E5]"
            }`}
        >
          Next
        </button>

      </div>
    </td>
  </tr>
</tfoot>



  </table>
</div>


      <AddEmployeeModal
  isOpen={showAddEmployee}
  employee={selectedEmployee}
  onClose={() => {
    setShowAddEmployee(false);
    setSelectedEmployee(null);
  }}
  onSave={handleSaveEmployee}
/>


      <BulkUploadEmployees
  isOpen={showBulkUpload}
  onClose={() => setShowBulkUpload(false)}
/>

<AddAnnouncementModal
  isOpen={showAddAnnouncement}
  onClose={() => setShowAddAnnouncement(false)}
/>


    </div>
  );
};

export default Tab6;

