import React from 'react';
import x from '../assets/images/x.svg';

const Dialog = (props) => {
  /**
   * ALL PROPS:
   * isOpen: boolean
   * title: string
   * html: html
   * setIsOpen: () => {}
   * submit: () => {}
   */

  const handleClose = () => {
    props.setIsOpen();
  }

  const handleSubmit = () => {
    props.submit();
  }

  return (
    <div className={props.isOpen === false ? 'hidden' : ''}>
      <div className='text-gray-800'>
        <div className='fixed z-40 top-0 left-0 h-screen w-screen bg-gray-900 opacity-40'>
        </div>

        <div className='fixed z-50 top-0 left-0 h-screen w-screen flex justify-end items-center'>
          <div className='relative animate-fade-in-right w-fit pt-3.5 px-5 rounded-xl shadow-2xl bg-white h-screen flex flex-col justify-between'>

            <h2 className="text-3xl px-5 font-bold mb-3.5 text-center uppercase">{props.title}</h2>

            <div className='flex-1 w-[440px] bg-white mx-auto h-auto overflow-y-auto overflow-x-hidden px-2 mb-3'>
              {props.html}
            </div>

            <div className="bg-gray-200 rounded-b-xl pb-5 px-5 pt-3 -mx-5 font-semibold flex gap-6">
              <div
                className="flex justify-center items-center gap-2.5 text-white bg-primary-green w-1/2 py-2 rounded-md hover:bg-teal-900 ease-in-out duration-300 cursor-pointer"
                onClick={handleSubmit}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                <div className="">
                  Upload
                </div>
              </div>
              <div
                className="flex justify-center bg-white gap-2.5 text-red-600 border-2 border-red-600 w-1/2 py-2 rounded-md hover:bg-red-600 hover:text-white ease-in-out duration-300 cursor-pointer"
                onClick={handleClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                <div className="">
                  Discard
                </div>
              </div>
            </div>

            <button className='absolute p-2 top-3 right-3 hover:bg-gray-200 rounded-full transition-all duration-300 ease-in-out'
              onClick={handleClose}
            >
              <img src={x}
                alt="x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
