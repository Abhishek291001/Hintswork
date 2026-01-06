import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ReusableTable from './ReusableTable';
import CreateHintModal from './CreateHintModal'; 

const HintDetailsPage = ({
  title,
  onBack,
  tableData,
  onAddHint,
  onEditHint,
  onDeleteHint,
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false); 

  const columns = [
    {
      header: 'Brand',
      accessor: 'brand',
    },
    {
      header: 'Hint',
      accessor: 'hint',
    },
    {
      header: 'Sponsor',
      accessor: 'sponsor',
    },
  ];

  const handleSaveHint = (newHint) => {
   
    console.log("New Hint Submitted:", newHint);

    
    if (onAddHint) {
      onAddHint(newHint);
    }

   
    setShowCreateModal(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div onClick={onBack} className="text-[#786A08] hover:text-[#bca719] cursor-pointer">
            <FaArrowLeft size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#786A08]">{title}</h2>
        </div>

        <div
          onClick={() => setShowCreateModal(true)} 
          className="px-4 py-2 md:px-6 md:py-3 font-semibold bg-gradient-to-b from-[#FFE074] to-[#E3B512] text-[#786A08] text-base md:text-xl rounded cursor-pointer hover:bg-gradient-to-b hover:from-[#E3B512] hover:to-[#FFE074] hover:border-[#786A08] transition-all duration-200 ease-in-out"
        >
          Create Hint
        </div>
      </div>

      <ReusableTable
        columns={columns}
        data={tableData}
        onEdit={onEditHint}
        onDelete={onDeleteHint}
        enablePagination={false}
        paginationThreshold={4}
        rowsPerPage={4}
        hasSerialNumberColumn={true}
      />

      
      <CreateHintModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveHint}
      />
    </div>
  );
};

export default HintDetailsPage;
