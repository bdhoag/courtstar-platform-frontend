import React from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

const Admin = () => {
  return (
    <div className='bg-gray-100 text-gray-800 flex'>
      <Sidebar />
      <div className='flex-1'>
        {/* { (tab === 1) && (<CentreInfo />)}
        { (tab === 2) && (<StaffInfo />)}
        { (tab === 3) && (<Checkin />)} */}
        <Dashboard />
      </div>
    </div>
  );
}

export default Admin;
