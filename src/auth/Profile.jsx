import React, { useEffect, useState } from 'react';
import InputText from '../components/InputText';
import axiosInstance from '../config/axiosConfig';
import { toast } from 'react-toastify';

function Profile() {

  useEffect(() => {
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
    firstName: "",
    lastName: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prevProfileForm => ({
      ...prevProfileForm,
      [name]: value
    }));
  };

  useEffect(() => {
    setProfileForm({
      firstName: account.firstName,
      lastName: account.lastName,
      phone: account.phone,
      password: ""
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

  const handleUpdate = async () => {
    const { email, ...updateData } = profileForm;
    try {
      await axiosInstance.put(`/courtstar/account/${localStorage.getItem('account_id')}`, updateData);
      toast.success("Profile updated successfully!", {
        toastId: 'update-success'
      });
      setAccount(updateData); // Update account with new data
    } catch (error) {
      toast.error(error.message, {
        toastId: 'update-error'
      });
    }
  };

  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>

      <div className='items-center bg-gray-100 py-10'>
        <div className='max-w-xl mx-auto py-8 px-16 bg-white rounded-lg'>
          <h2 className='text-2xl font-bold mb-6 text-center'
          >
            Your Profile
          </h2>
          <div>
            <div className='mb-4 flex gap-5'>
              <InputText
                id="firstName"
                name="firstName"
                label="First Name"
                onchange={handleChange}
                value={profileForm.firstName}
              />
              <InputText
                id="lastName"
                name="lastName"
                label="Last Name"
                onchange={handleChange}
                value={profileForm.lastName}
              />
            </div>
            <div className='mb-4'>
              <InputText
                id="email"
                name="email"
                label="Email"
                value={account.email}
                disabled={true}
              />
            </div>
            <div className='mb-4'>
              <InputText
                id="phone"
                name="phone"
                label="Phone"
                onchange={handleChange}
                value={profileForm.phone}
              />
            </div>
            <div className='mb-3'>
              <InputText
                id="password"
                name="password"
                label="Password"
                onchange={handleChange}
                value={profileForm.password}
              />
            </div>
            <div className="pb-5 px-5 pt-3 -mx-5 font-semibold flex gap-6">
              <button className="flex justify-center items-center gap-2.5 text-white bg-primary-green w-1/2 py-2 rounded-md hover:bg-teal-900 ease-in-out duration-300 cursor-pointer" onClick={handleUpdate} type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                <div className="">
                  Update
                </div>
              </button>
              <div className="flex justify-center bg-white gap-2.5 text-red-600 border-2 border-red-600 w-1/2 py-2 rounded-md hover:bg-red-600 hover:text-white ease-in-out duration-300 cursor-pointer">
                <div className="">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Profile;
