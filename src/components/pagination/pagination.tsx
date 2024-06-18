import React from 'react';
import { PaginationProps } from './index';

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <a
        href='#top'
        key={number}
        onClick={() => onPageChange(number)}
        className={number === currentPage
          ? 'px-2 py-1 mx-1 rounded-md text-sm w-7 font-semibold text-white bg-teal-900 border border-teal-900'
          : 'px-2 py-1 mx-1 rounded-md text-sm w-7 font-semibold text-teal-900 border border-teal-900 bg-white hover:text-white hover:bg-teal-900 hover:border-teal-900 ease-in-out duration-200'}
      >
        {number}
      </a>
    ));
  };

  return (
    <div className="flex justify-center items-center gap-1.5 font-semibold my-1">
      <a
        href='#top'
        className='flex justify-center w-7 rounded-md hover:bg-slate-300 hover:text-white ease-in-out duration-200'
        onClick={() => onPageChange(1)}
        aria-disabled={currentPage === 1}
      >
        &laquo;
      </a>
      <div>{renderPageNumbers()}</div>
      <a
        href='#top'
        className='flex justify-center w-7 rounded-md hover:bg-slate-300 hover:text-white ease-in-out duration-200'
        onClick={() => onPageChange(totalPages)}
        aria-disabled={currentPage === totalPages}
      >
        &raquo;
      </a>
    </div>
  );
};

export default Pagination;
