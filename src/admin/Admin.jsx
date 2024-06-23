import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Sidebar from './layout/Sidebar';
import AllCentre from './content/AllCentre';
import AllUser from './all-user/AllUser';
import Content from './layout/Content';

const Admin = () => {
  const [tab, setTab] = useState();
  const [tabItem, setTabItem] = useState();

  const handleChooseTabFormSideBar = (value) => {
    setTab(value);
  };

  const handleChooseTabItemFormSideBar = (value) => {
    setTabItem(value);
  }

  return (
    <div className='bg-gray-100 text-gray-800 flex'>

      <Sidebar
        onDataTabSubmit={handleChooseTabFormSideBar}
        onDataTabItemSubmit={handleChooseTabItemFormSideBar}
      />

      <Content
        tab={tab}
        tabItem={tabItem}
      />

    </div>
  );
}

export default Admin;
