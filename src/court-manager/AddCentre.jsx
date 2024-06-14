import React, { useEffect, useState } from "react";
import { imageDb } from '../config/firebaseConfig';
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { v4 } from "uuid";
import InputText from '../components/InputText';
import Dialog from '../components/Dialog';
import Dropdown from '../components/Dropdown';
import moment from "moment";
import axiosInstance from "../config/axiosConfig";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

function AddCentre(props) {
  const { t } = useTranslation();
  const [districtSelect, setDistrictSelect] = useState('');
  const [imgUrls, setImgUrls] = useState([]);

  const handleSelectDistrict = (item) => {
    setDistrictSelect(item);
    setCentreForm(prevState => {
        // List of known districts for comparison
        const knownDistricts = districts.map(district => district.trim().toLowerCase());
        const addressParts = prevState.address.split(',').map(part => part.trim());

        // Check if the last part of the address matches any known district
        const lastPart = addressParts[addressParts.length - 1].toLowerCase();
        const isLastPartDistrict = knownDistricts.includes(lastPart);

        // Remove the last part if it's a district
        const updatedAddressParts = isLastPartDistrict ? addressParts.slice(0, -1) : addressParts;

        const updatedAddress = updatedAddressParts.join(', ');

        return {
            ...prevState,
            address: (updatedAddress ? updatedAddress + ", " : "") + item
        };
    });
};


  const handleClose = () => {
    props.setIsOpen();
  };

  const items = generate24Hours();
  function generate24Hours() {
    let hours = [];
    for (let i = 0; i < 24; i++) {
      let hour = i < 10 ? `0${i}:00` : `${i}:00`;
      hours.push(hour);
    }
    return hours;
  }

  const [centreForm, setCentreForm] = useState({
    name: '',
    address: '',
    openTime: '',
    closeTime: '',
    pricePerHour: '',
    numberOfCourt: '',
    paymentMethod: '',
    approveDate: moment().format('yyyy-MM-DD'),
    images: []
  });

  const districts = [
    t('thuDucCity'),
    t('district1'),
    t('district3'),
    t('district4'),
    t('district5'),
    t('district6'),
    t('district7'),
    t('district8'),
    t('district10'),
    t('district11'),
    t('district12'),
    t('binhTanDistrict'),
    t('binhThanhDistrict'),
    t('goVapDistrict'),
    t('phuNhuanDistrict'),
    t('tanBinhDistrict'),
    t('tanPhuDistrict'),
    t('nhaBeProvince'),
    t('canGioProvince'),
    t('cuChiProvince'),
    t('hocMonProvince'),
    t('binhChanhProvince'),
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCentreForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectOpenTime = (item) => {
    setCentreForm(prevState => ({
      ...prevState,
      openTime: item
    }));
  };

  const handleSelectCloseTime = (item) => {
    setCentreForm(prevState => ({
      ...prevState,
      closeTime: item
    }));
  };

  const handleImageUpload = (selectedImg) => {
    if (selectedImg !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, selectedImg).then(value => {
        getDownloadURL(value.ref).then(url => {
          setImgUrls(prevUrls => [...prevUrls, { url, ref: value.ref }]);
        });
      });
    }
  };

  const handleDeleteImage = (imgRef, url) => {
    deleteObject(imgRef).then(() => {
      setImgUrls(prevUrls => prevUrls.filter(img => img.url !== url));
      setCentreForm(prevState => ({
        ...prevState,
        images: prevState.images.filter(image => image !== url)
      }));
    }).catch(error => {
      console.error("Error deleting image: ", error);
    });
  };

  useEffect(() => {
    setCentreForm(prevState => ({
      ...prevState,
      images: imgUrls.map(img => img.url)
    }));
  }, [imgUrls]);

  const handleImageChange = (e) => {
    const selectedImg = e.target.files[0];
    handleImageUpload(selectedImg);
  };

  const submit = async () => {
    console.log(centreForm);

    await axiosInstance.post(`/courtstar/centre/create`, centreForm)
      .then(res => {
        console.log(res.data);
        toast.success("Create Successfully!", {
          toastId: 'add-centre-success'
        });
        setImgUrls([]);
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message, {
          toastId: 'add-centre-error'
        });
      })
      .finally();
  }

  const clearForm = () => {
    const deleteImagesPromises = imgUrls.map(img => deleteObject(img.ref));
    Promise.all(deleteImagesPromises)
      .then(() => {
        setImgUrls([]);
        setCentreForm({
          name: '',
          address: '',
          openTime: '',
          closeTime: '',
          pricePerHour: '',
          numberOfCourt: '',
          paymentMethod: '',
          approveDate: moment().format('yyyy-MM-DD'),
          images: []
        });
      })
      .catch(error => {
        console.error("Error deleting images: ", error);
      });
  }

  const html = (
    <div>
      <div>
        {imgUrls.length > 0 && (
          <img src={imgUrls[0].url} alt="Centre" className='h-64 w-fit mx-auto rounded-xl' />
        )}
      </div>
      <div className='flex gap-2 my-2 pt-1.5 border rounded-md bg-white overflow-hidden mx-auto relative'>
        <div
          id='image-scroll-container'
          className='flex gap-2 overflow-x-auto pb-1.5 px-2'
        >
          <div
            className='flex justify-center items-center border rounded-lg cursor-pointer h-16 min-w-24 px-7'
            onClick={() => document.getElementById('image-upload-input').click()}
          >
            <span className='text-4xl font-bold'>+</span>
          </div>
          <input
            id='image-upload-input'
            type="file"
            onChange={handleImageChange}
            className='hidden'
          />
          {imgUrls.map((img, index) => (
            <div key={index} className="image-container relative">
              <img
                src={img.url}
                alt={`Court ${index + 1}`}
                className='min-w-24 max-w-24 h-16 rounded-lg object-cover object-center '
              />
              <svg
                onClick={() => handleDeleteImage(img.ref, img.url)}
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" s
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-x absolute right-1 top-1 bg-white rounded-full cursor-pointer hover:scale-110 ease-in-out duration-200">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto'>
        <div className='mb-4'>
          <InputText
            id="name"
            name="name"
            placeholder={t('enterCentreName')}
            label={t('centreName')}
            value={centreForm.name}
            onchange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <InputText
            id="address"
            name="address"
            placeholder={t('enterCentreAddress')}
            label={t('centreAddress')}
            value={centreForm.address}
            onchange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <Dropdown
            placeholder={t('selectTheDistrict')}
            items={districts}
            onSelect={handleSelectDistrict}
            label={t('selectTheDistrict')}
          />
        </div>
        <div className='mb-4'>
          <InputText
            id="numberOfCourt"
            name="numberOfCourt"
            placeholder={t('enterNumberOfCourt')}
            label={t('numberOfCourt')}
            value={centreForm.numberOfCourt}
            onchange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <InputText
            id="pricePerHour"
            name="pricePerHour"
            placeholder={t('enterPricePerHour')}
            label={t('pricePerHour')}
            value={centreForm.pricePerHour}
            onchange={handleChange}
          />
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='basis-1/2'>
          <div className='w-full flex flex-col gap-2 text-gray-800 font-semibold mb-2'>
            {t('openTimes')}:
          </div>
          <div className='flex gap-4 items-center'>
            <Dropdown
              placeholder={t('selectOpenTime')}
              items={items}
              onSelect={handleSelectOpenTime}
              dir='up'
            />
          </div>
        </div>
        <div className='basis-1/2'>
          <div className='w-full flex flex-col gap-2 text-gray-800 font-semibold mb-2'>
            {t('closeTime')}:
          </div>
          <div className='flex gap-4 items-center'>
            <Dropdown
              placeholder={t('selectCloseTime')}
              items={items}
              onSelect={handleSelectCloseTime}
              dir='up'
            />
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 mx-auto">
        <div className='mb-4'>
          <InputText
            id="paymentMethod"
            name="paymentMethod"
            placeholder={t('enterPaymentMethod')}
            label={t('paymentMethod')}
            value={centreForm.paymentMethod}
            onchange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Dialog
        html={html}
        isOpen={props.isOpen}
        submit={submit}
        setIsOpen={handleClose}
        title={t('centreInformation')}
        clearForm={clearForm}
      />
    </div>
  );
}

export default AddCentre;
