import React, { useState } from 'react';
import banner from '../assets/images/banner.png'
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  const items = [
    t('thuDucCity'),
    t('district1'),
    t('district3'),
    t('district4'),
    t('district5'),
    t('district6'),
    t('district7'),
    t('district8'),
    t('district10'),
    t('district11'),
    t('district12'),
    t('binhTanDistrict'),
    t('binhThanhDistrict'),
    t('goVapDistrict'),
    t('phuNhuanDistrict'),
    t('tanBinhDistrict'),
    t('tanPhuDistrict'),
    t('nhaBeProvince'),
    t('canGioProvince'),
    t('cuChiProvince'),
    t('hocMonProvince'),
    t('binhChanhProvince'),
    t('Binh Chanh Province')
  ];

  const [loading, setLoading] = useState(false);

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };
  return (
    <div className='font-Inter text-base bg-gray-100 overflow-x-hidden'>
      <div className="flex flex-wrap  sm:justify-start sm:flex-nowrap 2xl:max-w-screen-1440 2xl:mx-auto max-h-[500px] relative">
        <img src={banner}
          alt="Banner"
          className='object-center object-cover opacity-50'/>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10 max-w-[450px] w-full flex flex-col gap-3.5 items-center justify-between bg-white rounded-3xl py-5 px-10 shadow-gray-800 shadow-lg">
          <div className='text-4xl font-medium text-gray-800'>
            {t('findCourtNow')}
          </div>
          <div className='text-gray-500 text-sm text-center'>
            {t('searchForBadmintonCourtsInHoChiMinhCity')}
          </div>
          <Dropdown
            placeholder={t('selectTheDistrict')}
            items={items}
            onSelect={handleSelect}
          />
          <Button
            label={t('find')}
            fullWidth
            fullRounded
            size='medium'
            className='bg-primary-green hover:bg-teal-900 text-white'
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }}
          />
        </div>
      </div>
    </div>

  );
}

export default Banner;
