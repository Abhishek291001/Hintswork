import React, { useState } from 'react';
import Editicon from '../../assets/edit.svg';
import Deleteicon from '../../assets/delete.svg';
import Helpicon from '../../assets/help.svg';

const ReusableTable = ({
  columns,
  data,
  onEdit,
  onDelete,
  enablePagination = false,
  paginationThreshold = 4,
  rowsPerPage = 4,
  hasStatusColumn = false,
  hasSerialNumberColumn = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const shouldPaginate = enablePagination && data.length > paginationThreshold;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = shouldPaginate
    ? data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : data;

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null); // Track the row index to delete

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleOpenDeleteModal = (index) => {
    setDeleteIndex(index); 
    setIsDeleteModalVisible(true); 
  };

  const handleDeleteConfirm = () => {
    if (deleteIndex !== null && onDelete) {
      onDelete(deleteIndex); 
    }
    setIsDeleteModalVisible(false); 
    setDeleteIndex(null); 
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false); 
    setDeleteIndex(null);
  };

  return (
    <div className="space-y-4 relative">
      <div className="overflow-x-auto rounded-[11px] shadow-md">
        <table className="min-w-full table-auto rounded shadow-md">
          <thead>
            <tr className="bg-[#F8DD8A] text-[#786A08]">
              {hasSerialNumberColumn && (
                <th className="px-2 py-3.5 md:px-4 md:py-[28px] text-center text-[#645200] text-lg md:text-2xl font-medium leading-5">
                  Sr. No.
                </th>
              )}

              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-2 py-3.5 md:px-4 md:py-[28px] text-center text-[#645200] text-lg md:text-2xl font-medium leading-5"
                >
                  {col.header}
                </th>
              ))}

              {(onEdit || onDelete) && (
                <th className="px-2 py-3.5 md:px-4 md:py-[28px] text-center text-[#645200] text-lg md:text-2xl font-medium leading-5">
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (hasSerialNumberColumn ? 2 : 1)} 
                  className="text-center py-3.5 md:py-[28px] text-[#645200]"
                >
                  No data available.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => {
                const actualIndex = shouldPaginate
                  ? (currentPage - 1) * rowsPerPage + rowIndex
                  : rowIndex;
                const isEvenRow = actualIndex % 2 === 0;
                const bgColor = isEvenRow ? '#FFFBEF' : '#F9EFCA';

                return (
                  <tr
                    key={rowIndex}
                    className="text-[#645200] text-xl font-medium hover:bg-[#FFFBEF] text-center"
                    style={{ backgroundColor: bgColor }}
                  >
                    {hasSerialNumberColumn && (
                      <td className="px-2 py-3.5 md:px-4 md:py-[28px] text-center text-[#645200]">
                        {actualIndex + 1}
                      </td>
                    )}

                    {columns.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-2 py-3.5 md:px-4 md:py-[28px] text-[#645200] text-base md:text-xl font-medium"
                      >
                        {col.accessor === 'status' && hasStatusColumn ? (
                          <span
                            style={{
                              backgroundColor:
                                row[col.accessor] === 'Active'
                                  ? '#F9EFCA' 
                                  : '#FFFBEF', 
                              padding: '5px 10px',
                              borderRadius: '5px',
                            }}
                          >
                            {row[col.accessor]}
                          </span>
                        ) : (
                          row[col.accessor]
                        )}
                      </td>
                    ))}

                    {(onEdit || onDelete) && (
                      <td className="px-2 py-3.5 md:px-4 md:py-[28px] space-x-4 flex justify-center items-center">
                        {onEdit && (
                          <div
                            onClick={() => onEdit(actualIndex)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <img
                              className="size-6 cursor-pointer"
                              src={Editicon}
                              alt="editicon"
                            />
                          </div>
                        )}
                        {onDelete && (
                          <div
                            onClick={() => handleOpenDeleteModal(actualIndex)} 
                            className="text-red-600 hover:text-red-800"
                          >
                            <img
                              className="size-6 cursor-pointer"
                              src={Deleteicon}
                              alt="deleteicon"
                            />
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>

          {shouldPaginate && (
            <tfoot className="bg-[#FFFBEF]">
              <tr className="text-[#645200] text-xl font-medium hover:bg-[#FFFBEF] text-center">
                <td colSpan={columns.length + (hasSerialNumberColumn ? 2 : 1)}>
                  <div className="flex justify-center items-center space-x-2 mt-5 mb-5 text-[#786A08]">
                   
                    <div
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className={`shadow-md px-3 py-1 rounded text-[#645200] text-base md:text-xl font-medium ${
                        currentPage === 1
                          ? 'bg-[#FFFBEF] cursor-not-allowed'
                          : 'bg-[#FFE074] hover:bg-[#E3B512] cursor-pointer'
                      }`}
                    >
                      Prev
                    </div>

                   
                    <div
                      onClick={() => handlePageChange(1)}
                      className={`shadow-md px-4 py-1 rounded text-[#645200] text-base md:text-xl font-medium cursor-pointer ${
                        currentPage === 1
                          ? 'bg-[#FFE074] hover:bg-[#E3B512] font-semibold'
                          : 'bg-[#FFFBEF] hover:bg-[#E3B512]'
                      }`}
                    >
                      1
                    </div>
                    {totalPages > 1 && (
                      <div
                        onClick={() => handlePageChange(2)}
                        className={`shadow-md px-4 py-1 rounded text-[#645200] text-base md:text-xl font-medium cursor-pointer ${
                          currentPage === 2
                            ? 'bg-[#FFE074] hover:bg-[#E3B512] font-semibold'
                            : 'bg-[#FFFBEF] hover:bg-[#E3B512]'
                        }`}
                      >
                        2
                      </div>
                    )}

                   
                    <div
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className={`shadow-md px-3 py-1 rounded text-[#645200] text-base md:text-xl font-medium ${
                        currentPage === totalPages
                          ? 'bg-[#FFFBEF] cursor-not-allowed'
                          : 'bg-[#FFE074] hover:bg-[#E3B512] cursor-pointer'
                      }`}
                    >
                      Next
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      
      {isDeleteModalVisible && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-50 rounded-lg w-full max-w-lg z-10">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[350px]">
            <div className="flex justify-center mb-4">
              <img src={Helpicon} alt="Delete Confirmation" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center">Are You Sure?</h3>
            <p className="text-center text-gray-600 mt-2">You won’t be able to revert this!</p>
            <div className="flex justify-center gap-5 mt-6">
              <div
                onClick={handleDeleteConfirm}
                className="px-6 flex justify-center items-center py-2 bg-[#E30505] text-white rounded-sm text-bold text-base cursor-pointer w-full max-w-[136px]"
              >
                Delete
              </div>
              <div
                onClick={handleDeleteCancel}
                className="px-6 py-2 flex justify-center items-center bg-[#FDD43E] text-white rounded-sm text-bold text-base cursor-pointer w-full max-w-[136px]"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReusableTable;
