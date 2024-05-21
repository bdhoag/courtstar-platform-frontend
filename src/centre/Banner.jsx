import React from 'react';
import banner from '../assets/images/banner.png'
import Dropdown from '../components/Dropdown';

const Banner = () => {
  return (
    <div className='font-Inter text-base bg-gray-100 overflow-x-hidden'>
      <div className="flex flex-wrap  sm:justify-start sm:flex-nowrap 2xl:max-w-screen-1440 2xl:mx-auto max-h-[500px] relative">
        <img src={banner}
          alt="Banner"
          className='object-center object-cover opacity-50'/>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10 max-w-[500px] w-full flex flex-col gap-3.5 items-center justify-between bg-white rounded-3xl py-5 px-10 shadow-gray-800 shadow-lg">
          <div className='text-4xl font-medium text-gray-800'>
            Find court now
          </div>
          <div className='text-gray-500 text-sm'>
            Search for badminton courts in Ho Chi Minh City
          </div>
          <Dropdown
            placeholder="Select the district"
          />
          <button className='bg-primary-green w-full rounded-full py-2.5 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out'>
            Find
          </button>
        </div>
      </div>
    </div>

  );
}

export default Banner;
