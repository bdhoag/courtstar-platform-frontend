import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mappin from '../assets/images/map-pin.svg';
import mail from '../assets/images/mail.svg';
import Rating from '../components/Rating';
import Calendar from '../components/calendar';
import BookingForm from './BookingForm';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import moment from 'moment';
import Feedback from '../components/feedback';
import Button from '../components/button';
import XCarousel from '../components/carousel';

const CentreBooking = () => {

  const { id } = useParams();
  const controller = new AbortController();
  const { signal } = controller;
  const [loading, setLoading] = useState(true);
  const [centre, setCentre] = useState({});
  const [formCalendar, setFormCalendar] = useState({});
  const [feedbackList, setFeedbackList] = useState([]);

  const load = useCallback(async () => {
    await axiosInstance.get(`/courtstar/centre/getCentre/${id}`, { signal })
      .then(res => {
        setCentre(res.data.data);
        axiosInstance.get(`/courtstar/feedback/${id}`)
          .then(res => {
            setFeedbackList(res.data.data);
            console.log(res.data.data);
          })
          .catch(error => {
            console.log(error.message);
          })
          .finally(() => {
            setLoading(false);
          })
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
        () => {
          setLoading(false);
        }
      );
  }, [id]);

  useEffect(() => {
    load();
    return () => {
      controller.abort();
    }
  }, [load])

  //HANDLE BOOKING FORM POPUP
  const [bookingFormPopup, setBookingFormPopup] = useState(false);
  const handleBookingFormPopup = () => {
    setBookingFormPopup(true);
  }
  const handleBookingFormPopupClose = () => {
    setBookingFormPopup(false)
  }

  const submit = (formCalendar) => {
    handleBookingFormPopup();
    setFormCalendar(formCalendar);
  }

  const handleBookClick = () => {
    const bookElement = document.getElementById('book');
    if (bookElement) {
      const offset = 80;
      const elementPosition = bookElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // //List of feedbacks to display in Feedbacks modal
  // const apiFeedbacks = [
  //   {
  //     id: 1,
  //     fullName: 'Anh Thanh khó tính',
  //     rate: 1,
  //     content: 'Sân cầu lông mà không có cháo lòng, -4 sao',
  //     createDate: new Date().toISOString()
  //   },
  //   {
  //     id: 2,
  //     fullName: 'Hoàng bú bóng',
  //     rate: 5,
  //     content: 'Chị staff mlem quá sốp ơi!',
  //     createDate: moment().subtract(1, 'minutes').toISOString()
  //   },
  //   {
  //     id: 3,
  //     fullName: 'Trần Thanh Hà',
  //     rate: 3,
  //     content: 'Dịch vụ tạm ổn.',
  //     createDate: moment().subtract(3, 'hours').toISOString()
  //   },
  //   {
  //     id: 4,
  //     fullName: 'Lê Hoàng Nam',
  //     rate: 4,
  //     content: 'Sân chơi rất rộng rãi và thoáng mát.',
  //     createDate: moment().subtract(4, 'days').toISOString()
  //   },
  //   {
  //     id: 5,
  //     fullName: 'Phạm Minh Quang',
  //     rate: 5,
  //     content: 'Rất hài lòng với dịch vụ.',
  //     createDate: moment().subtract(5, 'seconds').toISOString()
  //   },
  //   {
  //     id: 6,
  //     fullName: 'Ngô Thanh Bình',
  //     rate: 2,
  //     content: 'Không gian hơi chật, cần cải thiện.',
  //     createDate: moment().subtract(1, 'minutes').toISOString()
  //   },
  //   {
  //     id: 7,
  //     fullName: 'Trần Thị Hồng',
  //     rate: 4,
  //     content: 'Chất lượng phục vụ tốt.',
  //     createDate: moment().subtract(2, 'minutes').toISOString()
  //   },
  //   {
  //     id: 8,
  //     fullName: 'Lê Văn Long',
  //     rate: 3,
  //     content: 'Giá cả hợp lý.',
  //     createDate: moment().subtract(3, 'minutes').toISOString()
  //   },
  //   {
  //     id: 9,
  //     fullName: 'Phạm Văn Nam',
  //     rate: 4,
  //     content: 'Sân chơi rất sạch sẽ.',
  //     createDate: moment().subtract(4, 'minutes').toISOString()
  //   },
  //   {
  //     id: 10,
  //     fullName: 'Nguyễn Văn Bình',
  //     rate: 5,
  //     content: 'Sân chơi đẹp và rộng.',
  //     createDate: moment().subtract(5, 'minutes').toISOString()
  //   },
  //   {
  //     id: 11,
  //     fullName: 'Đinh Thị Mai',
  //     rate: 2,
  //     content: 'Cần cải thiện chất lượng dịch vụ.',
  //     createDate: moment().subtract(1, 'hours').toISOString()
  //   },
  //   {
  //     id: 12,
  //     fullName: 'Nguyễn Văn Tùng',
  //     rate: 3,
  //     content: 'Dịch vụ tạm ổn.',
  //     createDate: moment().subtract(2, 'hours').toISOString()
  //   },
  //   {
  //     id: 13,
  //     fullName: 'Lê Thị Hoa',
  //     rate: 4,
  //     content: 'Không gian rộng rãi.',
  //     createDate: moment().subtract(3, 'hours').toISOString()
  //   },
  //   {
  //     id: 14,
  //     fullName: 'Phạm Văn Hùng',
  //     rate: 5,
  //     content: 'Rất hài lòng.',
  //     createDate: moment().subtract(4, 'hours').toISOString()
  //   },
  //   {
  //     id: 15,
  //     fullName: 'Ngô Văn Thanh',
  //     rate: 4,
  //     content: 'Sân chơi tốt.',
  //     createDate: moment().subtract(5, 'hours').toISOString()
  //   },
  //   {
  //     id: 16,
  //     fullName: 'Lê Thị Bích',
  //     rate: 3,
  //     content: 'Dịch vụ tạm ổn.',
  //     createDate: moment().subtract(1, 'days').toISOString()
  //   },
  //   {
  //     id: 17,
  //     fullName: 'Nguyễn Thị Lan',
  //     rate: 4,
  //     content: 'Không gian sạch sẽ.',
  //     createDate: moment().subtract(2, 'days').toISOString()
  //   },
  //   {
  //     id: 18,
  //     fullName: 'Phạm Văn Minh',
  //     rate: 5,
  //     content: 'Sân chơi rộng và đẹp.',
  //     createDate: moment().subtract(3, 'days').toISOString()
  //   },
  //   {
  //     id: 19,
  //     fullName: 'Trần Văn Thắng',
  //     rate: 3,
  //     content: 'Giá cả hợp lý.',
  //     createDate: moment().subtract(4, 'days').toISOString()
  //   },
  //   {
  //     id: 20,
  //     fullName: 'Lê Thị Mai',
  //     rate: 4,
  //     content: 'Chất lượng phục vụ tốt.',
  //     createDate: moment().subtract(5, 'days').toISOString()
  //   },
  //   {
  //     id: 21,
  //     fullName: 'Nguyễn Văn Bình',
  //     rate: 2,
  //     content: 'Không gian hơi chật.',
  //     createDate: moment().subtract(6, 'days').toISOString()
  //   },
  //   {
  //     id: 22,
  //     fullName: 'Đinh Văn Minh',
  //     rate: 3,
  //     content: 'Dịch vụ tạm ổn.',
  //     createDate: moment().subtract(7, 'days').toISOString()
  //   },
  //   {
  //     id: 23,
  //     fullName: 'Phạm Thị Hương',
  //     rate: 4,
  //     content: 'Sân chơi rất sạch sẽ.',
  //     createDate: moment().subtract(8, 'days').toISOString()
  //   },
  //   {
  //     id: 24,
  //     fullName: 'Nguyễn Thị Thanh',
  //     rate: 5,
  //     content: 'Rất hài lòng với dịch vụ.',
  //     createDate: moment().subtract(9, 'days').toISOString()
  //   },
  //   {
  //     id: 25,
  //     fullName: 'Lê Văn Nam',
  //     rate: 4,
  //     content: 'Sân chơi rộng rãi và thoáng mát.',
  //     createDate: moment().subtract(10, 'days').toISOString()
  //   },
  //   {
  //     id: 26,
  //     fullName: 'Trần Thị Bình',
  //     rate: 3,
  //     content: 'Giá cả hợp lý.',
  //     createDate: moment().subtract(11, 'days').toISOString()
  //   },
  //   {
  //     id: 27,
  //     fullName: 'Phạm Thị Hà',
  //     rate: 4,
  //     content: 'Chất lượng phục vụ tốt.',
  //     createDate: moment().subtract(12, 'days').toISOString()
  //   },
  //   {
  //     id: 28,
  //     fullName: 'Nguyễn Thị Hương',
  //     rate: 5,
  //     content: 'Sân chơi rất sạch sẽ.',
  //     createDate: moment().subtract(13, 'days').toISOString()
  //   },
  //   {
  //     id: 29,
  //     fullName: 'Đinh Thị Hoa',
  //     rate: 3,
  //     content: 'Dịch vụ tạm ổn.',
  //     createDate: moment().subtract(14, 'days').toISOString()
  //   },
  //   {
  //     id: 30,
  //     fullName: 'Lê Văn Hùng',
  //     rate: 4,
  //     content: 'Sân chơi rộng rãi và thoáng mát.',
  //     createDate: moment().subtract(15, 'days').toISOString()
  //   }
  // ];

  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>

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
          (<div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
            <div className="max-w-screen-1440 1440:mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="">
                  <div className='text-3xl font-semibold'>
                    {centre.name}
                  </div>
                  <div className='flex gap-2 my-3'>
                    <Rating
                      ratingWrapper='flex gap-1'
                      value={centre.rating}
                      editable={false}
                    />
                    <div className='text-base'>
                      (10 feedbacks)
                    </div>
                  </div>
                </div>
                <Button
                  label='Book now'
                  size='medium'
                  className='bg-primary-green hover:bg-teal-900 text-white'
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /><path d="M3 10h18" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                  }
                  onClick={handleBookClick}
                />
              </div>
              <div className='w-full flex items-center gap-8'>
                {centre.images && <XCarousel images={centre.images} />}
                <div className='flex-1 h-full flex flex-col justify-evenly gap-6'>

                  <div className="rounded-lg shadow-gray-400 shadow-md">
                    <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
                      <img src={mappin}
                        alt="map pin"
                        className='w-6 h-6'
                      />
                      <span className='text-3xl font-medium'>Address</span>
                    </div>
                    <div className='bg-white rounded-b-lg p-8'>
                      <div className='font-medium mb-10'>
                        {centre.address}
                      </div>
                      <Button
                        label='See on map'
                        size='medium'
                        fullWidth
                        className='bg-primary-green hover:bg-teal-900 text-white'
                      />
                    </div>
                  </div>
                  <div className="rounded-lg shadow-gray-400 shadow-md bg-white p-8">
                    <div className='flex gap-3'>
                      <div className='w-1/2'>
                        <span className='font-semibold'>Open time: </span>
                        {`${moment(centre.openTime, "HH:mm:ss").format("H")}h
                      - ${moment(centre.closeTime, "HH:mm:ss").format("H")}h`}
                      </div>
                      <div className='w-1/2'>
                        <span className='font-semibold'>Number of courts: </span>
                        {centre.numberOfCourts}
                      </div>
                    </div>
                    <div>
                      <span className='font-semibold'>Price: </span>
                      <span className='font-semibold text-rose-600'>{centre?.pricePerHour?.toLocaleString('de-DE')} VND/h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div id="book" className='flex-1 rounded-lg shadow-gray-400 shadow-md'>
                <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
                  <img src={mail}
                    alt="mail"
                    className='w-6 h-6'
                  />
                  <span className='text-3xl font-medium'>Booking</span>
                </div>
                <div className='bg-white rounded-b-lg p-8 pt-0'>
                  <div className="">
                    <Calendar
                      handleButton={submit}
                      typeOfCalendar='booking'
                      centre={centre}
                    />
                  </div>
                </div>
              </div>



              <div id="top" className='flex-1 bg-white rounded-lg shadow-gray-400 shadow-md'>
                <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
                  <span className='text-3xl font-medium'>Feedbacks</span>
                </div>
                <div className="">
                  <Feedback
                    listItem={feedbackList}
                    itemsPerPage={5}
                  />
                </div>
              </div>

            </div>
          </div>)

      }
      <BookingForm
        isOpen={bookingFormPopup}
        setIsOpen={handleBookingFormPopupClose}
        formCalendar={formCalendar}
        centre={centre}
      />
    </div>
  );
}

export default CentreBooking;
