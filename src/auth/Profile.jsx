import React, { useEffect, useState } from 'react';
import InputText from '../components/InputText';
import axiosInstance from '../config/axiosConfig';

function Profile(){

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
    email: "",
    phone: "",
    password: ""
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfileForm(prevProfileForm => ({
  //     ...prevProfileForm,
  //     [name]: value
  //   }));
  // };

  useEffect(() => {
    setProfileForm({
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      phone: account.phone,
      password: "********"
    });
  }, [account]);

  const load =  async () => {
    await  axiosInstance.get(`/courtstar/account/myInfor`)
                .then(res => {
                  setAccount(res.data.data);
                })
                .catch(error => {
                  console.log(error.message);
                })
                .finally();
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
                placeholder={profileForm.firstName}
              />
              <InputText
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder={profileForm.lastName}
              />
            </div>
            <div className='mb-4'>
              <InputText
                id="email"
                name="email"
                label="Email"
                placeholder={profileForm.email}
              />
            </div>
            <div className='mb-4'>
              <InputText
                id="phone"
                name="phone"
                label="Phone"
                placeholder={profileForm.phone}
              />
            </div>
            <div className='mb-0'>
              <InputText
                id="password"
                name="password"
                label="Password"
                placeholder={profileForm.password}
              />
            </div>
            <div className='text-gray-500 text-xs py-1 px-0.5 text-center'>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Profile;
