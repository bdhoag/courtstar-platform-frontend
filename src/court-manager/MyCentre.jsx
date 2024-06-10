import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import CentreInfo from './CentreInfo';
import StaffInfo from './StaffInfo';
import Checkin from './Checkin';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';

const MyCentre = () => {
  const [tab, setTab] = useState(1);

  const handleChooseFormSideBar = (value) => {
    setTab(value);
  };

  const [centreList, setCentreList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await axiosInstance.get(`/courtstar/centre/getAllCentresOfManager`)
        .then(res => {
          setCentreList(res.data.data);
        })
        .catch(error => {
          console.log(error.message);
        })
        .finally(
          () => {
            setLoading(false);
          }
        );
    }
    load();
  }, []);



  return (
    <div className='bg-gray-100 text-gray-800 flex justify-center'>
      {loading
        ?
        <SpinnerLoading
          color='#2B5A50'
        />
        :
        <div className="max-w-screen-1440 flex justify-center">
          <Sidebar
            centreList={centreList}
            onDataSubmit={handleChooseFormSideBar}
          />
          <div className=''>
            {(tab === 1) && (<CentreInfo />)}
            {(tab === 2) && (<StaffInfo />)}
            {(tab === 3) && (<Checkin />)}
          </div>
        </div>
      }
    </div>
  );
}

export default MyCentre;
