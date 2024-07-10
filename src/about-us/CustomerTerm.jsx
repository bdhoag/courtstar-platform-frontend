import React from 'react';
import { useTranslation } from 'react-i18next';



const CustomerTerm = () => {
    const { t } = useTranslation();

    return (
        <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
            <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
                <div className="max-w-screen-1440 1440:mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h1 className='text-3xl font-bold font py-8'>Terms and Conditions for Customer</h1>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className='text-3xl font-semibold py-5'>
                            <p className='text-xl font-semibold py-6'> 1. BASIC TERMS</p>
                            <div className='text-base font-normal'>
                                <p>- You will be liable for every activity that takes place within your user profile.</p>                              
                            </div>
                            <ul className='font-normal text-base py-4' style={{paddingLeft: '50px', listStyleType: 'disc' }}>
                                {t('basicTerms', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className='text-xl font-semibold py-6'>2. GENERAL CONDITIONS</p>
                            <ul className='font-normal text-base' style={{paddingLeft: '50px', listStyleType: 'disc' }}>
                                {t('generalConditions', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className='text-xl font-semibold py-6'>3. PROHIBITED ACTIVITIES</p>
                            <div className='text-base font-normal'>
                                <p>- You may not access or use the app for any purpose other than that for which we make the app available. The app may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the app, you agree not to:</p>                              
                            </div>
                            <ul className='font-normal text-base py-4' style={{paddingLeft: '50px', listStyleType: 'disc' }}>
                                {t('prohibitedActivities', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className='text-xl font-semibold py-6'>4. REFUND POLICY</p>
                            <ul className='font-normal text-base py-4' style={{paddingLeft: '50px', listStyleType: 'disc' }}>
                                {t('refundPolicy', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className='text-xl font-semibold py-6'>COPYRIGHT</p>
                            <div className='text-base font-normal'>
                                <p>The content on this app, including images, texts, and videos are protected under copyright and trademark, so it will be illegal to use any of them without consent. Except for the content uploaded by the users, all the material available is the property of this app. The Terms of this app gives no one a right to using the app’s name or any other information such as domain name, trademarks, templates, and other distinguishing features. We have the right to use your remarks, feedback, and recommendations regarding this app.</p>                              
                            </div>
                        </div>


                    </div>






                </div>
            </div>

        </div>
    );
}

export default CustomerTerm;
