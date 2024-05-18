import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button className="border border-gray-200 py-3 px-6 rounded-lg w-full text-gray-500 flex justify-between items-center"
        onClick={toggleDropdown}>
        <div className='text-sm'>
          Select the district
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
            <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      {isOpen && (
        <ul className="border border-gray-200 rounded-lg mt-2">
          <li className="py-2 px-6 hover:bg-gray-200 transition-all ease-in-out duration-300">Item 1</li>
          <li className="py-2 px-6 hover:bg-gray-200 transition-all ease-in-out duration-300">Item 2</li>
          <li className="py-2 px-6 hover:bg-gray-200 transition-all ease-in-out duration-300">Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
