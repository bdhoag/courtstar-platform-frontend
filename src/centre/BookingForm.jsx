import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosConfig';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
// import Dropdown from '../components/Dropdown';

const BookingForm = (props) => {
  //HANDLE BOOKING FORM POPUP
  const handleCustPayment = async() => {
    handleClose();
    await axiosInstance.post(`/courtstar/payment/create-order`, bookingForm)
      .then(res => {
        console.log(res.data.orderurl);
        window.location.href = res.data.orderurl;
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally();
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

  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    amount: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookingForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    };


  useEffect(() => {
    setBookingForm({
      fullName: (account.firstName + " " + account.lastName).trim(),
      email: account.email,
      phoneNumber: account.phone,
      amount: 0,
      description: ""
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
          value={bookingForm.fullName}
          onchange={handleChange}
        />
      </div>
      <div className='mb-2'>
        <InputText
          id="phoneNumber"
          name="phoneNumber"
          label="Phone*"
          placeholder='Enter phone number'
          value={bookingForm.phoneNumber}
          onchange={handleChange}
        />
      </div>
      <div className='mb-2'>
        <InputText
          id="email"
          name="email"
          label="Email*"
          placeholder='Enter your email'
          value={bookingForm.email}
          onchange={handleChange}
        />
      </div>
      <div className='mb-2'>
        <InputText
          label="Price"
          id="amount"
          name="amount"
          value={bookingForm.amount}
          onchange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <InputText
          label="Note"
          id="description"
          name="description"
          placeholder='Note something'
          value={bookingForm.description}
          onchange={handleChange}
        />
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
          onClick={handleCustPayment}
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
      {/* <CustPayment
        isOpen={custPaymentPopup}
        setIsOpen={handleCustPaymentPopupClose}
      /> */}
    </div>
  )

}

export default BookingForm;
