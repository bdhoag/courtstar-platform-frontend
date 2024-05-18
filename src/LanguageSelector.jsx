import React, { useState } from 'react';

import us from './assets/images/US.svg';
import vn from './assets/images/VN.svg';
import down from './assets/images/chevron-down.svg';

const LanguageSelector = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-flex">
      <button className="py-1 ps-1 pe-3 inline-flex items-center gap-x-2 font-semibold text-white w-28"
        onClick={toggleMenu}>
        <img className="w-5 h-auto rounded-full"
          src={us}
          alt='US'
        />
        <span className="font-medium truncate max-w-[7.5rem]">
          US
        </span>
        <img src={down}
          className='w-4'
          alt='chevron-down'/>
      </button>

      {isOpen && (
        <div className="absolute top-10 min-w-40 bg-white shadow-md rounded-lg p-2 mt-2">
          <button
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={toggleMenu}
          >
            <img src={us} className="w-4 rounded-full" alt="English (US)" />
            <span>English (US)</span>
          </button>
          <button
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={toggleMenu}
          >
            <img src={vn} alt="Việt Nam (VI)" />
            <span>Việt Nam (VI)</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
