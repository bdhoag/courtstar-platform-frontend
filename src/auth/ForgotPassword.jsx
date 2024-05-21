import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
import React, { useState } from 'react';
import CheckEmail from './CheckEmail';
function ForgotPassword(props) {
  //HANDLE CHECK EMAIL POPUP
  const [checkEmailPopup, setCheckEmailPopup] = useState(false);
  const handleCheckEmailPopup = () => {
    handleClose();
    setCheckEmailPopup(true);
  }
  const handleCheckEmailPopupClose = () => {
    setCheckEmailPopup(false)
  }

  //CLOSE FORGET PASSWORD MODAL
  const handleClose = () => {
    props.setIsOpen();
  }

  const html = (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-3 text-center">Forgot Password</h2>
      <p className="text-gray-400 text-xs mb-6 text-center">Enter your email and we'll send you a link to get back into your account </p>
      <div>
        <div className="mb-4 px-10 text-xs">
          <InputText
            id="emailOrPhone"
            name="emailOrPhone"
            placeholder="Enter your Email"
            label="Your Email"
          />
        </div>
        <div className='flex items-center justify-center px-10'>
          <button
            className='bg-primary-green hover:bg-teal-900 text-white border rounded-full w-full h-10'
            onClick={handleCheckEmailPopup}
          > Send Code
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <PopupModal
        html={html}
        isOpen={props.isOpen}
        setIsOpen={handleClose}
      />
      <CheckEmail
        isOpen={checkEmailPopup}
        setIsOpen={handleCheckEmailPopupClose}
      />
    </div>
  );
}
export default ForgotPassword;
