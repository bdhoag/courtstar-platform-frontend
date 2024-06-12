import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import AddCentre from './AddCentre';
import Content from './Content';

const MyCentre = () => {

  const [centreList, setCentreList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState();
  const [balanceDetail, setBalanceDetail] = useState();

  useEffect(() => {
    const load = async () => {
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

    const loadBalanceDetail = async () => {
      setLoading(true);
      await axiosInstance.get(`/courtstar/manager/info`)
        .then(res => {
          setBalanceDetail(res.data.data);
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
    loadBalanceDetail();
  }, []);

  const handleChooseTabFromSidebar = (tab) => {
    setTab(tab);
  }


  //add centre handle
  const [addCentrePopup, setAddCentrePopup] = useState(false);
  const handleAddCentrePopup = () => {
    setAddCentrePopup(true);
  }
  const handleAddCentrePopupClose = () => {
    setAddCentrePopup(false)
  }


  return (
    <div className="">
      <AddCentre
        isOpen={addCentrePopup}
        setIsOpen={handleAddCentrePopupClose}
      />
      {loading
        ?
        <div className="min-h-screen flex items-center justify-center">
          <SpinnerLoading
            height='80'
            width='80'
            color='#2B5A50'
          />
        </div>
        :
        <div className='bg-gray-100 text-gray-800 flex'>
          <Sidebar
            centreList={centreList}
            onDataTabSubmit={handleChooseTabFromSidebar}
            handleAddCentrePopup={handleAddCentrePopup}
          />
          <Content
            balanceDetail={balanceDetail}
            tab={tab}
          />
        </div>
      }
    </div>
  );
}

export default MyCentre;
