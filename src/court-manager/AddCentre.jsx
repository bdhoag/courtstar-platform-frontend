import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
import React from 'react';
import centre from '../assets/images/demo-centre.png';
import Dropdown from '../components/Dropdown';
import paypal from '../assets/images/paypal-logo.png';
function AddCentre(props) {

    const items = ['Item 1', 'Item 2', 'Item 3'];

    const handleSelect = (item) => {
        console.log(`Selected: ${item}`);
    };

    //CLOSE ADD
    const handleClose = () => {
        props.setIsOpen();
    }
    const html = (
        <div className="bg-white mt-4 mx-auto">
            <h2 className="text-4xl font-semibold mb-5 text-center">CENTRE INFORMATION</h2>
            <div>
                <img src={centre}
                    alt="demo centre"
                    className='h-auto max-w-lg mx-auto'
                />
            </div>
            <div className='flex gap-2 my-2 py-1.5 border rounded-md bg-white overflow-hidden mx-auto max-w-lg'>
                <img src={centre}
                    alt="demo centre"
                    className='w-1/4 rounded-lg'
                />
                <img src={centre}
                    alt="demo centre"
                    className='w-1/4 rounded-lg'
                />
                <img src={centre}
                    alt="demo centre"
                    className='w-1/4 rounded-lg'
                />
                <img src={centre}
                    alt="demo centre"
                    className='w-1/4 rounded-lg'
                />
                <img src={centre}
                    alt="demo centre"
                    className='w-1/4 rounded-lg'
                />
            </div>
            <div className='max-w-lg mx-auto'>
                <div className='mb-4'>
                    <InputText
                        id="email"
                        name="email"
                        placeholder="Enter name of centre"
                        label="Centre Name"
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="phone"
                        name="phone"
                        placeholder="Enter address of centre"
                        label="Centre Address"
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="password"
                        name="password"
                        placeholder="Enter number of courts"
                        label="Number of courts"
                    />
                </div>
                <div className='mb-3'>
                    <InputText
                        id="password"
                        name="password"
                        placeholder="Enter price per hour"
                        label="Price per hour"
                    />
                </div>
            </div>
            <div className='max-w-lg mx-auto'>
                <div className='w-full flex flex-col gap-2 text-gray-800 font-semibold'>
                    Open Time:
                </div>
                <div className='flex gap-4 items-center w-1/2'>
                    <Dropdown
                        placeholder="Select role"
                        items={items}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
            <div className='max-w-lg mx-auto'>
                <div className='w-full flex flex-col gap-2 text-gray-800 font-semibold'>
                    to:
                </div>
                <div className='flex gap-4 items-center w-1/2'>
                    <Dropdown
                        placeholder="Select role"
                        items={items}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
            <div className="bg-white mt-4 mx-auto">
                <h2 className="text-4xl font-semibold mb-5 text-center">PAYMENT METHOD</h2>
            </div>
            <div>
                <div>
                    <img src={paypal}
                        alt="demo paypal"
                        className='h-auto max-w-lg mx-auto'
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="Manager Name"
                        name="Manager Name"
                        placeholder="Enter name of Manager"
                        label="Manager Name"
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="Account Number"
                        name="Account Number"
                        placeholder="Enter account number of Manager'Paypal Account"
                        label="Account number"
                    />
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

export default AddCentre;
