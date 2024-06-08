import React, { useEffect, useState } from "react";
import { imageDb } from '../uploadimagefirebase/Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import InputText from '../components/InputText';
import Dialog from '../components/Dialog';
import Dropdown from '../components/Dropdown';
import paypal from '../assets/images/paypal-logo.svg';
import arrow from '../assets/images/arrow.svg';

function AddCentre(props) {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [img, setImg] = useState(null);
    const [imgUrls, setImgUrls] = useState([]);

    const handleSelect = (item) => {
        console.log(`Selected: ${item}`);
    };

    // Handle image upload
    const handleImageUpload = (selectedImg) => {
        if (selectedImg !== null) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            uploadBytes(imgRef, selectedImg).then(value => {
                getDownloadURL(value.ref).then(url => {
                    setImgUrls(prevUrls => [...prevUrls, url]);
                });
            });
        }
    };

    useEffect(() => {
        listAll(ref(imageDb, "files")).then(imgs => {
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrls(prevUrls => [...prevUrls, url]);
                });
            });
        });
    }, []);

    // Scroll handlers
    const scrollLeft = () => {
        document.getElementById('image-scroll-container').scrollLeft -= 100;
    };

    const scrollRight = () => {
        document.getElementById('image-scroll-container').scrollLeft += 100;
    };

    // CLOSE ADD
    const handleClose = () => {
        props.setIsOpen();
    }

    const handleImageChange = (e) => {
        const selectedImg = e.target.files[0];
        setImg(selectedImg);
        handleImageUpload(selectedImg);
    };

    const html = (
        <div>
            <div>
                {imgUrls.length > 0 && (
                    <img src={imgUrls[0]} alt="Centre" className='h-80 w-fit mx-auto ' />
                )}
            </div>
            <div className='flex gap-2 my-2 py-1.5 border rounded-md bg-white overflow-hidden mx-auto relative'>
                <button onClick={scrollLeft} className="absolute left-0 h-full opacity-30 bg-slate-100 w-8 transition-all ease-in-out duration-300">
                    <img src={arrow} alt="Scroll left" className='my-auto mx-auto' />
                </button>
                <div id='image-scroll-container' className='flex gap-2 overflow-x-auto px-8'>
                    <div className='flex justify-center items-center border rounded-lg cursor-pointer h-20 w-fit px-7' onClick={() => document.getElementById('image-upload-input').click()}>
                        <span className='text-4xl font-bold'>+</span>
                    </div>
                    <input id='image-upload-input' type="file" onChange={handleImageChange} className='hidden' />
                    {imgUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Centre ${index + 1}`} className='w-fit h-20 rounded-lg object-cover object-center' />
                    ))}
                </div>
                <button onClick={scrollRight} className="absolute right-0 h-full opacity-30 bg-slate-100 w-8 transition-all ease-in-out duration-300">
                    <img src={arrow} alt="Scroll right" className='my-auto mx-auto rotate-180' />
                </button>
            </div>
            <div className='mx-auto'>
                <div className='mb-4'>
                    <InputText
                        id="centreName"
                        name="centreName"
                        placeholder="Enter name of centre"
                        label="Centre Name"
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="centreAddress"
                        name="centreAddress"
                        placeholder="Enter address of centre"
                        label="Centre Address"
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="numberOfCourts"
                        name="numberOfCourts"
                        placeholder="Enter number of courts"
                        label="Number of courts"
                    />
                </div>
                <div className='mb-3'>
                    <InputText
                        id="pricePerHour"
                        name="pricePerHour"
                        placeholder="Enter price per hour"
                        label="Price per hour"
                    />
                </div>
            </div>
            <div className='mx-auto'>
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
            <div className='mx-auto'>
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
                <h2 className="text-3xl font-semibold mb-3 text-center">PAYMENT METHOD</h2>
            </div>
            <div>
                <div>
                    <img src={paypal}
                        alt="Paypal"
                        className='h-auto mx-auto w-7/12 mb-3'
                    />
                </div>
                <div className='mb-4'>
                    <InputText
                        id="managerName"
                        name="managerName"
                        placeholder="Enter name of Manager"
                        label="Manager Name"
                    />
                </div>
                <div className=''>
                    <InputText
                        id="accountNumber"
                        name="accountNumber"
                        placeholder="Enter account number of Manager's Paypal Account"
                        label="Account number"
                    />
                </div>
            </div>
        </div >
    );

    return (
        <div>
            <Dialog
                html={html}
                isOpen={props.isOpen}
                setIsOpen={handleClose}
                title='Centre Information'
            />
        </div>
    );
}

export default AddCentre;
