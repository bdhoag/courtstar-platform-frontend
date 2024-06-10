import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosConfig';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
// import Dropdown from '../components/Dropdown';
import CustPayment from '../payment/CustPayment';

const BookingForm = (props) => {
  //HANDLE BOOKING FORM POPUP
  const [custPaymentPopup, setCustPaymentPopup] = useState(false);
  const handleCustPaymentPopup = () => {
    handleClose();
    setCustPaymentPopup(true);
  }
  const handleCustPaymentPopupClose = () => {
    setCustPaymentPopup(false)
  }

  //CLOSE LOGIN MODAL
  const handleClose = () => {
    props.setIsOpen();
  }
  //Function to load customer profile in input field
  useEffect(() => {
    if (localStorage.getItem('token'))
    load();
  }, []);

  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: ""
  });

  const [profileForm, setProfileForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    };


  useEffect(() => {
    setProfileForm({
      fullName: account.firstName + " " + account.lastName,
      email: account.email,
      phone: account.phone,
    });
  }, [account]);

  const load = async () => {
    await axiosInstance.get(`/courtstar/account/myInfor`)
      .then(res => {
        setAccount(res.data.data);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally();
  };

  // const items = ['Item 1', 'Item 2', 'Item 3'];

  // const handleSelect = (item) => {
  //   console.log(`Selected: ${item}`);
  // };

  // // State to keep track of the selected value in the booking type radio buttons
  // const [selectedValue, setSelectedValue] = useState(0);

  // // Function to handle changes in the booking type radio buttons
  // const handleChange = (value) => {
  //   setSelectedValue(value);
  // };
  const html = (
    <div className='font-medium w-[440px] items-center gap-3'>
      <h2 className='font-bold text-4xl text-center mb-3'>Booking</h2>
      <div className='mb-2'>
        <InputText
          id="fullName"
          name="fullName"
          label="Full Name*"
          placeholder='Enter full name'
          onchange={handleChange}
        />
      </div>
      <div className='mb-2'>
        <InputText
          id="phone"
          name="phone"
          label="Phone*"
          placeholder='Enter phone number'
          value={profileForm.phone.trim()}
          onchange={handleChange}
        />
      </div>
      <div className='mb-2'>
        <InputText
          id="email"
          name="email"
          label="Email*"
          placeholder='Enter your email'
          value={profileForm.email.trim()}
          onchange={handleChange}
        />
      </div>
      {/* <div className='relative w-4/5 flex justify-center gap-40 my-1'>
      <div className='text-gray-800 flex items-center gap-3'>
        <input type="radio"
          name="bookingType"
          id="fixed"
          onChange={() => handleChange(2)}
          className='cursor-pointer'
        />
        <label htmlFor="fixed"
          className='cursor-pointer'
        >
          Monthly booking
        </label>
      </div>
      <div className='text-gray-800 flex items-center gap-3'>
        <input type="radio"
          name="bookingType"
          id="once"
          onChange={() => handleChange(1)}
          className='cursor-pointer'
        />
        <label htmlFor="once"
          className='cursor-pointer'
        >
          Day booking
        </label>
      </div>
      <div className='text-gray-800 absolute top-0 -left-[121px]'>
        Choose type*:
      </div>
    </div>
    {(selectedValue === 1) && (<div className='pl-2 relative w-4/5'>
      <input type="date"
        name="date"
        id="date"
        className='border border-gray-300 rounded-lg py-2 px-6 outline-gray-400'
      />
      <button className='ml-4 py-1 px-2 rounded-md bg-gray-800 text-white text-sm hover:bg-gray-900 transition-all ease-in-out duration-300'>
        See available time slots
      </button>
      <div className='text-gray-800 absolute top-2.5 -left-[60px]'>
        Date*:
      </div>
    </div>)}
    {(selectedValue === 2) && (<div className='pl-2 relative w-2/5'>
      <Dropdown
        placeholder="Select role"
        items={items}
        onSelect={handleSelect}
      />
      <div className='text-gray-800 absolute top-2.5 -left-[115px]'>
        Choose day*:
      </div>
    </div>)}
    <div className='pl-2 relative w-2/5'>
      <Dropdown
        placeholder="Select role"
        items={items}
        onSelect={handleSelect}
      />
      <div className='text-gray-800 absolute top-2.5 -left-[117px]'>
        Select court*:
      </div>
    </div>
    <div className='pl-2 relative w-1/2'>
      <div className='flex gap-4 items-center w-full'>
        <Dropdown
          placeholder="Select role"
          items={items}
          onSelect={handleSelect}
        />
      </div>
      <div className='text-gray-800 absolute top-2.5 -left-[62px]'>
        Time*:
      </div>
      <button className='absolute -right-24 top-10 ml-4 py-1 px-3 rounded-md bg-gray-800 text-white text-sm hover:bg-gray-900 transition-all ease-in-out duration-300'>
        Check
      </button>
    </div>
    <div className='pl-2 relative w-1/2'>
      <div className='flex gap-4 items-center w-full'>
        <Dropdown
          placeholder="Select role"
          items={items}
          onSelect={handleSelect}
        />
      </div>
      <div className='text-gray-800 absolute top-2.5 -left-[31px]'>
        to:
      </div>
    </div> */}
      <div className='mb-2'>
        <InputText
          label="Price"
        />
      </div>
      <div className='mb-4'>
        <InputText
          label="Note"
        />
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
          onClick={handleCustPaymentPopup}
        >
          Confirm
        </button>
      </div>
    </div>
  )
  return (
    <div>
      <PopupModal
        html={html}
        isOpen={props.isOpen}
        setIsOpen={handleClose}
      />
      <CustPayment
        isOpen={custPaymentPopup}
        setIsOpen={handleCustPaymentPopupClose}
      />
    </div>
  )

}

export default BookingForm;
