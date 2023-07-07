import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    // Number of page numbers to display at a time

    // Calculate the start and end page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // Adjust startPage if endPage is at the maximum limit
    startPage = Math.max(1, endPage - maxVisiblePages + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <li
        key={pageNumber}
        className={`${
          pageNumber === currentPage
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700'
        } inline-block mx-2 px-3 py-1 rounded cursor-pointer`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    ));
  };

  return (
    <ul className='flex items-center justify-center sm:justify-end my-4'>
      <li
        className={`${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } inline-block mx-1 px-3 py-2 rounded bg-gray-200 text-gray-700`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <KeyboardArrowLeft />
      </li>
      {renderPageNumbers()}
      <li
        className={`${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer'
        } inline-block mx-1 px-3 py-2 rounded bg-gray-200 text-gray-700`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <KeyboardArrowRight />
      </li>
    </ul>
  );
};

export default Pagination;
