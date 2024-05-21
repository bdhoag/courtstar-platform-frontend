import google from '../assets/images/google.svg';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
import React, { useState } from 'react';
import ForgotPassword from '../ForgotPassword';
function Login(props) {

  const [forgetPopup, setForgetPopup] = useState(false);
  const handleForgetPopup = () => {
    handleClose();
    setForgetPopup(true);
  }
  const handleClose = () => {
    props.setIsOpen();
  }
  const handleForgetClose = () => {
    setForgetPopup(false)
  }
  
  const html = (
    <div className="w-[440px] mx-auto bg-white rounded-lg">
      <h2 className="text-4xl font-semibold mb-6 text-center">Log in</h2>
      <p className="text-gray-400 text-sm mb-6 text-center">Don't have account? <a
        href="#s" className="font-semibold underline text-gray-800">Sign up for free</a></p>
      <div>
        <div className="mb-4">
          <InputText
            id="email"
            name="email"
            placeholder="Enter your email"
            label="Email"
          />
        </div>
        <div className="mb-0">
          <InputText
            id="password"
            name="password"
            placeholder="Enter your password"
            label="Password"
          />
        </div>
        <div className="flex items-center justify-between mt-4 mb-5 px-0.5">
          <button onClick={handleForgetPopup} className="text-sm font-semibold underline">Forget password?</button>
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'>
            Log in
          </button>
        </div>
        <div className='flex justify-center mt-4 '>
          <button
            className="text-center text-sm border border-black rounded-full py-3 px-14 inline-flex items-center hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <img className='mr-3 w-fit'
              src={google}
              alt='google'
            />
            Continue with Google
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
        setIsOpen={props.setIsOpen}
      />
      <ForgotPassword
        isOpen={forgetPopup}
        setIsOpen={handleForgetClose}
      />
    </div>
  );
}

export default Login;
