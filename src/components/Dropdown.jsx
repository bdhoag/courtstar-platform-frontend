import React, { useState } from 'react';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-gray-800 relative">
      <button className="border border-gray-300 focus:border-2 focus:border-gray-400 py-3 px-6 rounded-lg w-full text-gray-500 flex justify-between items-center"
        onClick={toggleDropdown}>
        <div className='text-sm font-normal text-gray-400'>
          {props.placeholder}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isOpen ? 'rotate-180 lucide lucide-chevron-down' : 'lucide lucide-chevron-down'}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute w-full flex flex-col border border-gray-200 bg-white rounded-lg mt-1">
          <li className="w-full py-2 px-6 rounded-lg  hover:bg-gray-200 transition-all ease-in-out duration-300 cursor-pointer">
            Item 1
          </li>
          <li className="w-full py-2 px-6 rounded-lg  hover:bg-gray-200 transition-all ease-in-out duration-300 cursor-pointer">
            Item 2
          </li>
          <li className="w-full py-2 px-6 rounded-lg  hover:bg-gray-200 transition-all ease-in-out duration-300 cursor-pointer">
            Item 3
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
