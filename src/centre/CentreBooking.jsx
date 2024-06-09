import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mappin from '../assets/images/map-pin.svg';
import mail from '../assets/images/mail.svg';
import Slider from '../components/Slider'
import Pagination from '../components/Pagination';
import Rating from '../components/Rating';
import Calendar from '../components/Calendar';
import BookingForm from './BookingForm';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import moment from 'moment';

const CentreBooking = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [centre, setCentre] = useState({});

  const load = useCallback(async () => {
    setLoading(true);
    await axiosInstance.get(`/courtstar/centre/getCentre/${id}`)
      .then(res => {
        setCentre(res.data.data);
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
  }, [load])

  //HANDLE BOOKING FORM POPUP
  const [bookingFormPopup, setBookingFormPopup] = useState(false);
  const handleBookingFormPopup = () => {
    setBookingFormPopup(true);
  }
  const handleBookingFormPopupClose = () => {
    setBookingFormPopup(false)
  }

  // List of images to be displayed in the image carousel
  // const imagesDemoList = [
  //   { id: 1, url: centre },
  //   { id: 2, url: centre },
  //   { id: 3, url: banner },
  //   { id: 4, url: centre },
  //   { id: 5, url: centre },
  //   { id: 6, url: centre }
  // ];


  //List of feedbacks to display in Feedbacks modal
  const apiFeedbacks = [
    {
      id: 1,
      name: 'Huỳnh Đoàn Thanh Phong',
      rating: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 2,
      name: 'Nguyen Thai Thanh',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 3,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 4,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 5,
      name: 'sang ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 6,
      name: 'phat ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 7,
      name: 'alo ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 8,
      name: 'hay di ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 9,
      name: 'dung ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 10,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 11,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 12,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 13,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 14,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 15,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 16,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 17,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 18,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 19,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 20,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 21,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 22,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 23,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 24,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 25,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 26,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 27,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 28,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 29,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 30,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 31,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    }
  ]

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
                    value={3}
                    editable={false}
                  />
                  <div className='text-base'>
                    (10 feedbacks)
                  </div>
                </div>
              </div>
              <a href="#book" className="h-fit bg-primary-green py-2 rounded-md text-white font-semibold px-3 hover:bg-teal-900 transition-all duration-300 ease-in-out flex justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus"><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /><path d="M3 10h18" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                Book now
              </a>
            </div>
            <div className='w-full flex items-center gap-8'>
              {centre.images && <Slider imagesDemoList={centre.images} />}
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
                    <button className='w-full bg-primary-green py-2 rounded-md text-white font-medium hover:bg-teal-900 transition-all duration-300 ease-in-out'>
                      See on map
                    </button>
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
                      {centre.numberOfCourt}
                    </div>
                  </div>
                  <div>
                    <span className='font-semibold'>Price: </span>
                    <span className='font-semibold text-rose-600'>{centre.pricePerHour}₫/h</span>
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
                  <Calendar handleButton={handleBookingFormPopup} typeOfCalendar='booking' />
                </div>
              </div>
            </div>



            <div className='flex-1 bg-white rounded-lg shadow-gray-400 shadow-md'>
              <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
                <span className='text-3xl font-medium'>Feedbacks</span>
              </div>
              <div className="mt-5">
                <Pagination title='FEEDBACKS' listItem={apiFeedbacks} itemsPerPage={5} content='px-9 pb-5' />
              </div>
            </div>

          </div>
        </div>)

      }
      <BookingForm
        isOpen={bookingFormPopup}
        setIsOpen={handleBookingFormPopupClose}
      />
    </div>
  );
}

export default CentreBooking;
