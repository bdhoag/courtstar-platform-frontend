import React, { useState, useEffect } from 'react';
import InputText from '../components/InputText';
import Dialog from '../components/Dialog';
import Password from '../components/Password';
import { useTranslation } from 'react-i18next';
import axiosInstance from "../config/axiosConfig";
import { toast } from "react-toastify";
function AddStaff(props) {
  const { t } = useTranslation();
  //Close ADD
  const handleClose = () => {
    props.setIsOpen();
  }


  const [addStaff, setAddStaff] = useState({
    centreId: props.id,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddStaff(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleAddStaff = async () => {
    await axiosInstance.post(`/courtstar/account/staff`, addStaff)
      .then(res => {
        toast.success("Add Staff Successfully!", {
          toastId: 'add-staff-success'
        });
        handleClose();
      })
      .catch(error => {
        toast.error(error.message, {
          toastId: 'add-staff-error'
        });
      })
      .finally();
  }

  const clearForm = () => {
    setAddStaff({
      centreId: props.id,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    });
  }

  const html = (
    <div className="">
      <div>
        <div className='mb-4 flex gap-5'>
          <InputText
            id="firstName"
            name="firstName"
            placeholder={t('enterFirstName')}
            label={t('firstName')}
            value={addStaff.firstName}
            onchange={handleChange}
          />
          <InputText
            id="lastName"
            name="lastName"
            placeholder={t('enterLastName')}
            label={t('lastName')}
            value={addStaff.lastName}
            onchange={handleChange}
          />
        </div>
        <div className="mb-4">
          <InputText
            id="email"
            name="email"
            placeholder={t('enterStaffEmail')}
            label="Email"
            value={addStaff.email}
            onchange={handleChange}
          />
        </div>
        <div className="mb-4">
          <InputText
            id="phone"
            name="phone"
            placeholder={t('enterStaffPhone')}
            label={t('phone')}
            value={addStaff.phone}
            onchange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Password
            id="password"
            name="password"
            placeholder={t('enterStaffPassword')}
            label={t('password')}
            value={addStaff.password}
            onchange={handleChange}
            evaluate={true}
          />
        </div>
      </div>
    </div>
  )
  return (
    <div>
      <Dialog
        html={html}
        isOpen={props.isOpen}
        setIsOpen={handleClose}
        title='staff information'
        submit={handleAddStaff}
        clearForm={clearForm}
      />
    </div>
  );
}
export default AddStaff;
