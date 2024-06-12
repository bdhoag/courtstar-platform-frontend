import React, { useState } from 'react';
// import star from '../assets/images/star.svg';
import LockOpen from '../assets/images/lock-open.svg';
import LockClose from '../assets/images/lock-close.svg';
import Pagination from "../components/Pagination";
// import Rating from '../components/Rating';
import Slider from '../components/Slider';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../config/axiosConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function CentreInfo(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [centreDetail, setCentreDetail] = useState(props.centreDetail);
  const imgList = props.imgList;
  const apiFeedbacks = props.apiFeedbacks;

  const handleDisable = async (centreId) => {
    await axiosInstance.post(`/courtstar/centre/disable/${centreId}`)
      .then(res => {
        if (res.data.data) {
          setCentreDetail((prevForm) => ({
            ...prevForm,
            status: false
          }))
          toast.success('Disable successfully', {
            toastId: 'disable-success'
          });
        }
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
      // () => {
      //   setLoading(false);
      // }
    );
  }

  const handleActive = async (centreId) => {
    await axiosInstance.post(`/courtstar/centre/active/${centreId}`)
      .then(res => {
        if (res.data.data) {
          setCentreDetail((prevForm) => ({
            ...prevForm,
            status: true
          }))
          toast.success('Active successfully', {
            toastId: 'active-success'
          });
        }
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
      // () => {
      //   setLoading(false);
      // }
    );
  }

  const handleDelete = async (centreId) => {
    await axiosInstance.post(`/courtstar/centre/delete/${centreId}`)
      .then(res => {
        if (res.data.data) {
          console.log('delete');
          toast.success('Delete successfully', {
            toastId: 'delete-success'
          });
          navigate(`/myCentre/balance`)
          window.location.reload();
        } else {
          toast.success('Cannot delete', {
            toastId: 'delete-unsuccess'
          });
        }

      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
      // () => {
      //   setLoading(false);
      // }
    );
  }

  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="text-2xl font-semibold py-3">
        {centreDetail.name}
      </div>

      <div className="flex justify-between gap-4">
        <div className="w-[44rem]">
          <Slider
            imagesDemoList={imgList}
          />
        </div>

        <div className="flex-1 w-[410px] flex flex-col gap-3">

          <div className="flex gap-3 font-semibold">
            {
              centreDetail.status
                ?
                <button
                  className="flex justify-center items-center gap-2.5 text-white bg-primary-green w-1/2
                  py-2 rounded-md hover:bg-black ease-in-out duration-200 cursor-pointer group"
                  onClick={() => handleDisable(centreDetail.id)}
                >
                  <img
                    className='group-hover:hidden'
                    src={LockOpen}
                    alt="lock-open"
                  />
                  <img
                    className='group-hover:block hidden'
                    src={LockClose}
                    alt="lock-close"
                  />
                  <div className="group-hover:hidden">
                    {t('activated')}
                  </div>
                  <div className="hidden group-hover:block">
                    {t('close')}
                  </div>
                </button>
                :
                <button
                  className="flex justify-center items-center gap-2.5 text-white border-2 bg-black w-1/2
                  py-2 rounded-md hover:bg-primary-green ease-in-out duration-200 cursor-pointer group"
                  onClick={() => handleActive(centreDetail.id)}
                >
                  <img
                    className='group-hover:block hidden stroke-primary-green'
                    src={LockOpen}
                    alt="lock-open"
                  />
                  <img
                    className='group-hover:hidden stroke-primary-green'
                    src={LockClose}
                    alt="lock-close"
                  />
                  <div className="group-hover:hidden">
                    {t('closed')}
                  </div>
                  <div className="hidden group-hover:block">
                    {t('activate')}
                  </div>
                </button>
            }

            <button
              className="flex justify-center items-center gap-2.5 text-white bg-red-600 w-1/2 py-2 rounded-md
            hover:bg-red-800 hover:text-white ease-in-out duration-300 cursor-pointer"
              onClick={() => handleDelete(centreDetail.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash-2"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
              <div className="">
                {t('delete')}
              </div>
            </button>
          </div>

          <div className='w-full h-0.5 bg-slate-600 rounded-full'>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-white h-fit w-full px-4 py-2 rounded-md shadow flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-lg font-semibold">
                  {t('information')}
                  <button
                    className="flex justify-center items-center text-primary-green  rounded-md
                    px-2 hover:bg-primary-green hover:text-white ease-in-out duration-300 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18" height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-pencil"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </button>
                </div>
                <div className="px-2">
                  <div>
                    <span className='font-semibold'>{t('address')}: </span>
                    {centreDetail.address}
                  </div>

                  <div>
                    <span className='font-semibold'>{t('openTime')}: </span>
                    {moment(centreDetail.openTime, 'HH:mm:ss').format('HH:mm')} - {moment(centreDetail.closeTime, 'HH:mm:ss').format('HH:mm')}
                  </div>

                  <div>
                    <span className='font-semibold'>{t('price')}: </span>
                    <span className='font-semibold text-rose-600'>
                      {centreDetail?.pricePerHour?.toLocaleString('de-DE')} VND/h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white h-fit w-full px-4 py-2 rounded-md shadow flex flex-col gap-3">
              <div className="flex justify-between text-lg font-semibold">
                <div>
                  <span className='font-semibold'>{t('numberOfCourt')}: </span>
                  {centreDetail.numberOfCourt}
                </div>
                <button
                  className="flex justify-center items-center text-primary-green  rounded-md
                    px-2 hover:bg-primary-green hover:text-white ease-in-out duration-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </button>
              </div>
              <div className="mx-auto">
                <div className="grid grid-cols-2 gap-x-10">
                  {centreDetail.courts?.map((court) => (
                    <div
                      key={court.id}
                      className="flex gap-1"
                    >
                      <div className="">
                        {court.courtNo}.
                      </div>
                      <div className="">
                        <span className='font-semibold'>{t('status')}: </span>
                        <span className={court.status ? 'font-semibold text-primary-green' : 'font-semibold text-red-500'}>
                          {court.status ? 'Active' : 'Close'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="bg-white px-5 py-3 rounded-md">
        <Pagination title={t('feedbacks')} listItem={apiFeedbacks} itemsPerPage={10} />
      </div>
    </div>
  )
}

export default CentreInfo;
