import PopupModal from '../components/PopupModal';
import React, { useState } from 'react';
import SetNewPassword from './SetNewPassword';
import PinCode from '../components/PinCode';

function CheckEmail(props) {
  //CLOSE CHECK EMAIL POPUP
  const handleClose = () => {
    props.setIsOpen();
  }

  //HANDLE NEW PASSWORD POPUP
  const [newPasswordPopup, setNewPasswordPopup] = useState(false);
    const handleSetNewPasswordPopup = () => {
        handleClose();
        setNewPasswordPopup(true);
    }
    const handleSetNewPasswordPopupClose = () => {
        setNewPasswordPopup(false)
    }

  const html = (
    <div className='w-[440px]'>
      <h2 className="text-4xl font-semibold mb-5 text-center">Check Your Email</h2>
      <p className="text-gray-400 text-sm mb-5 text-center">
        <span>We sent a reset link to </span>
        <span className="font-semibold text-black">contact@dscode.com</span>
        <br />
        enter 5 digit code that mentioned in the email
      </p>

      <PinCode />

      <div className='flex items-center justify-center'>
        <button
          className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
          onClick={handleSetNewPasswordPopup}
        > Verify Code
        </button>
      </div>
      <div className='mt-5 text-sm text-center justify-center flex gap-1.5 text-gray-400'>
        <span>Haven't got the email yet?</span>
        <a
          className='font-semibold text-gray-800 underline'
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
      <SetNewPassword
          isOpen={newPasswordPopup}
          setIsOpen={handleSetNewPasswordPopupClose}
        />
    </div>
  );
}
export default CheckEmail;
