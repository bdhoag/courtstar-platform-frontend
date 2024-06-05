import React, { useEffect, useState } from 'react';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
import ResetPassword from './ResetPassword';
import axiosInstance from '../config/axiosConfig';
import { toast } from 'react-toastify';

function ForgotPassword(props) {
  //HANDLE CHECK EMAIL POPUP
  const [checkEmailPopup, setCheckEmailPopup] = useState(false);
  const [otpTimeCount, setOtpTimeCount] = useState('');

  const handleCheckEmailPopup = async (event) => {
    event.preventDefault();
    await axiosInstance.put(`/courtstar/account/regenerate-otp`, email)
      .then((res) => {
        setOtpTimeCount(res.data.data);
        handleClose();
        setCheckEmailPopup(true);
      })
      .catch(error => {
        toast.error(error.message, {
          toastId: 'email-error'
        });
      })
      .finally(
        () => {
        }
      );

  };
  const handleCheckEmailPopupClose = () => {
    setCheckEmailPopup(false);
  };

  //CLOSE FORGET PASSWORD MODAL
  const handleClose = () => {
    props.setIsOpen(false);
  };

  //form
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (props.isOpen)
      setEmail('');
  }, [props.isOpen])

  const html = (
    <div className="w-[440px]">
      <div className="text-4xl font-semibold mb-5 text-center">
        Forgot Password
      </div>
      <div className="text-gray-400 text-sm mb-5 text-center">
        Enter your email and we'll send you a code to verify your email!
      </div>
      <div>
        <div className='mb-4'>
          <InputText
            id="emailForget"
            name="emailForget"
            placeholder="Enter your email"
            label="Email"
            value={email}
            onchange={handleInputChange}
          />
        </div>
        <div>
          <button
            className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
            onClick={handleCheckEmailPopup}
          >
            Send Code
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
      <ResetPassword
        isOpen={checkEmailPopup}
        setIsOpen={handleCheckEmailPopupClose}
        email={email}
        otpTime={otpTimeCount}
      />
    </div>
  );
}

export default ForgotPassword;
