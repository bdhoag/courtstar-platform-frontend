import React, { useState } from 'react';
import Button from '../button';
import Rating from '../Rating';
import { FeedbackProps } from './index';
import Pagination from '../pagination';
import FeedbackItem from './feedbackItem';

const Feedback: React.FC<FeedbackProps> = ({ listItem, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<number>(1);

  const handleChangePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(listItem.length / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const paginatedFeedbacks = listItem.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-9 py-5" id="top">
      {/* <div className="font-semibold text-xl mb-5">Feedback</div> */}

      <div className="flex gap-6 justify-start items-center ml-4">
        <div className="">
          <Button
            label="Newest"
            size="small"
            className={`${activeFilter === 1 ? ' bg-primary-green text-white ' : ' text-primary-green ' } border border-primary-green hover:bg-primary-green hover:text-white`}
            onClick={() => setActiveFilter(1)}
          />
        </div>
        <div className="">
          <Button
            label="Oldest"
            size="small"
            className={`${activeFilter === 2 ? ' bg-primary-green text-white ' : ' text-primary-green ' }border border-primary-green hover:bg-primary-green  hover:text-white`}
            onClick={() => setActiveFilter(2)}
          />
        </div>
        <Rating ratingWrapper="flex" editable value={0} />
      </div>

      <div className="p-4 divide-y-2">
        {paginatedFeedbacks.map((feedback) => (
          <FeedbackItem
            key={feedback.id}
            id={feedback.id}
            fullName={feedback.fullName}
            rate={feedback.rate}
            createDate={feedback.createDate}
            content={feedback.content}
        />
        ))}
      </div>

      {itemsPerPage <= listItem.length && (
        <Pagination
          totalItems={listItem.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handleChangePage}
        />
      )}
    </div>
  );
};

export default Feedback;
