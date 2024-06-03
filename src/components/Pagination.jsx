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
      <div className="font-bold text-lg">
        {props.title}
      </div>
      <div className="flex gap-1 items-center">
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
      }
    </div>
  );
}

export default Pagination;
