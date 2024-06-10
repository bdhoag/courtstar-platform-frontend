import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import CentreInfo from './CentreInfo';
import StaffInfo from './StaffInfo';
import Checkin from './Checkin';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import AddCentre from './AddCentre';

const MyCentre = () => {


  const [centreList, setCentreList] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [centreDetail, setCentreDetail] = useState([]);
  const [tab, setTab] = useState(0);

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
            setLoadingPage(false);
          }
        );
    }
    load();
  }, []);

  const handleChooseFormSideBar = async (value, centreId) => {
    setTab(value);
    await axiosInstance.get(`/courtstar/centre/getCentre/${centreId}`)
      .then(res => {
        setCentreDetail(res.data.data);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
        () => {
          // setLoading(false);
        }
      );
  };

  //add centre handle
  const [addCentrePopup, setAddCentrePopup] = useState(false);
  const handleAddCentrePopup = () => {
    setAddCentrePopup(true);
  }
  const handleAddCentrePopupClose = () => {
    setAddCentrePopup(false)
  }


  return (
    <div className='bg-gray-100 text-gray-800 flex justify-center'>
      <AddCentre
        isOpen={addCentrePopup}
        setIsOpen={handleAddCentrePopupClose}
      />
      {loadingPage
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
            {(tab === 0) && (
              <div className="w-[70rem] pt-12 flex-1 flex justify-center items-center">
                <button className="flex gap-2 px-3 py-2 bg-primary-green w-fit rounded-md text-white hover:bg-teal-900 ease-in-out duration-300 cursor-pointer"
                  onClick={handleAddCentrePopup}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                    <path d="M5 12h14" /><path d="M12 5v14" />
                  </svg>
                  <div className="font-semibold">
                    Add Centre
                  </div>
                </button>
              </div>
            )}
            {(tab === 1) && (
              <CentreInfo
                centre={centreDetail}
              />
            )}
            {(tab === 2) && (
              <StaffInfo
                centre={centreDetail}
              />
            )}
            {(tab === 3) && (
              <Checkin
                centre={centreDetail}
              />
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default MyCentre;
