import InputText from "../components/InputText";
import Dropdown from "../components/Dropdown"
import PopupModal from "../components/PopupModal";
import { useState } from "react";
import { toast } from "react-toastify";
const CheckIn = (props) => {
  //HANDLE  POPUP
  const [checkInPopup, setCheckInPopup] = useState(false);
  const handleCheckInPopup = () => {
    setCheckInPopup(true);
  }
  const handleCheckInPopupClose = () => {
    setCheckInPopup(false)
  }
  const apiCheckin = props.apiCheckin;

  const optionDropdownSlot = [
    '1 (7:00-8:00)', '2 (8:00-9:00)', '3 (9:00-10:00)', '4 (10:00-11:00)', '5 (11:00-12:00)', '6 (12:00-13:00)', '7 (13:00-14:00)', '8 (14:00-15:00)'
  ]

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div className="w-[70rem] my-12">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">
          Check in
        </div>
      </div>

      <div className="bg-white rounded-xl mt-4">
        <div className="px-10 pt-6 flex justify-between gap-1">
          <div className="w-4/12">
            <InputText
              id="name"
              name="name"
              placeholder="Enter the user's name"
              label="Name"
            />
          </div>
          <div className="w-1/3">
            <InputText
              id="email"
              name="email"
              placeholder="Enter the user's email"
              label="Email"
            />
          </div>
          <div className="w-1/6">
            <InputText
              id="phone"
              name="phone"
              placeholder="Enter the user's phone number"
              label="Phone number"
            />
          </div>
          <div className="w-2/12 flex flex-col gap-2 pr-3">
            <div className="text-gray-800 font-semibold">
              Slot
            </div>
            <Dropdown
              items={optionDropdownSlot}
              placeholder={'Select slot'}
              onSelect={handleSelect}
              itemClassName='!px-4 !text-sm '
              buttonClassName='!px-3'
            />
          </div>
          <div className="w-9">
          </div>
        </div>
        <div className="divide-y-2">
          {apiCheckin.map((checkin) => (
            <div key={checkin.id} className="px-10 py-3 flex items-center justify-between">
              <div className="w-4/12 px-3 truncate">
                {checkin.name}
              </div>
              <div className="w-4/12 px-3 truncate">
                {checkin.email}
              </div>
              <div className="w-2/12 flex justify-center">
                {checkin.phone}
              </div>
              <div className="w-2/12 flex justify-center font-semibold">
                {checkin.Slot}
              </div>
              <button
                onClick={handleCheckInPopup}
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
                  className="lucide lucide-calendar-check"
                >
                  <path d="M8 2v4" /><path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" /><path d="m9 16 2 2 4-4" />
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
          <div className='flex gap-7 max-w-5xl'>

            <div className='flex flex-col gap-3'>
              <div className='font-semibold text-xl'>
                Sân cầu lông Đại học FPT Hồ Chí Minh
              </div>
              <div>
                <span className='font-semibold'>Address: </span>
                Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
              </div>
              <div className='flex gap-3'>
                <div>
                  <span className='font-semibold'>Slot: </span>
                  10h-12h
                </div>
                <div>
                  <span className='font-semibold'>Court number: </span>
                  2
                </div>
              </div>
              <div>
                <span className='font-semibold'>Total price: </span>
                <span className='font-semibold text-rose-600'>200.000₫/h</span>
              </div>
              <div className='text-sm flex justify-center gap-20'>
                <button className='block text-center py-1 w-full border bg-primary-green text-white rounded-md font-semibold hover:bg-teal-900 transition-all ease-in-out duration-300'
                  onClick={() => {
                    handleCheckInPopupClose();
                    toast.success('Check-in successfully', {
                      toastId: 'checkin-success'
                    });
                  }}>
                  Checkin
                </button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default CheckIn;
