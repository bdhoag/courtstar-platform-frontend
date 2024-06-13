import React from 'react'
import Counter from '../components/Counter';

export default function MyBalance(props) {

  const balanceDetail = props.balanceDetail;

  return (
    <div className='self-center'>

      <div className="flex flex-col items-center justify-center h-96 text-3xl text-primary -mt-20">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="300" height="300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-rocket">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
        In the process of development
      </div>

      {/* <div className="text-xl font-semibold">
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
        hover:bg-teal-900 hover:text-white ease-in-out duration-300 cursor-pointer"          onClick={props.handleAddCentrePopup}
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
      </div> */}
    </div>
  )
}
