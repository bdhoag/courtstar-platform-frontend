import React, { useEffect, useState } from 'react';
// import star from '../assets/images/star.svg';
// import centre from '../assets/images/demo-centre.png'
import { Link } from "react-router-dom";
import Rating from '../components/Rating';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import moment from 'moment';

const Centre = () => {

  const [loading, setLoading] = useState(false);

  const [centreList, setCentreList] = useState([]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await axiosInstance.get(`/courtstar/centre/allCentre`)
        .then(res => {
          setCentreList(res.data.data.reverse());
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(
          () => {
            setLoading(false);
          }
        );
    };
    load();
  }, [])


  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-10 px-12 w-full flex flex-col gap-4 items-center justify-between">

          <div className='font-bold text-3xl uppercase text-center w-full'>
            List of centres
          </div>

          {loading
            ?
            <SpinnerLoading
              color='#2B5A50'
            />
            :
            <div className='flex gap-5 w-full'>
              <div>
                <div className='bg-white rounded-2xl shadow-2xl border py-5 px-7 flex flex-col justify-between gap-10'>
                  <div>
                    <div className='font-bold text-2xl uppercase'>
                      Rating
                    </div>
                    <Rating
                      ratingWrapper='flex gap-1 p-5'
                      value={5}
                      editable={true}
                    />
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
                        name="maxPrice"
                        id="maxPrice"
                        className='border rounded-lg py-1.5 px-6 w-24 placeholder:text-sm'
                        placeholder='MAX'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-1 flex flex-col gap-7'>

                {centreList.map((centre) => (
                  <div key={centre.id}
                    className='bg-white rounded-2xl shadow-2xl border py-5 px-7 flex gap-7'>
                    <img src={centre.images[0].url}
                      alt="demo centre"
                      className='w-2/5 h-56 object-cover object-center'
                    />

                    <div className='flex flex-col gap-3 w-3/5 justify-between'>
                      <div className='font-semibold text-xl'>
                        {centre.name}
                      </div>
                      {/* <Rating
                        ratingWrapper='flex gap-1'
                        value={5}
                        editable={false}
                      /> */}
                      <div>
                        <span className='font-semibold'>Address: </span>
                        {centre.address}
                      </div>
                      <div className='flex gap-3'>
                        <div>
                          <span className='font-semibold'>Open time: </span>
                          {moment(centre.openTime, 'HH:mm:ss').format('HH:mm')} - {moment(centre.closeTime, 'HH:mm:ss').format('HH:mm')}
                        </div>
                        <div>
                          <span className='font-semibold'>Number of courts: </span>
                          {centre.numberOfCourt}
                        </div>
                      </div>
                      <div>
                        <span className='font-semibold'>Price: </span>
                        <span className='font-semibold text-rose-600'>
                          {centre.pricePerHour}₫/h
                        </span>
                      </div>
                      <div className='text-sm flex justify-center gap-20'>
                        <Link className='block text-center py-1 w-full border border-gray-800 rounded-md font-semibold hover:text-white hover:bg-gray-800 transition-all ease-in-out duration-300'
                          to="/centreBooking"
                        >
                          Centre Details
                        </Link>
                        {/* <Link className='block text-center py-1 w-40 border bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-950 transition-all ease-in-out duration-300'
                        to="/centreBooking"
                      >
                        Book Now
                      </Link> */}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Centre;
