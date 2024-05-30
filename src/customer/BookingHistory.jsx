import React, { useState } from 'react';
// import star from '../assets/images/star.svg';
// import nostar from '../assets/images/nostar.svg';
import centre from '../assets/images/demo-centre.png'
import FeedbackForm from './FeedbackForm'
import Rating from '../components/Rating';

const BookingHistory = () => {

  //HANDLE FEEDBACK POPUP
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const handleFeedbackPopup = () => {
    setFeedbackPopup(true);
  }
  const handleFeedbackPopupClose = () => {
    setFeedbackPopup(false)
  }

  const centreList = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
      <FeedbackForm
        isOpen={feedbackPopup}
        setIsOpen={handleFeedbackPopupClose}
      />
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-10 px-12 w-full flex flex-col gap-4 items-center justify-between">
          <div className='font-bold text-3xl uppercase text-start w-full pb-5 pl-2'>
            Booking History
          </div>
          <div className='flex gap-5 w-full bg-white rounded-2xl py-10'>
            <div className='flex-1 flex flex-col gap-5 items-center'>
              <div className='bg-white rounded-2xl shadow-lg border py-5 px-7 flex gap-7 max-w-5xl'>
                <img src={centre}
                  alt="demo centre"
                  className='w-2/5'
                />
                <div className='flex flex-col gap-3'>
                  <div className='font-semibold text-xl'>
                    Sân cầu lông Đại học FPT Hồ Chí Minh
                  </div>
                  <div>
                    <span className='font-semibold'>Address: </span>
                    Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                  </div>
                  <div className='flex gap-3'>
                    <div>
                      <span className='font-semibold'>Time: </span>
                      10h-12h
                    </div>
                    <div>
                      <span className='font-semibold'>Court number: </span>
                      2
                    </div>
                  </div>
                  <div>
                    <span className='font-semibold'>Total price: </span>
                    <span className='font-semibold text-rose-600'>200.000₫/h</span>
                  </div>
                  <div className='text-sm flex justify-center gap-20'>
                    <button className='block text-center py-1 w-full border bg-primary-green text-white rounded-md font-semibold hover:bg-teal-900 transition-all ease-in-out duration-300'
                      onClick={handleFeedbackPopup}>
                      Feedback
                    </button>
                  </div>
                </div>
              </div>
              {centreList.map((_, index) => (
                <div key={index}
                  className='bg-white rounded-2xl shadow-lg border py-5 px-7 flex gap-7 max-w-5xl'>
                  <img src={centre}
                    alt="demo centre"
                    className='w-2/5'
                  />
                  <div className='flex flex-col gap-3'>
                    <div className='font-semibold text-xl'>
                      Sân cầu lông Đại học FPT Hồ Chí Minh
                    </div>
                    <div>
                      <span className='font-semibold'>Address: </span>
                      Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                    </div>
                    <div className='flex gap-3'>
                      <div>
                        <span className='font-semibold'>Time: </span>
                        10h-12h
                      </div>
                      <div>
                        <span className='font-semibold'>Court number: </span>
                        2
                      </div>
                    </div>
                    <div>
                      <span className='font-semibold'>Total price: </span>
                      <span className='font-semibold text-rose-600'>200.000₫/h</span>
                    </div>
                    <div className='text-sm flex justify-center gap-20'>
                      <Rating
                        ratingWrapper='flex gap-1'
                        value={4}
                        editable={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingHistory;
