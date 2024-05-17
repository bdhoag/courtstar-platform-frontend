import React, { useState } from 'react';

import logo from './assets/images/logo.svg';
import us from './assets/images/US.svg';
import vn from './assets/images/VN.svg';
import down from './assets/images/chevron-down.svg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-Inter text-base overflow-x-hidden'>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary-green">
        <nav className="max-w-screen-1440 1440:mx-auto mx-4 w-full sm:flex sm:items-center sm:justify-between">

          <div className="flex items-center justify-between">
            <div>
              <img src={logo}
                className="w-20 h-20"
                alt='logo'/>
            </div>
            <div className="sm:hidden">
              <button type="button"
                className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6"/>
                    <line x1="3" x2="21" y1="12" y2="12"/>
                    <line x1="3" x2="21" y1="18" y2="18"/>
                </svg>
                <svg className="hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden overflow-hidden transition-all duration-300 grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a className="font-medium text-white transition-all ease-in-out duration-300"
                href="#home">Home</a>
              <a className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                href="#listOfCentre">List of Centre</a>
              <a className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                href="#aboutUs">About us</a>
              <a className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                href="#partnerRegister">Partner Register</a>
            </div>
          </div>

          <div className="flex">
            {/* LANGUAGE SELECTOR START HERE */}
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
            {/* LANGUAGE SELECTOR END HERE */}

            <div className="flex gap-4">
              <div className='border border-white rounded-lg py-2 px-6 text-white transition-all ease-in-out duration-300 hover:bg-gray-200 hover:text-primary-green font-semibold cursor-pointer'>
                Log in
              </div>
              <div className='rounded-lg py-2 px-6 bg-gray-700 hover:bg-gray-800 transition-all ease-in-out duration-300 font-semibold text-gray-200 cursor-pointer'>
                Sign up
              </div>
            </div>
          </div>

        </nav>
      </header>
    </div>
  );
}

export default Header;
