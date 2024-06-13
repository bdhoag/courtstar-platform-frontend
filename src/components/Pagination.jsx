import React, { useState } from 'react';
import Rating from "./Rating";
import Dropdown from "./Dropdown";

function Pagination(props) {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };
  /**
   * ALL PROPS:
   * listItem: API array
   * itemsPerPage: int
   * content: class (string)
   * title: string
   */
  const apiFeedbacks = props.listItem;

  const itemsPerPage = props.itemsPerPage; // Number of feedbacks to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(apiFeedbacks.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedFeedbacks = apiFeedbacks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <a
        href='#top'
        key={number}
        onClick={() => handleChangePage(number)}
        className={number === currentPage
          ? 'px-2 py-1 mx-1 rounded-md text-sm w-7 font-semibold text-white bg-teal-900 border border-teal-900'
          : 'px-2 py-1 mx-1 rounded-md text-sm w-7 font-semibold text-teal-900 border border-teal-900 bg-white hover:text-white hover:bg-teal-900 hover:border-teal-900 ease-in-out duration-200'}
      >
        {number}
      </a>
    ));
  };

  return (
    <div className={props.content} id='top'>
      <div className="font-semibold text-lg">
        {props.title}
      </div>

      <div className="flex flex-col items-center justify-center h-96 text-3xl text-primary">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="150" height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-rocket">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
        In the process of development
      </div>

      {/* <div className="flex gap-1 items-center">
        <Dropdown
          placeholder=""
          items={items}
          onSelect={handleSelect}
        />
        <Dropdown
          placeholder=""
          items={items}
          onSelect={handleSelect}
        />
        <Rating
          ratingWrapper='flex'
        />
      </div>

      <div className="p-4 divide-y-2">
        {paginatedFeedbacks.map((feedback) => (
          <div key={feedback.id} className="flex flex-col gap-1.5 py-4">
            <div className='font-semibold '>
              {feedback.name}
            </div>
            <div className="">
              <Rating ratingWrapper='flex' star="w-5" value={feedback.rating} />
            </div>
            <div className='text-sm'>
              {feedback.content}
            </div>
          </div>
        ))}
      </div>
      {itemsPerPage <= apiFeedbacks.length &&
        <div className="flex justify-center items-center gap-1.5 font-semibold my-1">
          <a href='#top' className='flex justify-center w-7 rounded-md hover:bg-slate-300 hover:text-white ease-in-out duration-200' onClick={() => handleChangePage(1)} disabled={currentPage === 1}>
            &laquo;
          </a>
          <div className="">
            {renderPageNumbers()}
          </div>
          <a href='#top' className='flex justify-center w-7 rounded-md hover:bg-slate-300 hover:text-white ease-in-out duration-200' onClick={() => handleChangePage(totalPages)} disabled={currentPage === totalPages}>
            &raquo;
          </a>
        </div>
      } */}
    </div>
  );
}

export default Pagination;
