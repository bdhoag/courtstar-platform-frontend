// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Rating from '../components/Rating';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import RangeSlider from './RangeSlider';

const Centre = ({ selectedDistrict }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [centreList, setCentreList] = useState([]);
  const [filteredCentreList, setFilteredCentreList] = useState([]);
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const load = async () => {
      setLoading(true);
      await axiosInstance.get(`/courtstar/centre/getAllCentreActive`, { signal })
        .then(res => {
          setCentreList(res.data.data.reverse());
          setFilteredCentreList(res.data.data);
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    load();
    return () => {
      controller.abort();
    }
  }, []);

  useEffect(() => {
    console.log('Selected District:', selectedDistrict); // Debug selectedDistrict
    let filteredList = centreList;
    if (selectedDistrict && typeof selectedDistrict === 'string') {
      filteredList = filteredList.filter(centre => {
        const district = centre.district;
        console.log('Centre District:', district); // Debug extracted district
        return district.toLowerCase() === selectedDistrict.toLowerCase();
      });
    }
    if (minValue) {
      filteredList = filteredList.filter(centre => centre.pricePerHour >= parseFloat(minValue));
    }
    if (maxValue) {
      filteredList = filteredList.filter(centre => centre.pricePerHour <= parseFloat(maxValue));
    }
    setFilteredCentreList(filteredList);
  }, [selectedDistrict, minValue, maxValue, centreList]);

  const handlePriceChange = (min, max) => {
    setMaxValue(max);
    setMinValue(min);
  };

  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
      <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 py-10 px-12 w-full flex flex-col gap-4 items-center justify-between">

          <div className='font-bold text-3xl uppercase text-center w-full' id='centre-list'>
            {t('listOfCentres')}
          </div>

          {loading ? (
            <SpinnerLoading color='#2B5A50' />
          ) : (
            <div className='flex gap-5 w-full'>
              <div>
                <div className='bg-white rounded-2xl shadow-2xl border py-5 px-7 flex flex-col justify-between gap-10'>
                  <div>
                    <div className='font-bold text-2xl uppercase'>
                      {t('rating')}
                    </div>
                    <Rating ratingWrapper='flex gap-1 p-5' value={5} editable={true} />
                  </div>
                  <div>
                    <div className='font-bold text-2xl uppercase'>
                      {t('priceRange')}
                    </div>
                    <RangeSlider
                      priceRange={handlePriceChange}
                    />
                  </div>
                </div>
              </div>

              {
                filteredCentreList?.length > 0 &&
                <div className='flex-1 flex flex-col gap-7'>
                  {filteredCentreList.map((centre) => (
                    <div
                      key={centre.id}
                      className='bg-white rounded-2xl shadow-2xl border py-5 px-7 flex gap-7'
                    >
                      <img
                        src={centre.images[0]?.url}
                        alt="demo centre"
                        className='w-2/5 h-56 object-cover object-center rounded-lg'
                      />
                      <div className='flex flex-col gap-3 flex-1 justify-between'>
                        <div className='font-semibold text-xl'>
                          {centre.name}
                        </div>
                        <Rating
                          ratingWrapper='flex gap-1'
                          value={centre.rating}
                          editable={false}
                        />
                        <div>
                          <span className='font-semibold'>{t('address')}: </span>
                          {centre.address}, {t(centre.district)}
                        </div>
                        <div className='flex gap-3'>
                          <div>
                            <span className='font-semibold'>{t('openTime')}: </span>
                            {moment(centre.openTime, 'HH:mm:ss').format('HH:mm')} - {moment(centre.closeTime, 'HH:mm:ss').format('HH:mm')}
                          </div>
                          <div>
                            <span className='font-semibold'>{t('numberOfCourts')}: </span>
                            {centre.numberOfCourts}
                          </div>
                        </div>
                        <div>
                          <span className='font-semibold'>{t('price')}: </span>
                          <span className='font-semibold text-rose-600'>
                            {centre?.pricePerHour.toLocaleString('de-DE')} VND/h
                          </span>
                        </div>
                        <div className='text-sm flex justify-center gap-20'>
                          <Link
                            className='block text-center py-1 w-full border border-gray-800 rounded-md font-semibold hover:text-white hover:bg-gray-800 transition-all ease-in-out duration-300'
                            to={`/centreBooking/${centre.id}`}
                          >
                            {t('centreDetail')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Centre;
