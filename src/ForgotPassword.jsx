import React from 'react';
import InputText from './components/InputText';
function ForgotPassword() {
    return (
        <div>
            <div className="max-w-md mx-auto py-8 px-4 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-semibold mb-3 text-center">Forgot Password</h2>
                <p className="text-gray-400 text-xs mb-6 text-center">Enter your email and we'll send you a link to get back into your account </p>
                <form>
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
                            className='bg-primary-green hover:bg-green-700 text-white border rounded-full w-full h-10'
                            type="submit"
                        > Send Code
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ForgotPassword;