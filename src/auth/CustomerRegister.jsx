import React, { useState } from 'react';
import register from '../assets/images/register.png';
import google from '../assets/images/google.svg';
import InputText from '../components/input-text';
import axiosInstance from '../config/axiosConfig';
import { toast } from 'react-toastify';
import Password from '../components/password';
import { useTranslation } from 'react-i18next';

function CustomerRegister() {
  const { t } = useTranslation();
  //HANDLE CHECK BOX PRIVACY
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  //HANDLE REGISTER ACTION
  const [formCustomerRegister, setFormCustomerRegister] = useState({
    email: '',
    password: '',
    phone: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormCustomerRegister((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    await axiosInstance.post(`/courtstar/account`, formCustomerRegister)
      .then(res => {
        toast.success("Register successfully!", {
          toastId: 'login-success'
        });
      })
      .catch(error => {
        toast.error(error.message, {
          toastId: 'login-error'
        });
      })
      .finally();
  };

  // const handleGoogleRegister = async () => {
  //   await  axiosInstance.post(`/courtstar/account/createEmail`)
  //               .then(res => {

  //               })
  //               .catch(error => {

  //               })
  //               .finally();
  // };

  return (
    <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
      <div className='max-h-[800px] overflow-hidden flex items-center'>
        <div className='bg-gray-500 basis-1/2'>
          <img src={register}
            alt="register"
            className='object-contain'
          />
        </div>
        <div className='basis-1/2'>
          <div className='max-w-lg mx-auto py-8 px-4 bg-white'>
            <h2 className='text-2xl font-semibold mb-6 text-center'>{t('customerRegister')}</h2>
            <div>
              <div className='mb-4 flex gap-5'>
                <InputText
                  id="firstName"
                  name="firstName"
                  placeholder={t('enterFirstName')}
                  label={t('firstName')}
                  value={formCustomerRegister.firstName}
                  onchange={handleChange}
                />
                <InputText
                  id="lastName"
                  name="lastName"
                  placeholder={t('enterLastName')}
                  label={t('lastName')}
                  value={formCustomerRegister.lastName}
                  onchange={handleChange}
                />
              </div>
              <div className='mb-4'>
                <InputText
                  id="email"
                  name="email"
                  placeholder={t('enterEmail')}
                  label="Email*"
                  value={formCustomerRegister.email}
                  onchange={handleChange}
                />
              </div>
              <div className='mb-4'>
                <InputText
                  id="phone"
                  name="phone"
                  placeholder={t('enterPhone')}
                  label={t('phone')}
                  value={formCustomerRegister.phone}
                  onchange={handleChange}
                />
              </div>
              <div className='mb-6'>
                <Password
                  id="password"
                  name="password"
                  placeholder={t('enterPassword')}
                  label={t('password')}
                  value={formCustomerRegister.password}
                  onchange={handleChange}
                  evaluate={true}
                />
                <div className='text-gray-500 text-xs py-1 px-0.5'>
                  {t('conditionPassword')}
                </div>
              </div>
              <div className='flex items-center justify-center mb-5'>
                <div className='flex items-center h-5'>
                  <input id="terms"
                    type="checkbox"
                    value="ON"
                    className=''
                    required
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label className="ms-2 text-sm font-medium">{t('agreeToOur')} <a href="#tou" className="underline">{t('termOfUse')}</a> {t('and')} <a
                  href='#pp'
                  className='underline'> {t('privacyPolicy')}</a></label>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  className='bg-primary-green hover:bg-teal-900 disabled:bg-opacity-65 disabled:pointer-events-none text-white font-medium border rounded-full w-48 h-12 transition-all duration-300 ease-in-out'
                  disabled={!isChecked}
                  onClick={handleRegister}
                >
                  {t('signUp')}
                </button>
              </div>
              <div className='flex justify-center my-5 '>
                <a
                  className="text-sm border border-black rounded-full py-3 px-4 w-96 inline-flex items-center hover:bg-gray-200 transition-all duration-300 ease-in-out"
                  href='http://localhost:8080/courtstar/account/createEmail'
                  target='_blank'
                  rel="noreferrer"
                >
                  <img className='mx-7'
                    src={google}
                    alt='google'
                  />
                  {t('signUpWithGoogleAccount')}
                </a>
              </div>
              <div className='mt-10 text-sm text-center justify-center flex gap-1.5'>
                <span>{t('alreadyHaveAnAccount')}?</span>
                <a
                  className='font-semibold underline text-sm'
                  href="#login"
                >{t('logIn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default CustomerRegister;
