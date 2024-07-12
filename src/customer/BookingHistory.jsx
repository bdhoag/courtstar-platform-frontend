import React, { useState, useEffect } from 'react';
import axiosInstance from '../config/axiosConfig';
import FeedbackForm from './FeedbackForm';
import Rating from '../components/Rating';
import moment from 'moment';
import Pagination from '../components/pagination/pagination';
import SpinnerLoading from '../components/SpinnerLoading';

const BookingHistory = () => {
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const itemsPerPage = 4;

  const fetchBookings = async () => {
    try {
      const response = await axiosInstance.get('/courtstar/booking');
      if (response.data.code === 1000) {
        const sortedBookings = response.data.data.sort((a, b) => {
          if (a.rate === 0 && b.rate !== 0) return -1;
          if (a.rate !== 0 && b.rate === 0) return 1;
          return new Date(b.bookingDetails[0].date) - new Date(a.bookingDetails[0].date);
        });
        setBookings(sortedBookings);
      } else {
        setError('Failed to fetch bookings');
      }
    } catch (error) {
      setError('Error fetching booking data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleFeedbackPopup = (booking) => {
    setSelectedBooking(booking);
    setFeedbackPopup(true);
  };

  const handleFeedbackPopupClose = () => {
    setFeedbackPopup(false);
    setSelectedBooking(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  return (
    <div className="font-Inter text-base overflow-x-hidden text-gray-800">
      <FeedbackForm
        isOpen={feedbackPopup}
        setIsOpen={handleFeedbackPopupClose}
        booking={selectedBooking}
        onFeedbackSubmitted={fetchBookings}
      />
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div
          id="top"
          className="max-w-screen-1440 1440:mx-auto mx-4 py-10 px-12 w-full flex flex-col gap-4 items-center justify-between"
        >
          <div className="font-bold text-3xl uppercase text-start w-full pb-5 pl-2">
            Booking History
          </div>
          <div className="flex gap-5 w-full rounded-2xl py-10 min-h-[50px]">
            {loading ? (
              <SpinnerLoading type="page" height="80" width="80" color="#2B5A50" />
            ) : error ? (
              <div className="text-red-500 text-xl">{error}</div>
            ) : (
              <div className="flex-1 flex flex-col gap-5 items-center">
                {currentBookings.length ? (
                  currentBookings.map((booking) => (
                    <BookingCard
                      key={booking.id}
                      booking={booking}
                      handleFeedbackPopup={handleFeedbackPopup}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-56 text-3xl text-primary">
                    <NoBookingsIcon />
                    You don't have any bookings yet!
                  </div>
                )}
              </div>
            )}
          </div>
          {bookings.length > itemsPerPage && (
            <Pagination
              totalItems={bookings.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const BookingCard = ({ booking, handleFeedbackPopup }) => (
  <div className="bg-white rounded-2xl shadow-2xl border py-5 px-7 flex gap-7 max-w-5xl w-full">
    <img
      src={booking.centreImg || centrePlaceholder}
      alt={booking.centreName}
      className="min-w-80 max-w-80 h-56 rounded-lg object-cover object-center"
    />
    <div className="flex flex-col gap-3 w-full">
      <div className="font-semibold text-xl">{booking.centreName}</div>
      <div>
        <span className="font-semibold">Address: </span>
        {booking.centreAddress}
      </div>
      <div>
        <span className="font-semibold">Court Number: </span>
      </div>
      <div>
        <span className="font-semibold">Total price: </span>
        <span className="font-semibold text-rose-600">
          {booking.totalPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
        </span>
      </div>
      {booking.bookingDetails.map((detail) => (
        <div key={detail.id} className="border-t pt-3">
          <div>
            <span className="font-semibold">Date: </span>
            {moment(detail.date).format('DD/MM/YYYY')}
          </div>
          <div>
            <span className="font-semibold">Court number: </span>
            {detail.court.courtNo}
          </div>
          <div>
            <span className='font-semibold'>Slot: {detail.slot.slotNo} / </span> 
            <span className="font-semibold">Time: </span>
            {moment(detail.slot.startTime, 'HH:mm:ss').format('HH:mm')} -{' '}
            {moment(detail.slot.endTime, 'HH:mm:ss').format('HH:mm')}
          </div>
        </div>
      ))}
      <div className="flex justify-center items-end h-full">
        {booking.rate === 0 ? (
          <button
            className="block text-center py-1 w-full border bg-primary-green text-white rounded-md font-semibold hover:bg-teal-900 transition-all ease-in-out duration-300" 
            onClick={() => handleFeedbackPopup(booking)}
          >
            Feedback
          </button>
        ) : (
          <Rating ratingWrapper="flex gap-1" value={booking.rate} editable={false} />
        )}
      </div>
    </div>
  </div>
);

const NoBookingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-ticket-x"
  >
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="m9.5 14.5 5-5" />
    <path d="m9.5 9.5 5 5" />
  </svg>
);

export default BookingHistory;
