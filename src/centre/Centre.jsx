import React from 'react';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/nostar.svg';
import centre from '../assets/images/demo-centre.png'
import { Link } from "react-router-dom";

const Centre = () => {

  const centreList = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-10 px-12 w-full flex flex-col gap-4 items-center justify-between">

          <div className='font-bold text-3xl uppercase text-center w-full'>
            List of centre
          </div>
          <div className='flex gap-5 w-full'>

            <div>
              <div className='bg-white rounded-2xl shadow-2xl border py-5 px-7 flex flex-col justify-between gap-10'>
                <div>
                  <div className='font-bold text-2xl uppercase'>
                    Rating
                  </div>
                  <div className='flex gap-1 p-5'>
                    <img src={star} alt="Star" className='cursor-pointer'/>
                    <img src={star} alt="Star" className='cursor-pointer'/>
                    <img src={star} alt="Star" className='cursor-pointer'/>
                    <img src={nostar} alt="No Star" className='cursor-pointer'/>
                    <img src={nostar} alt="No Star" className='cursor-pointer'/>
                  </div>
                </div>
                <div>
                  <div className='font-bold text-2xl uppercase mb-5'>
                    Price range
                  </div>
                  <div className='flex gap-2 items-center justify-between'>
                    <input type="text"
                      name="minPrice"
                      id="minPrice"
                      className='border rounded-lg py-1.5 px-6 w-24 placeholder:text-sm'
                      placeholder='MIN'
                    />
                    -
                    <input type="text"
                      name="minPrice"
                      id="minPrice"
                      className='border rounded-lg py-1.5 px-6 w-24 placeholder:text-sm'
                      placeholder='MAX'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-7'>
              {centreList.map((_, index) => (
                <div key={index}
                  className='bg-white rounded-2xl shadow-2xl border py-5 px-7 flex gap-7'>
                  <img src={centre}
                    alt="demo centre"
                    className='w-2/5'
                  />

                  <div className='flex flex-col gap-3'>
                    <div className='font-semibold'>
                      Sân cầu lông Đại học FPT Hồ Chí Minh
                    </div>
                    <div className='flex gap-1'>
                      <img src={star} alt="Star" className='cursor-pointer w-5'/>
                      <img src={star} alt="Star" className='cursor-pointer w-5'/>
                      <img src={star} alt="Star" className='cursor-pointer w-5'/>
                      <img src={star} alt="Star" className='cursor-pointer w-5'/>
                      <img src={star} alt="Star" className='cursor-pointer w-5'/>
                    </div>
                    <div>
                      <span className='font-semibold'>Address: </span>
                      Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                    </div>
                    <div className='flex gap-3'>
                      <div>
                        <span className='font-semibold'>Open time: </span>
                        10h-22h
                      </div>
                      <div>
                        <span className='font-semibold'>Number of courts: </span>
                        8
                      </div>
                    </div>
                    <div>
                      <span className='font-semibold'>Price: </span>
                      <span className='font-semibold text-rose-600'>100.000₫/h</span>
                    </div>
                    <div className='text-sm flex justify-center gap-20'>
                      <Link className='block text-center py-1 w-40 border border-gray-800 rounded-md font-semibold hover:bg-gray-300 transition-all ease-in-out duration-300'
                        to="/centreBooking"
                      >
                        Centre Details
                      </Link>
                      <Link className='block text-center py-1 w-40 border bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-950 transition-all ease-in-out duration-300'
                        to="/centreBooking"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Centre;
