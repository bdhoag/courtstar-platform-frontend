// @ts-nocheck
import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosConfig';
import InputText from '../components/input-text';
import PopupModal from '../components/PopupModal';
import Button from '../components/button';

const BookingForm = (props) => {
  const [loading, setLoading] = useState(false);

  //CLOSE BOOKING MODAL
  const handleClose = () => {
    props.setIsOpen();
  }
  //Function to load customer profile in input field
  useEffect(() => {
    if (localStorage.getItem('token'))
    load();
  }, []);

  const [account, setAccount] = useState();
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [paymentForm, setPaymentForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    if(account)
    setPaymentForm({
      fullName: (account.firstName + " " + account.lastName).trim(),
      email: account.email,
      phone: account.phone,
      description: ""
    });
  }, [account]);

  useEffect(() => {
    setBookingForm((prevForm) => ({
      ...prevForm,
      fullName: paymentForm.fullName,
      email: paymentForm.email,
      phone: paymentForm.phone,
  }));
  }, [paymentForm]);

  useEffect(() => {
    setBookingForm((prevForm) => ({
        ...prevForm,
        ...props.formCalendar,
    }));
}, [props.formCalendar]);

  useEffect(() => {
    setPaymentForm((prevForm) => ({
      ...prevForm,
      amount: props.centre.pricePerHour,
    }));
  }, [props.centre]);

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

  const handlePayment = async() => {
    setLoading(true);
    await axiosInstance.post(`/courtstar/payment/create-order`, paymentForm)
      .then(res => {
        localStorage.setItem("bookingForm", JSON.stringify(bookingForm));
        window.location.href = res.data.orderurl;
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(()=>{
        setLoading(false);
        handleClose();
      });
  }

  useEffect(() => {
    console.log(bookingForm);
  }, [bookingForm]);
  useEffect(() => {
    console.log(paymentForm);
  }, [paymentForm]);

  const html = (
    <div className='font-medium w-[440px] items-center gap-3'>
      <h2 className='font-bold text-4xl text-center mb-3'>Booking</h2>
      <div className='mb-2'>
        <InputText
          id="fullName"
          name="fullName"
          label="Full Name*"
          placeholder='Enter full name'
          value={paymentForm.fullName || ""}
          onchange={handleChange}
          disabled={account?.firstName}
        />
      </div>
      <div className='mb-2'>
        <InputText
          id="phone"
          name="phone"
          label="Phone*"
          placeholder='Enter phone number'
          value={paymentForm.phone || ""}
          onchange={handleChange}
          disabled={account?.phone}
        />
      </div>
      <div className='mb-2'>
        <InputText
          id="email"
          name="email"
          label="Email*"
          placeholder='Enter your email'
          value={paymentForm.email || ""}
          onchange={handleChange}
          disabled={account?.email}
        />
      </div>
      <div className='mb-4'>
        <InputText
          label="Note"
          id="description"
          name="description"
          placeholder='Note something'
          value={paymentForm.description || ""}
          onchange={handleChange}
        />
      </div>
      <div className='flex items-center justify-center'>
        <Button
          label='Confirm'
          fullWidth
          fullRounded
          size='medium'
          className='bg-primary-green hover:bg-teal-900 text-white'
          loading={loading}
          onClick={handlePayment}
        />
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
        setIsOpen={handlePaymentPopupClose}
      /> */}
    </div>
  )

}

export default BookingForm;
