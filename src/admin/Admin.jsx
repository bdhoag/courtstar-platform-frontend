import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import AllCentre from './AllCentre';
import AllUser from './AllUser';

const Admin = () => {
  const [tab, setTab] = useState(1);

  const handleChooseFormSideBar = (value) => {
    setTab(value);
  };

  return (
    <div className='bg-gray-100 text-gray-800 flex'>
      <Sidebar onDataSubmit={handleChooseFormSideBar}/>
      <div className='flex-1'>
        { (tab === 1) && (<Dashboard />)}
        { (tab === 2) && (<AllCentre />)}
        { (tab === 3) && (<AllUser />)}
      </div>
    </div>
  );
}

export default Admin;
