import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';

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

  useEffect(() => {
    const load = async() => {
      await axiosInstance.post(`/courtstar/booking`, bookingForm)
        .then(res => {
          setBookingSchedule(res.data.data);
          localStorage.removeItem("bookingForm");
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(()=>{
          setLoading(false);
        });
    }
    if(bookingForm) load();
  }, [bookingForm])


  return (
    <div>

      {
        loading
        ?
        <div className='w-full h-[500px] flex justify-center items-center'>
          <SpinnerLoading
            height='80'
            width='80'
            color='#2B5A50'
          />
        </div>
        :
        <>
          {
            result === '1'
            ?
            <div>Payment success!</div>
            :
            <div>Payment fail!</div>
          }
          {
            bookingSchedule &&
            <div>
              <h2>Booking Schedule</h2>
              <p>ID: {bookingSchedule.id}</p>
              <p>Date: {bookingSchedule.date}</p>
              <p>Total Price: {bookingSchedule.totalPrice}</p>
              <p>Status: {bookingSchedule.status ? 'Checked in' : 'Not yet'}</p>
              <p>Slot:</p>
              <ul>
                <li>ID: {bookingSchedule.slot.id}</li>
                <li>Slot No: {bookingSchedule.slot.slotNo}</li>
                <li>Start Time: {bookingSchedule.slot.startTime}</li>
                <li>End Time: {bookingSchedule.slot.endTime}</li>
              </ul>
              <p>Court:</p>
              <ul>
                <li>ID: {bookingSchedule.court.id}</li>
                <li>Court No: {bookingSchedule.court.courtNo}</li>
                <li>Status: {bookingSchedule.court.status ? 'Available' : 'Not Available'}</li>
              </ul>
            </div>
          }
        </>
      }
    </div>
  );
};

export default PaymentResult;
