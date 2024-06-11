import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar = (props) => {
  const { t } = useTranslation();

  const [centreIsSelected, setCentreIsSelected] = useState();
  const [tab, setTab] = useState();

  const handleDropdown = (centreId) => {
    setCentreIsSelected(centreId);
    props.onDataSubmit(centreId);
    handleSelectTab(0);

    // setIsDropdownOpen(prevState => ({
    //   ...prevState,
    //   [centreId]: !prevState[centreId]
    // }));
  }

  const handleSelectTab = (value) => {
    setTab(value);
    props.onDataTabSubmit(value);
  }


  return (
    <div className="bg-white w-1/6 flex flex-col gap-3 px-5 py-3 min-h-screen">
      <div className="">
        <div
          onClick={() => handleDropdown(0)}
          className=
          {
            centreIsSelected === 0
              ? "py-1 font-bold text-lg px-3 rounded-md bg-primary-green text-white cursor-pointer scale-105 ease-in-out duration-300"
              : "py-1 font-bold text-lg cursor-pointer hover:px-3 rounded-md hover:bg-primary-green hover:text-white hover:scale-105 ease-in-out duration-300"
          }
        >
          {t('myBalance')}
        </div>
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">
            {t('myCentre')}
          </div>
          <button
            className="flex gap-2 p-1 w-fit rounded-md text-primary-green hover:bg-primary-green hover:text-white
            ease-in-out duration-300 cursor-pointer"
            onClick={props.handleAddCentrePopup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18" height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-1 mt-1">
          {props.centreList.map((centre) => (
            <div
              key={centre.id}
              className=""
            >
              <div
                className=
                {
                  centreIsSelected === centre.id
                    ?
                    'bg-primary-green text-white px-3 py-1.5 rounded-md ease-in-out duration-300 font-semibold cursor-pointer'
                    :
                    'py-1.5 rounded-md hover:bg-primary-green hover:text-white truncate hover:px-1.5 ease-in-out duration-300 font-semibold cursor-pointer'
                }
                onClick={() => handleDropdown(centre.id)}
              >
                {centre.name}
              </div>

              {centreIsSelected === centre.id && (
                <div className="flex flex-col gap-1 px-5 mt-1 animate-fade-in-down transition-all ease-in-out duration-300">
                  <div
                    onClick={() => handleSelectTab(1)}
                    className=
                    {tab === 1
                      ? 'cursor-pointer rounded-md px-3 bg-gray-800 text-white'
                      : 'cursor-pointer rounded-md hover:px-3 hover:bg-gray-800 hover:text-white ease-in-out duration-300'
                    }
                  >
                    {t('centreStaff')}
                  </div>

                  <div
                    onClick={() => handleSelectTab(2)}
                    className=
                    {tab === 2
                      ? 'cursor-pointer rounded-md px-3 bg-gray-800 text-white'
                      : 'cursor-pointer rounded-md hover:px-3 hover:bg-gray-800 hover:text-white ease-in-out duration-300'
                    }
                  >
                    Check in
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
