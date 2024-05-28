import React from 'react';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
import { toast } from 'react-toastify';
function SetNewPassword(props) {
  //CLOSE SET NEW PASSWORD POPUP
  const handleClose = () => {
    props.setIsOpen();
  }

  //HANDLE TOAST
  const notify = () => {
    handleClose();
    toast.success("Password updated!", {
      toastId: 'new-password'
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
    </div>
  );
}
export default SetNewPassword;
