import React from 'react';
import register from '../assets/images/register.png';
import google from '../assets/images/google.svg';
import InputText from '../components/InputText';

function PartnerRegister() {
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
            <h2 className='text-2xl font-semibold mb-6 text-center'>Customer Register</h2>
            <div>
              <div className='mb-4 flex gap-5'>
                <InputText
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  label="First Name*"
                />
                <InputText
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  label="Last Name*"
                />
              </div>
              <div className='mb-4'>
                <InputText
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  label="Email*"
                />
              </div>
              <div className='mb-4'>
                <InputText
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                  label="Phone*"
                />
              </div>
              <div className='mb-6'>
                <InputText
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  label="Password*"
                />
                <div className='text-gray-500 text-xs py-1 px-0.5'>
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </div>
              </div>
              <div className='flex items-center justify-center mb-5'>
                <div className='flex items-center h-5'>
                  <input id="terms" type="checkbox" value=""
                    className='' required />
                </div>
                <label className="ms-2 text-sm font-medium">Agree to our <a href="#tou" className="underline">Terms of use</a> and <a
                  href='#pp'
                  className='underline'> Privacy Policy</a></label>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  className='bg-primary-green hover:bg-teal-900 text-white font-medium border rounded-full w-48 h-12 transition-all duration-300 ease-in-out'
                  type="submit"
                >
                  Sign up
                </button>
              </div>
              <div className='flex justify-center my-5 '>
                <button
                  className="text-sm border border-black rounded-full py-3 px-4 w-96 inline-flex items-center hover:bg-gray-200 transition-all duration-300 ease-in-out"
                >
                  <img className='mx-7'
                    src={google}
                    alt='google'
                  />
                  Sign up with your Google account
                </button>
              </div>
              <div className='mt-10 text-sm text-center justify-center flex gap-1.5'>
                <span>Already have an account?</span>
                <a
                  className='font-semibold underline text-sm'
                  href="#login"
                >Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default PartnerRegister;
