import PopupModal from '../components/PopupModal';
import React, { useState } from 'react';

function CheckEmail(props) {
  const handleClose = () => {
    props.setIsOpen();
  }
  const html = (
    <div className='max-w-md mx-auto py-8 px-4'>
      <h2 className='text-4xl font-semibold mb-4 text-center'>Check Your Email</h2>
      <p class="text-gray-400 text-sm font-semibold mb-8 text-center">
        <span>We sent a reset link to </span>
        <span class="font-bold text-black">contact@dscode.com</span>
        <br />
        enter 5 digit code that mentioned in the email
      </p>
      <div className='flex items-center justify-evenly mb-8'>
        <input type="text"
          className='text-center border-2 rounded-md h-12 w-12' autofocus="" maxLength='1' />
        <input type="text"
          className='text-center border-2 rounded-md h-12 w-12' maxLength='1' />
        <input type="text"
          className='text-center border-2 rounded-md h-12 w-12' maxLength='1' />
        <input type="text"
          className='text-center border-2 rounded-md h-12 w-12' maxLength='1' />
        <input type="text"
          className='text-center border-2 rounded-md h-12 w-12' maxLength='1' />
      </div>
      <div className='flex items-center justify-center px-10'>
        <button
          className='bg-primary-green hover:bg-teal-900 text-white border rounded-full w-full h-10'
        > Verify Code
        </button>
      </div>
      <div className='mt-10 text-sm text-center justify-center flex gap-1.5 font-semibold text-gray-400'>
        <span>Haven't got the email yet?</span>
        <a
          className='font-semibold text-blue-500 underline'
          href="#login"
        >Resend email
        </a>
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
    </div>
  );
}
export default CheckEmail;
