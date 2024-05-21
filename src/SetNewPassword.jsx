import React, { useState } from 'react';
import InputText from './components/InputText';
import PopupModal from './components/PopupModal';
function SetNewPassword(props) {
    const handleClose = () => {
        props.setIsOpen();
    }
    const html = (
        <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-semibold mb-3 text-center">Set a new password</h2>
            <p className="text-gray-400 text-xs mb-6 text-center">Create a new password. Ensure it differs from previous ones for security </p>
            <form>
                <div className="mb-4 px-10 text-xs">
                    <InputText
                        id="newPassword"
                        name="newPassword"
                        placeholder="Enter your new password"
                        label="New password"
                    />
                </div>
                <div className="mb-4 px-10 text-xs">
                    <InputText
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Re-enter password"
                        label="Confirm password"
                    />
                </div>
                <div className='flex items-center justify-center px-10'>
                    <button
                        className='bg-primary-green hover:bg-teal-900 text-white border rounded-full w-full h-10'
                        type="submit"
                    > Update password
                    </button>
                </div>
            </form>
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