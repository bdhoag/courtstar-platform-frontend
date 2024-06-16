// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import moment from 'moment';
import axiosInstance from '../config/axiosConfig';
import { toast } from 'react-toastify';
import SpinnerLoading from './SpinnerLoading';

export default function Calendar(props) {

  const [centre, setCentre] = useState({});
  const controller = new AbortController();
  const { signal } = controller;

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;
  const isDisable = (day, slot) => (
    day < moment().format('MM/DD') ||
    (
      day === moment().format('MM/DD') &&
      (parseInt(moment(slot.startTime, "HH:mm:ss").format('H'))) < (parseInt(moment().format('H')) + 1)
    ) ||
      court.slotUnavailables.some(unavailable =>
        unavailable.slot.id === slot.id &&
        moment(unavailable.date, "YYYY-MM-DD").format('MM/DD') === day
      )
  )

  // handle select court
  const [courtItems, setCourtItems] = useState([]);
  const [court, setCourt] = useState({});
  const handleSelectCourt = (item) => {
    setFormCalendar({
      courtNo: item.slice(-1),
      centreId: centre.id
    });
    loadCourt(centre.id, item.slice(-1));
  };

  const loadCourt = async(centreId, courtNo) => {
    await axiosInstance.get(`/courtstar/court/${centreId}/${courtNo}`, { signal })
      .then(res => {
        setCourt(res.data.data)
      })
      .catch(error => {
        toast.error(error.message, {
          toastId: 'court-error'
        });
      })
      .finally(
        () => {

        }
      );
  }

  useEffect(() => {
    setCentre(props.centre);
  }, [props.centre])

  useEffect(() => {
    if (!isEmptyObject(centre)) {
      const items = centre.courts?.map((court) => `Court ${court.courtNo}`);
      setCourtItems(items);
      setFormCalendar({
        courtNo: items[0].slice(-1),
        centreId: centre.id
      });
      loadCourt(centre.id, 1);
    }

    return () => {
      controller.abort();
    }
  }, [centre])

  const typeOfCalendar = props.typeOfCalendar;

  //HANDLE YEAR
  const yearItems = [`${moment().year()}`];
  const handleSelectYear = (item) => {
    console.log(`Selected: ${item}`);
  };

  //HANDLE WEEK, GET THE NEXT 10 WEEKS
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
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

  //Handle choose day slot
  const handleClick = (slot, day) => {
    setFormCalendar(prevForm => ({
      ...prevForm,
      slotId: slot.id,
      date: moment(day, "MM/DD").format("YYYY-MM-DD")
    }));
  }

  const [formCalendar, setFormCalendar] = useState({
    slotId: "",
    courtNo: "",
    date: "",
    centreId: ""
  });

  useEffect(() => {
    console.log(formCalendar);
  }, [formCalendar]);

  useEffect(() => {
    console.log(court);
  }, [court]);

  return (
    <div className=''>

      {
        (isEmptyObject(centre) || isEmptyObject(court))
        ?
        <div className='h-[200px] flex items-center justify-center'>
          <SpinnerLoading
            height='80'
            width='80'
            color='#2B5A50'
          />
        </div>
        :
        (
        <div className="container mx-auto">
          <div className="wrapper bg-white rounded w-full ">
            <div className="header flex justify-between items-center border-b py-2">
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
                <div className='w-32'>
                  <Dropdown
                    items={courtItems}
                    onSelect={handleSelectCourt}
                    initialValue={courtItems[0]}
                  />
                </div>
                <div className="flex text-gray-500">
                  <button className="p-1 hover:text-gray-800 transition-all duration-200 ease-in-out disabled:text-gray-300"
                    onClick={goPrevious}
                    disabled={currentWeekIndex === 0}
                  >
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path fillRule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z" />
                      <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </button>
                  <button className="p-1 hover:text-gray-800 transition-all duration-200 ease-in-out disabled:text-gray-300"
                    onClick={goNext}
                    disabled={currentWeekIndex === weekItems.length - 1}
                  >
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
                      <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex gap-5">

                <button className='w-full bg-primary-green p-2 rounded-md text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-semibold disabled:bg-opacity-65 disabled:pointer-events-none'
                  onClick={() => props.handleButton(formCalendar)}
                  disabled={!formCalendar.slotId}
                >
                  {typeOfCalendar === 'booking' ?
                    'Book now' : 'Check in'
                  }
                </button>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="relative pt-2 border-x xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <div className='absolute left-1/2 -translate-x-1/2'>Slot</div>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
                  </th>
                  <th className="border-x pt-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
                  </th>
                </tr>
                <tr className="text-center">
                  <th className="border-x pb-2 border-b xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto"></th>
                  {selectedWeek.map((day, index) => (
                    <th key={index}
                      className="border-x pb-2 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto">
                      <div className="flex flex-col justify-center items-center xl:w-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                        <div className="top h-5 w-full">
                          <span className="text-gray-500">{moment(day, 'MM/DD').format('DD')}</span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {centre.slots.map((slot, index) => (
                  <tr key={index}
                    className="text-center">
                    <td className="border-x border-b p-1 h-10 xl:w-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto text-gray-500">
                      {slot.slotNo}
                      <br />
                      <span className='text-xs'>
                        {`${moment(slot.startTime,"HH:mm:ss").format("H:mm")}
                        - ${(moment(slot.endTime,"HH:mm:ss").format("H:mm"))}`}
                      </span>
                    </td>
                    {selectedWeek.map((day, index) => (
                      <td
                        key={index}
                        onClick={() => !isDisable(day,slot) && handleClick(slot, day)}
                        className={
                            isDisable(day,slot)
                            ?
                            "border p-1  xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto bg-gray-300"
                            :
                            `${(formCalendar?.slotId===slot.id
                              && formCalendar?.date===moment(day, "MM/DD").format("YYYY-MM-DD")) ? "bg-[#CDFAE7]" : ""} border p-1  xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-300 ease hover:bg-[#CDFAE7]`
                        }>
                      </td>
                    ))}
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  )
}
