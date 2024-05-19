import React, { useState } from 'react';
import google from './assets/images/google.svg';

function PartnerRegister() {
  return (
    <div>
      <div className='flex'>
        <div className='bg-gray-500 basis-1/2'></div>
        <div className='max-w-md mx-auto py-8 px-4 bg-white'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Partner Register</h2>
          <form>
            <div className='mb-4 flex'>
              <div className='mr-2 w-1/2'>
                <label className='block text-gray-700 font-bold mb-2'>
                  First Name*
                </label>
                <input
                  className='border rounded-lg py-2 px-3 text-gray-700'
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className='ml-2 w-1/2'>
                <label className='block text-gray-700 font-bold mb-2'>
                  Last Name*
                </label>
                <input
                  className='border rounded-lg py-2 px-3 text-gray-700'
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Email*
              </label>
              <input
                className='border rounded-lg py-2 px-3 text-gray-700 w-full'
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Phone*
              </label>
              <input
                className='border rounded-lg py-2 px-3 text-gray-700 w-full'
                id="phone"
                type="tel"
                placeholder="Enter your phone"
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 font-bold mb-2'>
                Password*
              </label>
              <input
                className='border rounded-lg py-2 px-3 text-gray-700 w-full'
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              <p className='text-gray-600 text-xs text-center'>
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
            </div>
            <div className='flex items-start mb-5'>
              <div className='flex items-center h-5'>
                <input id="terms" type="checkbox" value=""
                  className='' required />
              </div>
              <label for="terms" class="ms-2 text-sm font-medium">Agree to our <a href="#" class="underline">Terms of use</a> and <a
                  href='#'
                  className='underline'> Privacy Policy</a></label>
            </div>
            <div className='flex items-center justify-center'>
              <button
                className='bg-primary-green hover:bg-green-700 text-white font-bold  border rounded-full w-48 h-14'
                type="submit"
              >
                Sign up
              </button>
            </div>
            <div className='mt-10 text-center'>
              Already have an account?
              <a
                className='font-semibold underline text-sm'
                href="#"
              >Log in
              </a>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}

export default PartnerRegister;
