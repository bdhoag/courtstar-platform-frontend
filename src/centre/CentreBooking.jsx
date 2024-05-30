import React, { useState } from 'react';
import centre from '../assets/images/demo-centre.png';
// import star from '../assets/images/star.svg';
// import nostar from '../assets/images/nostar.svg';
import mappin from '../assets/images/map-pin.svg';
import mail from '../assets/images/mail.svg';
import banner from '../assets/images/banner.png';
import InputText from '../components/InputText';
import Dropdown from '../components/Dropdown';
import CustPayment from '../payment/CustPayment';
import Slider from '../components/Slider'
import Pagination from '../components/Pagination';
import Rating from '../components/Rating';
const CentreBooking = () => {
  
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };

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
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="">
              <div className='text-3xl font-semibold'>
                Sân cầu lông Đại học FPT Hồ Chí Minh
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
            <Slider imagesDemoList={imagesDemoList} />
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
                    placeholder="Select role"
                    items={items}
                    onSelect={handleSelect}
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[115px]'>
                    Choose day*:
                  </div>
                </div>)}
                <div className='pl-2 relative w-2/5'>
                  <Dropdown
                    placeholder="Select role"
                    items={items}
                    onSelect={handleSelect}
                  />
                  <div className='text-gray-800 absolute top-2.5 -left-[117px]'>
                    Select court*:
                  </div>
                </div>
                <div className='pl-2 relative w-1/2'>
                  <div className='flex gap-4 items-center w-full'>
                    <Dropdown
                      placeholder="Select role"
                      items={items}
                      onSelect={handleSelect}
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
                      placeholder="Select role"
                      items={items}
                      onSelect={handleSelect}
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

          <div className='flex-1 bg-white rounded-lg shadow-gray-400 shadow-md'>
            <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
              <span className='text-3xl font-medium'>Feedbacks</span>
            </div>
            <div className="mt-5">
              <Pagination title='FEEDBACKS' listItem={apiFeedbacks} itemsPerPage={5} content='px-9 pb-5' />
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
