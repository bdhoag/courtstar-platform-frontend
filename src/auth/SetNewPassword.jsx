import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
function SetNewPassword(props) {
  //CLOSE SET NEW PASSWORD POPUP
  const handleClose = () => {
    props.setIsOpen();
  }

  //HANDLE TOAST
  const notify = () => {
    handleClose();
    
    toast.success("Password updated!", {
      className: 'fixed top-16 right-0'
    });
  }

  const html = (
    <div className="w-[440px]">
      <h2 className="text-4xl font-semibold mb-5 text-center">Set a new password</h2>
      <p className="text-gray-400 text-sm mb-5 text-center">Create a new password. Ensure it differs from previous ones for security </p>
      <div>
        <div className="mb-4">
          <InputText
            id="newPassword"
            name="newPassword"
            placeholder="Enter your new password"
            label="New password"
          />
        </div>
        <div className="mb-4">
          <InputText
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter password"
            label="Confirm password"
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
            onClick={notify}
          > Confirm
          </button>
        </div>
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

      <ToastContainer />
    </div>
  );
}
export default SetNewPassword;
