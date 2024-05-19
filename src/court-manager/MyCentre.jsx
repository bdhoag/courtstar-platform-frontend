import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CentreInfo from './CentreInfo';
import StaffInfo from './StaffInfo';
import Checkin from './Checkin';

const MyCentre = () => {
  const [centreA, setCentreA] = useState(0);

  const handleChooseFromA = (data) => {
    setCentreA(data);
  };

  return (
    <div className='bg-gray-100 text-gray-800 flex'>
      <Sidebar onDataSubmit1={handleChooseFromA}/>
      <div className='flex-1'>
        { (centreA === 1) && (<CentreInfo />)}
        { (centreA === 2) && (<StaffInfo />)}
        { (centreA === 3) && (<Checkin />)}
      </div>
    </div>
  );
}

export default MyCentre;
