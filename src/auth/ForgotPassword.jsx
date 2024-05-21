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
    <div className="w-[440px]">
      <h2 className="text-4xl font-semibold mb-5 text-center">Forgot Password</h2>
      <p className="text-gray-400 text-sm mb-5 text-center">Enter your email and we'll send you a link to get back into your account </p>
      <div>
        <div className='mb-4'>
          <InputText
            id="email"
            name="email"
            placeholder="Enter your email"
            label="Email"
          />
        </div>
        <div>
          <button
            className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
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
