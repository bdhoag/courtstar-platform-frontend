import React, { useState } from 'react';

const CentreDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const [tab, setTab] = useState(0);

  const handleClick = (value, centreId) => {
    // setTab(value);
    props.onDataSubmit(value, centreId);
  };



  return (
    <div className="w-full">
      <button className={isOpen ? 'py-3 px-6 rounded-t-lg w-full text-white bg-gray-800 flex justify-between items-center' : 'py-3 px-6 rounded-lg w-full text-white bg-gray-800 flex justify-between items-center'}
        onClick={toggleDropdown}>
        <div className='text-lg font-semibold'>
          {props.centreName}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isOpen ? 'rotate-180 lucide lucide-chevron-down' : 'lucide lucide-chevron-down'}>
            <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      {isOpen && (
        <ul className="bg-white rounded-b-lg text-center">
          <button className="block w-full py-3 px-6 bg-gray-200 hover:bg-white transition-all ease-in-out duration-300 cursor-pointer"
            onClick={() => handleClick(1, props.centreId)}
          >
            Centre Information
          </button>
          <button className="block w-full py-3 px-6 bg-gray-200 hover:bg-white transition-all ease-in-out duration-300 cursor-pointer"
            onClick={() => handleClick(2, props.centreId)}
          >
            Staff Information
          </button>
          <button className="block w-full py-3 px-6 bg-gray-200 hover:bg-white transition-all ease-in-out duration-300 cursor-pointer rounded-b-lg hover:rounded-b-lg"
            onClick={() => handleClick(3, props.centreId)}
          >
            Check in
          </button>
        </ul>
      )}
    </div>
  );
}

export default CentreDropdown;
