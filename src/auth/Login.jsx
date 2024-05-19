import React from 'react';
import google from '../assets/images/google.svg';
function Login() {
    return (
        <div>
            <div className="max-w-md mx-auto py-8 px-4 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center">Log in</h2>
                <p className="text-gray-400 text-sm mb-6 text-center">Don't have account? <a
                    href="#" className="font-semibold underline text-black">Sign up for free</a></p>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Email address/Phone number
                        </label>
                        <input
                            className="border rounded-lg w-full py-2 px-3 text-gray-700 "
                            id="emailOrPhone"
                            type="text"
                            placeholder="Enter your Email/Phone number"
                        />
                    </div>
                    <div className="mb-0">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <input
                            className="border rounded-lg w-full py-2 px-3 text-gray-700 mb-3"
                            id="password"
                            type="password"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-5 px-0.5">
                        <a href="#" className="font-semibold underline">Forget password?</a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            className='bg-primary-green hover:bg-green-700 text-white font-semibold  border rounded-full w-full h-14 '
                            type="submit"
                        > Log in
                        </button>
                    </div>
                    <div className='flex justify-center my-3 '>
                        <button
                            className="text-center border border-black rounded-full py-3 px-4 w-64 inline-flex "
                            href="#"
                        >
                            <img className='mx-3 w-fit'
                                src={google}
                            />
                            Continue with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
