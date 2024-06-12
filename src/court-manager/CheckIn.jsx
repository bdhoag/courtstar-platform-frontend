import InputText from "../components/InputText";
import Dropdown from "../components/Dropdown";
import PopupModal from "../components/PopupModal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import axiosInstance from "../config/axiosConfig";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const CheckIn = (props) => {
  const { t } = useTranslation();
  const { id } = useParams(); // Get the booking ID from the URL parameters
  const [apiCheckin, setApiCheckin] = useState(props.apiCheckin || []); // State to hold the check-in data from the API
  const [checkInPopup, setCheckInPopup] = useState(false); // State to control the visibility of the check-in popup
  const [formCheckIn, setFormCheckIn] = useState({ // State to hold the form data for the check-in popup
    checkinId: '',
    startTime: '',
    endTime: '',
    slotNo: '',
    totalPrice: '',
    status: ''
  });

  // Function to open the check-in popup with the specified check-in details
  const handleCheckInPopup = (checkinId, startTime, endTime, slotNo, totalPrice, status) => {
    setFormCheckIn({
      checkinId,
      startTime,
      endTime,
      slotNo,
      totalPrice,
      status
    });
    setCheckInPopup(true);
  };

  // Effect to load the check-in data when the component mounts or when the booking ID changes
  useEffect(() => {
    const loadCheckIn = async () => {
      try {
        const res = await axiosInstance.get(`/courtstar/booking/${id}`);
        setApiCheckin(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    loadCheckIn();
  }, [id]);

  // Function to handle the check-in process
  const handleCheckin = async (checkInId) => {
    try {
      const res = await axiosInstance.post(`/courtstar/check-in/${checkInId}`);
      if (res.data.data) {
        handleCheckInPopupClose();
        toast.success('Check-in successfully', {
          toastId: 'checkin-success'
        });
        // Reload the check-in data after successful check-in
        const loadCheckIn = async () => {
          try {
            const res = await axiosInstance.get(`/courtstar/booking/${id}`);
            setApiCheckin(res.data.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        loadCheckIn();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to handle the check-in process
  const handleUndoCheckin = async (checkInId) => {
    try {
      const res = await axiosInstance.post(`/courtstar/check-in/undo/${checkInId}`);
      if (res.data.data) {
        handleCheckInPopupClose();
        toast.success('Undo check-in successfully', {
          toastId: 'undo-checkin-success'
        });
        // Reload the check-in data after successful check-in
        const loadCheckIn = async () => {
          try {
            const res = await axiosInstance.get(`/courtstar/booking/${id}`);
            setApiCheckin(res.data.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        loadCheckIn();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to close the check-in popup
  const handleCheckInPopupClose = () => {
    setCheckInPopup(false);
  };

  // Options for the slot dropdown
  const optionDropdownSlot = [
    '1 (7:00-8:00)', '2 (8:00-9:00)', '3 (9:00-10:00)', '4 (10:00-11:00)', '5 (11:00-12:00)', '6 (12:00-13:00)', '7 (13:00-14:00)', '8 (14:00-15:00)'
  ];

  // Function to handle slot selection
  const handleSelectSlot = (item) => {
    console.log(`Selected: ${item}`);
  };

  // Options for the date dropdown
  const optionDropdownDate = [
    '12/06', '13/06', '14/06', '15/06', '16/06', '17/06', '18/06', '19/06', '20/06', '21/06', '22/06', '23/06', '24/06', '25/06', '26/06', '27/06', '28/06', '29/06', '30/06', '01/07', '02/07', '03/07', '04/07', '05/07', '06/07', '07/07', '08/07', '09/07', '10/07', '11/07', '12/07', '13/07', '14/07', '15/07', '16/07', '17/07', '18/07', '19/07', '20/07'
  ];

  // Function to handle date selection
  const handleSelectDate = (item) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div className="w-[70rem] my-12">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">
          Check in ({apiCheckin.length})
        </div>
      </div>

      <div className="bg-white rounded-xl mt-4">
        <div className="px-10 pt-6 flex justify-between gap-1">
          <div className="w-3/12">
            <InputText
              id="name"
              name="name"
              placeholder={t('enterUserName')}
              label={t('fullName')}
            />
          </div>
          <div className="w-3/12">
            <InputText
              id="email"
              name="email"
              placeholder={t('enterUserEmail')}
              label="Email"
            />
          </div>
          <div className="w-2/12">
            <Dropdown
              label="Date"
              items={optionDropdownDate}
              onSelect={handleSelectDate}
              placeholder="Select date"
            />
          </div>
          <div className="w-2/12">
            <InputText
              id="phone"
              name="phone"
              placeholder={t('enterUserPhone')}
              label={t('phone')}
            />
          </div>
          <div className="w-2/12 pr-3">
            <Dropdown
              label={t('slot')}
              items={optionDropdownSlot}
              placeholder={t('selectSlot')}
              onSelect={handleSelectSlot}
              itemClassName="!px-4 !text-sm"
              buttonClassName="!px-3"
            />
          </div>
          <div className="w-9"></div>
        </div>
        <div className="divide-y-2">
          {apiCheckin.map((checkin) => (
            <div key={checkin.id} className="px-10 py-3 flex items-center justify-between">
              <div className="w-3/12 px-3 truncate">
                {checkin?.account?.firstName} {checkin?.account?.lastName}
                {checkin?.guest?.fullName}
              </div>
              <div className="w-3/12 px-3 truncate">
                {checkin?.account?.email}
                {checkin?.guest?.email}
              </div>
              <div className="w-2/12 flex justify-center">
                {moment(checkin?.date, 'yyyy-MM-DD').format('DD/MM')}
              </div>
              <div className="w-2/12 flex justify-center">
                {checkin?.account?.phone}
                {checkin?.guest?.phone}
              </div>
              <div className="w-2/12 flex flex-col justify-center items-center font-semibold">
                {checkin?.slot?.slotNo}
                <div className="text-sm font-normal">
                  ({moment(checkin?.slot?.startTime, 'HH:mm:ss').format('HH:mm')} - {moment(checkin?.slot?.endTime, 'HH:mm:ss').format('HH:mm')})
                </div>
              </div>
              <button
                onClick={
                  () => handleCheckInPopup(checkin.id, checkin?.slot?.startTime, checkin?.slot?.endTime, checkin?.slot?.slotNo,
                    checkin?.totalPrice, checkin?.status)
                }
                className="p-2 rounded-full bg-slate-100 hover:bg-primary-green hover:text-white ease-in-out duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={checkin?.status ? "lucide lucide-undo-2" : "lucide lucide-calendar-check"}
                >
                  {checkin?.status ? (
                    <>
                      <path d="M9 14 4 9l5-5" />
                      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                    </>
                  ) : (
                    <>
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                      <path d="m9 16 2 2 4-4" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <PopupModal
        isOpen={checkInPopup}
        setIsOpen={handleCheckInPopupClose}
        html={
          <div className="flex gap-7 max-w-5xl">
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-xl">
                {props.centreDetail.name}
              </div>
              <div>
                <span className="font-semibold">Address: </span>
                {props.centreDetail.address}
              </div>
              <div className="flex gap-3">
                <div>
                  <span className="font-semibold">Slot: </span>
                  ({moment(formCheckIn.startTime, 'HH:mm:ss').format('HH:mm')} - {moment(formCheckIn.endTime, 'HH:mm:ss').format('HH:mm')})
                </div>
                <div>
                  <span className="font-semibold">Court number: </span>
                  {formCheckIn.slotNo}
                </div>
              </div>
              <div>
                <span className="font-semibold">Total price: </span>
                <span className="font-semibold text-rose-600">{formCheckIn.totalPrice}₫/h</span>
              </div>
              <div className="text-sm flex justify-center gap-20">
                <button
                  className="block text-center py-1 w-full border bg-primary-green text-white rounded-md font-semibold hover:bg-teal-900 transition-all ease-in-out duration-300"
                  onClick={
                    formCheckIn.status
                      ?
                      () => {
                        handleUndoCheckin(formCheckIn.checkinId);
                      }
                      :
                      () => {
                        handleCheckin(formCheckIn.checkinId);
                      }
                  }
                >
                  {formCheckIn.status
                    ?
                    'Undo'
                    :
                    'Check in'
                  }
                </button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CheckIn;
