import React from 'react';
import InputText from '../components/InputText';

function Profile() {
    return (
        <div className='font-Inter text-base overflow-x-hidden text-gray-800'>

            <div className='items-center bg-gray-100 py-10'>
                <div className='max-w-lg mx-auto py-8 px-4 bg-white border rounded-lg'>
                    <h2 className='text-2xl font-bold mb-6 text-center'>Your Profile</h2>
                    <div>
                        <div className='mb-4 flex gap-5'>
                            <InputText
                                id="firstName"
                                name="firstName"
                                placeholder="Phong"
                                label="First Name*"
                            />
                            <InputText
                                id="lastName"
                                name="lastName"
                                placeholder="Huynh Doan Thanh"
                                label="Last Name*"
                            />
                        </div>
                        <div className='mb-4'>
                            <InputText
                                id="email"
                                name="email"
                                placeholder="zzzbudeptraizzz@example.com"
                                label="Email*"
                            />
                        </div>
                        <div className='mb-4'>
                            <InputText
                                id="phone"
                                name="phone"
                                placeholder="03568712345"
                                label="Phone*"
                            />
                        </div>
                        <div className='mb-0'>
                            <InputText
                                id="password"
                                name="password"
                                placeholder="*************"
                                label="Password*"
                            />
                        </div>
                        <div className='text-gray-500 text-xs py-1 px-0.5 text-center'>
                            Use 8 or more characters with a mix of letters, numbers & symbols
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Profile;
