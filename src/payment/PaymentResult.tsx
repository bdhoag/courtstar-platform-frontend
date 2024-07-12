import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import check from '../assets/images/circle-check.svg';
import moment from 'moment';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface BookingDetails {
  date: string;
  court: {
    courtNo: number;
  };
  slot: {
    slotNo: number;
    startTime: string;
    endTime: string;
    status: boolean
  };
  checkedIn: boolean
}

interface BookingSchedule {
  account?: {
    email: string
  };
  guest?: { 
    email: string 
  };
  centreName: string;
  centreAddress: string;
  totalPrice: number;
  bookingDetails: BookingDetails[];
  success: boolean;
}

const PaymentResult: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const [bookingSchedule, setBookingSchedule] = useState<BookingSchedule | null>(null);
  const query = useQuery();
  const status = query.get('status');
  const appTransId = query.get('apptransid');

  useEffect(() => {
    const load = async () => {
      await axiosInstance.post(`/courtstar/payment/order-info`, { appTransId })
        .then(bookingResponse => {
          setBookingSchedule(bookingResponse.data);
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (status === '1') {
      load();
    } else {
      setLoading(false);
    }

    setResult(status);
  }, [status, appTransId]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-350px)]">
      {loading ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          <SpinnerLoading height="80" width="80" color="#2B5A50" />
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 m-10">
          {result === '1' ? (
            <div className="text-center text-green-500 text-xl font-bold flex justify-center">
              <img src={check} className="pr-3" alt="check" />
              Payment successfully!
            </div>
          ) : (
            <div className='divide-y divide-slate-700'>
              <div className="text-center text-red-500 text-3xl font-semibold mb-4">
                Payment fail!
              </div>
              <div className="text-gray-500 text-md text-center mb-4 pt-4">
                Your payment was not successfully proceed.<br />
                Please contact our customer support.
              </div>
              <div>
                <h2 className="text-lg font-bold mt-4">Why did it fail?</h2>
                <ol>
                  <li>Payment is overdue.</li>
                  <li>Cancel payment.</li>
                  <li>Invalid card's information.</li>
                </ol>
              </div>
            </div>
          )}
          {bookingSchedule && (
            <>
              <div className="mt-6">
                <div className="text-gray-500 text-sm text-center my-4">
                  We just sent the booking schedule to your email
                  <br />
                  <span className="text-black font-bold">
                    {bookingSchedule.account ? bookingSchedule.account.email : bookingSchedule.guest?.email}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Booking Schedule</h2>
                <div className="mb-4 flex flex-col text-lg">
                  <p>
                    <strong>Centre Name:</strong> {bookingSchedule.centreName}
                  </p>
                  <p>
                    <strong>Centre Address:</strong> {bookingSchedule.centreAddress}
                  </p>
                  <p>
                    <strong>Total Price:</strong> {bookingSchedule.totalPrice.toLocaleString('de-DE')}
                    <span className="text-sm font-semibold text-gray-500"> VND</span>
                  </p>
                </div>
                {bookingSchedule.bookingDetails.map((detail, index) => (
                  <div key={index} className="mb-4 grid grid-cols-2 text-lg">
                    <p>
                      <strong>Date:</strong> {detail.date}
                    </p>
                    <p>
                      <strong>Court No:</strong> {detail.court.courtNo}
                    </p>
                    <p>
                      <strong>Status:</strong> {detail.checkedIn ? 'Checked in' : 'Not yet'}
                    </p>
                    <p>
                      <strong>Slot No:</strong> {detail.slot.slotNo}
                    </p>
                    <p>
                      <strong>Time:</strong> {moment(detail.slot.startTime, "hh:mm:ss").format("H:mm")} - {moment(detail.slot.endTime, "hh:mm:ss").format("H:mm")}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentResult;
