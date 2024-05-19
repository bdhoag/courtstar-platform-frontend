import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CentreInfo from './CentreInfo';
import StaffInfo from './StaffInfo';
import Checkin from './Checkin';

const MyCentre = () => {
  const [tab, setTab] = useState(0);

  const handleChooseFormSideBar = (value) => {
    setTab(value);
  };

  return (
    <div className='bg-gray-100 text-gray-800 flex'>
      <Sidebar onDataSubmit={handleChooseFormSideBar}/>
      <div className='flex-1'>
        { (tab === 1) && (<CentreInfo />)}
        { (tab === 2) && (<StaffInfo />)}
        { (tab === 3) && (<Checkin />)}
      </div>
    </div>
  );
}

export default MyCentre;
