// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import check from '../assets/images/circle-check.svg';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PaymentResult = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(0);
  const [bookingForm, setBookingForm] = useState();
  const [bookingSchedule, setBookingSchedule] = useState();
  const query = useQuery();
  const status = query.get('status');

  useEffect(() => {
    if (status === '1') {
      setBookingForm(JSON.parse(localStorage.getItem('bookingForm')));
    } else {
      localStorage.removeItem("bookingForm");
      setLoading(false);
    }
    setResult(status);
  }, [status])

  const [centre, setCentre] = useState();

  useEffect(() => {
    const load = async () => {
      let centreId = bookingForm.centreId;
      await axiosInstance.post(`/courtstar/booking`, bookingForm)
        .then(bookingResponse => {
          setBookingSchedule(bookingResponse.data.data);
          localStorage.removeItem("bookingForm");
          axiosInstance.get(`/courtstar/centre/getCentre/${centreId}`)
            .then(centreResponse => {
              setCentre(centreResponse.data.data);
            })
            .catch(error => {
              console.log(error.message);
            })
            .finally(() => {
            });
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (bookingForm) {
      load();
    };
  }, [bookingForm])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {loading ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          <SpinnerLoading height="80" width="80" color="#2B5A50" />
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
          {result === '1' ? (
            <div className="text-center text-green-500 text-xl font-bold flex justify-center">
              <img src={check} className='pr-3'></img>
              Payment success!
            </div>
          ) : (
            <div className="text-center text-red-500 text-xl font-semibold">
              Payment fail!
            </div>
          )}
          {bookingSchedule && centre && (
            <div className="mt-6">
              <div className='text-gray-500 text-sm text-center my-4'> We just sent the booking schedule to your email <br />
                <span className='text-black font-bold'> {bookingSchedule.account ? bookingSchedule.account.email : bookingSchedule.guest.email}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">Booking Schedule</h2>
              <div className="mb-4 flex flex-col text-lg">
                <p> <strong>Centre Name:</strong> {centre.name}</p>
                <p> <strong>Centre Address:</strong> {centre.address}</p>
                <p> <strong>Date:</strong> {bookingSchedule.date}</p>
                <p> <strong>Total Price:</strong> ${bookingSchedule.totalPrice}</p>
                <p> <strong>Status:</strong> {bookingSchedule.status ? 'Checked in' : 'Not yet'}</p>
              </div>
              <div className='flex'>
                <div className="mb-4 basis-1/2 grid justify-items-center">
                  <p className="text-xl font-semibold">Slot:</p>
                  <ul className="list-disc list-inside">
                    <li className="text-lg"><strong>Slot No:</strong> {bookingSchedule.slot.slotNo}</li>
                    <li className="text-lg"><strong>Start Time:</strong> {bookingSchedule.slot.startTime}</li>
                    <li className="text-lg"><strong>End Time:</strong> {bookingSchedule.slot.endTime}</li>
                  </ul>
                </div>
                <div className="mb-4 basis-1/2 grid justify-items-center">
                  <p className="text-xl font-semibold">Court:</p>
                  <ul className="list-disc list-inside">
                    <li className="text-lg"><strong>Court No:</strong> {bookingSchedule.court.courtNo}</li>
                    <li className="text-lg"><strong>Status:</strong> {bookingSchedule.court.status ? 'Available' : 'Not Available'}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentResult;
