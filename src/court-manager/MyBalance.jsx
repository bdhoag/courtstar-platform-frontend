import React, { useEffect, useState } from 'react'
import axiosInstance from '../config/axiosConfig';
import Counter from '../components/Counter';
import AddCentre from './AddCentre';

export default function MyBalance(props) {

  const balanceDetail = props.balanceDetail;

  //add centre handle
  const [addCentrePopup, setAddCentrePopup] = useState(false);
  const handleAddCentrePopup = () => {
    setAddCentrePopup(true);
  }
  const handleAddCentrePopupClose = () => {
    setAddCentrePopup(false)
  }

  return (
    <div className='self-center'>
      <AddCentre
        isOpen={addCentrePopup}
        setIsOpen={handleAddCentrePopupClose}
      />
      <div className="text-xl font-semibold">
        {balanceDetail?.account?.firstName} {balanceDetail?.account?.lastName}
      </div>
      <div className="flex gap-3">
        <div className="px-4 py-3 bg-white text-3xl font-semibold rounded-md shadow flex gap-1">
          <Counter
            endNumber={balanceDetail?.currentBalance}
            duration={1000}
            prefix=""
          />
          VND
        </div>
        <button
          className="flex items-center justify-center font-semibold gap-2 py-1 px-3 w-fit text-3xl bg-primary-green rounded-md text-white
        hover:bg-teal-900 hover:text-white ease-in-out duration-300 cursor-pointer"
          onClick={handleAddCentrePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18" height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add centre
        </button>
      </div>
    </div>
  )
}
