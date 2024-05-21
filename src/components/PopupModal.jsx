import React from 'react';
import x from '../assets/images/x.svg';

const PopupModal = (props) => {

  const handleClose = () => {
    props.setIsOpen();
  }

  return (
    <div className={props.isOpen === false ? 'hidden' : ''}>
      <div className='text-gray-800'>
        <div className='fixed z-40 top-0 left-0 h-screen w-screen bg-gray-900 opacity-40'>
        </div>

        <div className='fixed z-50 top-0 left-0 h-screen w-screen flex justify-center items-center'>
          <div className='relative animate-fade-in-down-slow w-fit p-10 rounded-3xl shadow-2xl bg-white opacity-100'>
            {props.html}
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

export default PopupModal;
