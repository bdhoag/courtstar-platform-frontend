import React, { useState } from 'react';
import centre from '../assets/images/demo-centre.png';
// import star from '../assets/images/star.svg';
import LockOpen from '../assets/images/lock-open.svg';
import LockClose from '../assets/images/lock-close.svg';
import AddCentre from './AddCentre';
import Pagination from "../components/Pagination";
import Rating from '../components/Rating';
function CentreInfo() {
  //HANDLE  POPUP
  const [addCentrePopup, setAddCentrePopup] = useState(false);
  const handleAddCentrePopup = () => {
    setAddCentrePopup(true);
  }
  const handleAddCentrePopupClose = () => {
    setAddCentrePopup(false)
  }


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
    <div className='w-[70rem] pt-12'>
      <AddCentre
        isOpen={addCentrePopup}
        setIsOpen={handleAddCentrePopupClose}
      />
      <div className="">
        <div className="flex justify-between">
          <div className="text-3xl font-bold">
            Centre Information
          </div>
          <button className="flex gap-2 px-3 py-2 bg-primary-green w-fit rounded-md text-white hover:bg-teal-900 ease-in-out duration-300 cursor-pointer"
            onClick={handleAddCentrePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
              <path d="M5 12h14" /><path d="M12 5v14" />
            </svg>
            <div className="font-semibold">
              Add Centre
            </div>
          </button>
        </div>
      </div>

      <div className="bg-white px-9 py-7 rounded-xl my-4">
        <div className="flex gap-11">
          <div className="w-1/2">
            <div>
              <img src={centre}
                alt="demo centre"
                className='w-full'
              />
            </div>
            <div className='flex gap-2 mt-2 py-1.5 px-2.5 border rounded-md bg-white overflow-hidden'>
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />

            </div>
          </div>
          <div className='flex justify-center flex-col gap-3 bg-white w-1/2'>
            <div className='text-xl font-semibold'>
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <Rating
              ratingWrapper='flex gap-1'
              value={5}
              editable={false}
            />
            <div>
              <span className='font-semibold'>Address: </span>
              Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
            </div>
            <div className='flex gap-3'>
              <div>
                <span className='font-semibold'>Open time: </span>
                10h-22h
              </div>
              <div>
                <span className='font-semibold'>Number of courts: </span>
                8
              </div>
            </div>
            <div className="flex gap-3">
              <div className="">
                <span className='font-semibold'>Status: </span>
                <span className='font-semibold text-primary-green'>Active</span>
              </div>
              <div>
                <span className='font-semibold'>Price: </span>
                <span className='font-semibold text-rose-600'>100.000₫/h</span>
              </div>
            </div>

            <div className="font-semibold flex gap-6">
              <button className="flex justify-center items-center gap-2.5 text-white bg-primary-green w-1/2 py-2 rounded-md hover:bg-teal-900 ease-in-out duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                <div className="">
                  Edit
                </div>
              </button>
              <button className="flex justify-center items-center gap-2.5 text-primary-green border-2 border-primary-green w-1/2 py-2 rounded-md hover:text-red-600 hover:border-red-600 ease-in-out duration-100 cursor-pointer group">
                <img className='group-hover:hidden stroke-primary-green' src={LockOpen} alt="lock-open" />
                <img className='group-hover:block hidden stroke-primary-green' src={LockClose} alt="lock-close" />
                <div className="group-hover:hidden">
                  Activated
                </div>
                <div className="hidden group-hover:block">
                  Close
                </div>
              </button>
              <button className="flex justify-center items-center gap-2.5 text-red-600 border-2 border-red-600 w-1/2 py-2 rounded-md hover:bg-red-600 hover:text-white ease-in-out duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                <div className="">
                  Delete
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-9">
          <Pagination title='FEEDBACKS' listItem={apiFeedbacks} itemsPerPage={10} />
        </div>
      </div>
    </div >
  )
}

export default CentreInfo;
