import React, { useState } from 'react';
import centre from '../assets/images/demo-centre.png';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/nostar.svg';
import mappin from '../assets/images/map-pin.svg';
import mail from '../assets/images/mail.svg';
import arrow from '../assets/images/arrow.svg';
import banner from '../assets/images/banner.png';
import InputText from '../components/InputText';
import Dropdown from '../components/Dropdown';
import CustPayment from '../payment/CustPayment';

const CentreBooking = () => {
  //HANDLE  POPUP
  const [custPaymentPopup, setCustPaymentPopup] = useState(false);
  const handleCustPaymentPopup = () => {
    setCustPaymentPopup(true);
  }
  const handleCustPaymentPopupClose = () => {
    setCustPaymentPopup(false)
  }
  // State to keep track of the selected value in the booking type radio buttons
  const [selectedValue, setSelectedValue] = useState(0);

  // State to keep track of the currently active image in the image carousel
  const [activeImg, setActiveImg] = useState(0);

  // Function to handle changes in the booking type radio buttons
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // List of images to be displayed in the image carousel
  const imagesDemoList = [
    { id: 1, url: centre },
    { id: 2, url: centre },
    { id: 3, url: banner },
    { id: 4, url: centre },
    { id: 5, url: centre },
    { id: 6, url: centre }
  ];

  // Get the currently active image to be displayed in the main image section
  const imgDisplay = imagesDemoList[activeImg];

  // Function to handle clicking the "previous" button in the image carousel
  const changeActiveMinus = () => {
    setActiveImg((activeImg - 1 + imagesDemoList.length) % imagesDemoList.length);
  };

  // Function to handle clicking the "next" button in the image carousel
  const changeActivePlus = () => {
    setActiveImg((activeImg + 1) % imagesDemoList.length);
  };

  // Function to handle clicking on a thumbnail image to make it the active image
  const clickImgActive = (index) => {
    setActiveImg(index);
  };

  // Render the list of thumbnail images
  const renderListImg = imagesDemoList.map((image, index) => (
    <img
      src={image.url}
      onClick={() => clickImgActive(index)}
      key={index}
      alt="demo centre"
      className={activeImg === index ? 'w-28 scale-90 transition-all ease-in-out duration-200 rounded-lg object-cover' : 'w-28 transition-all ease-in-out duration-200 rounded-lg object-cover cursor-pointer'}
    />
  ));
  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="">
              <div className='text-3xl font-semibold'>
                Sân cầu lông Đại học FPT Hồ Chí Minh
              </div>
              <div className='flex gap-2 my-3'>
                <div className='flex gap-1'>
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={nostar} alt="No Star" className='cursor-pointer w-5' />
                  <img src={nostar} alt="No Star" className='cursor-pointer w-5' />
                </div>
                <div className='text-sm'>
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
            <div className='basis-3/5 overflow-x-hidden group'>
              <div className='relative '>
                <img src={imgDisplay.url}
                  alt="demo centre"
                  className='w-[50rem] h-[25rem] rounded-lg object-cover'
                />
                <button onClick={changeActiveMinus} className="absolute group-hover:flex top-0 left-0 hidden h-full opacity-30 bg-slate-100 w-1/12 transition-all ease-in-out duration-300">
                  <img src={arrow} alt="arrow" className='my-auto mx-auto' />
                </button>
                <button onClick={changeActivePlus} className="absolute group-hover:flex top-0 right-0 hidden h-full opacity-30 bg-slate-100 w-1/12 transition-all ease-in-out duration-1000">
                  <img src={arrow} alt="arrow" className='rotate-180 my-auto mx-auto' />
                </button>
              </div>
              <div className='flex w-fit h-20 justify-center gap-2 mt-2 py-1.5 px-2.5 border rounded-md bg-white mx-auto'>
                {renderListImg}
              </div>
            </div>
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
                    Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
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
                    10h-22h
                  </div>
                  <div className='w-1/2'>
                    <span className='font-semibold'>Number of courts: </span>
                    8
                  </div>
                </div>
                <div>
                  <span className='font-semibold'>Price: </span>
                  <span className='font-semibold text-rose-600'>100.000₫/h</span>
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
            <div className='bg-white rounded-b-lg p-8'>
              <div className='font-medium mb-10 max-w-2xl w-full relative left-1/3 flex flex-col gap-3'>
                <div className='relative w-4/5'>
                  <InputText
                    placeholder="Enter your name"
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-24'>
                    Full name*:
                  </div>
                </div>
                <div className='relative w-4/5'>
                  <InputText
                    placeholder="Enter your phone number"
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[135px]'>
                    Phone number*:
                  </div>
                </div>
                <div className='relative w-4/5'>
                  <InputText
                    placeholder="Enter your email"
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[64px]'>
                    Email*:
                  </div>
                </div>
                <div className='relative w-4/5 flex justify-center gap-40 my-1'>
                  <div className='text-gray-800 flex items-center gap-3'>
                    <input type="radio"
                      name="bookingType"
                      id="fixed"
                      onChange={() => handleChange(2)}
                      className='cursor-pointer'
                    />
                    <label htmlFor="fixed"
                      className='cursor-pointer'
                    >
                      Monthly booking
                    </label>
                  </div>
                  <div className='text-gray-800 flex items-center gap-3'>
                    <input type="radio"
                      name="bookingType"
                      id="once"
                      onChange={() => handleChange(1)}
                      className='cursor-pointer'
                    />
                    <label htmlFor="once"
                      className='cursor-pointer'
                    >
                      Day booking
                    </label>
                  </div>
                  <div className='text-gray-800 absolute top-0 -left-[121px]'>
                    Choose type*:
                  </div>
                </div>
                {(selectedValue === 1) && (<div className='pl-2 relative w-4/5'>
                  <input type="date"
                    name="date"
                    id="date"
                    className='border border-gray-300 rounded-lg py-2 px-6 outline-gray-400'
                  />
                  <button className='ml-4 py-1 px-2 rounded-md bg-gray-800 text-white text-sm hover:bg-gray-900 transition-all ease-in-out duration-300'>
                    See available time slots
                  </button>
                  <div className='text-gray-800 absolute top-2.5 -left-[60px]'>
                    Date*:
                  </div>
                </div>)}
                {(selectedValue === 2) && (<div className='pl-2 relative w-2/5'>
                  <Dropdown
                    placeholder="Choose day"
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[115px]'>
                    Choose day*:
                  </div>
                </div>)}
                <div className='pl-2 relative w-2/5'>
                  <Dropdown
                    placeholder="Choose court"
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[117px]'>
                    Select court*:
                  </div>
                </div>
                <div className='pl-2 relative w-1/2'>
                  <div className='flex gap-4 items-center w-full'>
                    <Dropdown
                      placeholder="_hour"
                    />
                    :
                    <Dropdown
                      placeholder="_minute"
                    />
                  </div>
                  <div className='text-gray-800 absolute top-2.5 -left-[62px]'>
                    Time*:
                  </div>
                  <button className='absolute -right-24 top-10 ml-4 py-1 px-3 rounded-md bg-gray-800 text-white text-sm hover:bg-gray-900 transition-all ease-in-out duration-300'>
                    Check
                  </button>
                </div>
                <div className='pl-2 relative w-1/2'>
                  <div className='flex gap-4 items-center w-full'>
                    <Dropdown
                      placeholder="_hour"
                    />
                    :
                    <Dropdown
                      placeholder="_minute"
                    />
                  </div>
                  <div className='text-gray-800 absolute top-2.5 -left-[31px]'>
                    to:
                  </div>
                </div>
                <div className='relative w-4/5'>
                  <InputText

                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[54px]'>
                    Price:
                  </div>
                </div>
                <div className='relative w-4/5'>
                  <InputText

                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[52px]'>
                    Note:
                  </div>
                </div>
              </div>
              <button className='w-full bg-primary-green py-2 rounded-md text-white font-medium hover:bg-teal-900 transition-all duration-300 ease-in-out'
              onClick={handleCustPaymentPopup}>
                Book Now
              </button>
            </div>
          </div>

        </div>
      </div>
      <CustPayment
        isOpen={custPaymentPopup}
        setIsOpen={handleCustPaymentPopupClose}
      />
    </div>
  );
}

export default CentreBooking;
