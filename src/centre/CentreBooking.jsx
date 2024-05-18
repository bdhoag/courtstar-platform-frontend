import React from 'react';
import centre from '../assets/images/demo-centre.png';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/nostar.svg';
import mappin from '../assets/images/map-pin.svg';

const CentreBooking = () => {

  return (
    <div className='font-Inter text-base overflow-x-hidden'>
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-8">

          <div className='w-full flex items-center gap-8'>
            <div className='basis-3/5 overflow-x-hidden'>
              <div className='text-3xl font-semibold'>
                Sân cầu lông Đại học FPT Hồ Chí Minh
              </div>
              <div className='flex gap-2 my-3'>
                <div className='flex gap-1'>
                  <img src={star} alt="Star" className='cursor-pointer w-5'/>
                  <img src={star} alt="Star" className='cursor-pointer w-5'/>
                  <img src={star} alt="Star" className='cursor-pointer w-5'/>
                  <img src={nostar} alt="No Star" className='cursor-pointer w-5'/>
                  <img src={nostar} alt="No Star" className='cursor-pointer w-5'/>
                </div>
                <div className='text-sm'>
                  (10 feedbacks)
                </div>
              </div>
              <div>
                <img src={centre}
                  alt="demo centre"
                  className='w-full'
                />
              </div>
              <div className='flex gap-2 mt-2 py-1.5 px-2.5 border rounded-md bg-white'>
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
                <img src={centre}
                  alt="demo centre"
                  className='w-28 rounded-lg'
                />
              </div>
            </div>
            <div className='flex-1 rounded-lg shadow-gray-400 shadow-md'>
              <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
                <img src={mappin}
                  alt="map pin"
                  className='w-6 h-6'
                />
                <span className='text-3xl font-medium'>Address</span>
              </div>
              <div className='bg-white rounded-b-lg p-8'>
                <div className='font-medium mb-10'>
                  Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                </div>
                <button className='w-full bg-primary-green uppercase py-2 rounded-md text-white font-medium hover:bg-teal-900 transition-all duration-300 ease-in-out'>
                  See on map
                </button>
              </div>
            </div>
          </div>

          <div>Booking</div>

        </div>
      </div>
    </div>
  );
}

export default CentreBooking;
