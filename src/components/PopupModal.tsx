import React from 'react';
import x from '../assets/images/x.svg';

interface PopupModalProps {
  isOpen: boolean;
  html: React.ReactNode; // Kiểu của props html là ReactNode
  setIsOpen: () => void; // setIsOpen là một hàm không nhận tham số và không trả về gì
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, html, setIsOpen }) => {

  const handleClose = () => {
    setIsOpen();
  };

  return (
    <div className={isOpen === false ? 'hidden' : ''}>
      <div className='text-gray-800'>
        <div className='fixed z-40 top-0 left-0 h-screen w-screen bg-gray-900 opacity-40'>
        </div>

        <div className='fixed z-50 top-0 left-0 h-screen w-screen flex justify-center items-center'>
          <div className='relative animate-fade-in-down w-fit p-10 rounded-3xl shadow-2xl bg-white max-h-screen overflow-y-auto overflow-x-hidden'>
            {html}
            <button className='absolute p-2 top-3 right-3 hover:bg-gray-200 rounded-full transition-all duration-300 ease-in-out'
              onClick={handleClose}
            >
              <img src={x} alt="x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
