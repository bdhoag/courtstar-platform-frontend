import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CentreInfo from './CentreInfo';
import StaffInfo from './StaffInfo';
import Checkin from './Checkin';

const MyCentre = () => {
  const [tab, setTab] = useState(1);

  const handleChooseFormSideBar = (value) => {
    setTab(value);
  };

  return (
    <div className='bg-gray-100 text-gray-800 flex justify-center'>
      <div className="max-w-screen-1440 flex justify-center">
        <Sidebar onDataSubmit={handleChooseFormSideBar} />
        <div className=''>
          {(tab === 1) && (<CentreInfo />)}
          {(tab === 2) && (<StaffInfo />)}
          {(tab === 3) && (<Checkin />)}
        </div>
      </div>
    </div>
  );
}

export default MyCentre;
