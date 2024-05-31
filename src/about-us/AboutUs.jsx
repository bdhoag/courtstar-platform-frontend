import React, { useState } from 'react';
import centre from '../assets/images/demo-centre.png';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/nostar.svg';
import mappin from '../assets/images/map-pin.svg';
import mail from '../assets/images/mail.svg';
import arrow from '../assets/images/arrow.svg';
import banner from '../assets/images/banner.png';
import InputText from '../components/InputText';
import Dropdown from '../components/Dropdown';
import CustPayment from '../payment/CustPayment';
import Slider from '../components/Slider'

const AboutUs = () => {
    //HANDLE  POPUP
    const [custPaymentPopup, setCustPaymentPopup] = useState(false);
    const handleCustPaymentPopup = () => {
        setCustPaymentPopup(true);
    }
    const handleCustPaymentPopupClose = () => {
        setCustPaymentPopup(false)
    }
    // State to keep track of the selected value in the booking type radio buttons
    const [selectedValue, setSelectedValue] = useState(0);

    // Function to handle changes in the booking type radio buttons
    const handleChange = (value) => {
        setSelectedValue(value);
    };

    // List of images to be displayed in the image carousel
    const imagesDemoList = [
        { id: 1, url: centre },
        { id: 2, url: centre },
        { id: 3, url: banner },
        { id: 4, url: centre },
        { id: 5, url: centre },
        { id: 6, url: centre }
    ];


    return (
        <div className='font-Inter text-base overflow-x-hidden text-gray-800'>
            <div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-100">
                <div className="max-w-screen-1440 1440:mx-auto mx-4 py-8 px-12 w-full flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h1 className='text-3xl font-bold font py-8'>ABOUT US</h1>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className='text-3xl font-semibold py-5'>
                            <h2 className='text-2xl font-semibold py-5 text-center'> COURTSTAR - A healthy body leads to a healthy mind</h2>
                            <h3 className='text-xl font-semibold py-6'> 1. History and Development</h3>
                            <h4 className='text-base font-normal'>
                                <p>- Founded in 2024 in Vietnam as CourtStar. CourtStar has emerged as Vietnam's leading badminton court booking site.</p>
                                <p>- CourtStar boasts a dynamic team, embodying youth and energy.</p>
                                <p>- CourtStar is currently has many badminton courts with good facilities.</p>
                                <p>- With a team of enthusiastic and dynamic staff. Strict yard approval policies. We are sure that we will bring a great experience to you when booking a badminton court on our website</p>
                            </h4>
                            <h5 className='text-xl font-semibold py-6'>2. Mission and Vision</h5>
                            <h6 className='text-lg font-semibold'>Vision</h6>
                            <p className='font-normal text-base py-6'>CourStar aspires to be the foremost center in the field of badminton yard in Viet Nam.</p>
                            <h7 className='text-lg font-semibold font py-6'>Mission</h7>
                            <p className='font-normal text-base py-6'>Courtstar is committed to providing the best quality badminton courts to meet the passion of customers. In order to get that, we have to constantly improve the processing process, evaluate the quality of the courts. In the near future, Courtstar will be the center of the top quality badminton yard in Vietnam.</p>
                            <h8 className='text-xl font-semibold py-6'>3. CourtStar Commitments</h8>
                            <p className='text-lg font-semibold py-6'>Commitment to the Guest:</p>
                            <ul className='font-normal text-base' style={{paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>Genuine court at the best prices.</li>
                                <li>A superior playing badminton experience.</li>
                                <li>The policy of changing, canceling the court transparently.</li>
                                <li>Constantly listening to customers for timely support and service quality improvement.</li>
                                <li>Provide a variety of badminton courts with different prices and quality for guests to choose.</li>
                                <li>Guests can easily compare courses before booking.</li>
                                <li>Customer support staff 24/7, ready to answer all questions of guests.</li>
                                <li>The policy of changing, canceling the court transparently.</li>

                            </ul>
                            <p className='text-lg font-semibold py-6'>Commitment to the Partner:</p>
                            <ul className='font-normal text-base' style={{paddingLeft: '50px', listStyleType: 'disc' }}>
                                <li>Transparent cooperation policy.</li>
                                <li>Attract potential customers.</li>
                                <li>Diverse advertising policies.</li>
                                <li>Improve the reputation of badminton courts.</li>
                            </ul>
                            

                        </div>


                    </div>






                </div>
            </div>

        </div>
    );
}

export default AboutUs;

