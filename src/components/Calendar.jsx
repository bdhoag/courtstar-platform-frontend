import React, { useState } from 'react'
import Dropdown from './Dropdown'
import moment from 'moment';
import x from '../assets/images/x.svg';

export default function Calendar() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const slots = [1,2,3,4,5,6,7,8,9,10];

  //HANDLE YEAR
  const yearItems = [`${moment().year()}`];
  const handleSelectYear = (item) => {
    console.log(`Selected: ${item}`);
  };

  //HANDLE WEEK
  const getWeeks = () => {
    let weeks = [];
    let startOfWeek = moment().startOf('week');

    for (let i = 0; i < 10; i++) {
        let week = [];
        let start = startOfWeek.clone().add(i, 'weeks').startOf('week');

        for (let j = 0; j < 7; j++) {
            week.push(start.clone().add(j, 'days').format('MM/DD'));
        }

        weeks.push(week);
    }

    return weeks;
  };
  const weeks = getWeeks();
  const weekItems = weeks.map((week, index) => (
        `${week[0]} to ${week[6]}`
  ));
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]);

  const handleSelectWeek = (item) => {
    console.log(`Selected: ${item}`);
    const index = weekItems.indexOf(item);
    setSelectedWeek(weeks[index]);
    setCurrentWeekIndex(index);
  };

  //HANDLE < > BUTTON
  const goNext = () => {
    handleSelectWeek(weekItems[currentWeekIndex + 1]);
  }

  const goPrevious = () => {
    handleSelectWeek(weekItems[currentWeekIndex - 1]);
  }

  return (
    <div className=''>

      <div className="container mx-auto mt-10">
        <div className="wrapper bg-white rounded shadow w-full ">
          <div className="header flex justify-between items-center border-b p-2">
            <div className="flex gap-4">
              <div className='w-28'>
                <Dropdown
                  items={yearItems}
                  initialValue={yearItems[0]}
                  onSelect={handleSelectYear}
                />
              </div>
              <div className='w-52'>
                <Dropdown
                  items={weekItems}
                  initialValue={weekItems[currentWeekIndex]}
                  onSelect={handleSelectWeek}
                />
              </div>
            </div>
            <div className="buttons text-gray-500">
              <button className="p-1 hover:text-gray-800 transition-all duration-200 ease-in-out disabled:text-gray-300"
                onClick={goPrevious}
                disabled={currentWeekIndex === 0}
              >
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fillRule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                    <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
                  </svg>
              </button>
              <button className="p-1 hover:text-gray-800 transition-all duration-200 ease-in-out disabled:text-gray-300"
                onClick={goNext}
                disabled={currentWeekIndex === weekItems.length - 1}
              >
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                    <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="relative p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <div className='absolute top-[80%] left-1/2 -translate-x-1/2'>Slot</div>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="text-center h-20">
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">1</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div
                        className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                      >
                        <span className="event-name">
                          Meeting
                        </span>
                        <span className="time">
                          12:00~14:00
                        </span>
                      </div>
                      <div
                        className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                      >
                        <span className="event-name">
                          Meeting
                        </span>
                        <span className="time">
                          18:00~20:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">2</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">4</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">6</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">7</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div
                        className="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                      >
                        <span className="event-name">
                          Shopping
                        </span>
                        <span className="time">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-40 mx-auto xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500 text-sm">8</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr> */}

              <tr className="text-center h-10">
                  <td className="border-r border-b p-1 h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto"></td>
                {selectedWeek.map((day, index) => (
                  <td key={index}
                    className="border p-1 h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto">
                    <div className="flex flex-col justify-center items-center h-10 xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="top h-5 w-full">
                        <span className="text-gray-500">{day}</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>

              {slots.map((slot, index) => (
                <tr key={index}
                  className="text-center h-20">
                    <td className="border-r border-b p-1 h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto text-gray-500">
                      {slot} <br/>
                      <span className='text-xs'>
                        {`${(8 + slot)}:00 -  ${(9 + slot)}:00`}
                      </span>
                    </td>
                  {selectedWeek.map((day, index) => (
                    <td key={index}
                      className={
                          !(  day < moment().format('MM/DD') ||
                            ( day === moment().format('MM/DD') && (8 + slot) < (parseInt(moment().format('h')) + 1) )
                          )
                          ?
                          "border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
                          :
                          "border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto"
                      }>
                      <div className="relative flex flex-col h-20 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                        <div className="top h-5 w-full">
                          <span className="text-gray-500"></span>
                        </div>
                        {
                          (   day < moment().format('MM/DD') ||
                            ( day === moment().format('MM/DD') && (8 + slot) < (parseInt(moment().format('h')) + 1) )
                          ) &&
                          (<img src={x}
                            alt="x"
                            className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10'
                          />)
                        }
                      </div>
                    </td>
                  ))}
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
