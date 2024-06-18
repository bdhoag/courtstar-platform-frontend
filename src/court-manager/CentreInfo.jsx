import React, { useState } from 'react';
import Slider from '../components/Slider';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../config/axiosConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import Feedback from '../components/feedback';

function CentreInfo(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [activateLoading, setActivateLoading] = useState(false);
  const [centreDetail, setCentreDetail] = useState(props.centreDetail);
  const imgList = props.imgList;
  const apiFeedbacks = props.apiFeedbacks;

  const handleDisable = async (centreId) => {
    setActivateLoading(true);
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
        toast.error(error.message, {
          toastId: 'disable-unsuccess'
        });
      })
      .finally(
      () => {
        setActivateLoading(false);
      }
    );
  }

  const handleActive = async (centreId) => {
    setActivateLoading(true);
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
        toast.error(error.message, {
          toastId: 'active-unsuccess'
        });
      })
      .finally(
      () => {
        setActivateLoading(false);
      }
    );
  }

  const handleDelete = async (centreId) => {
    setDeleteLoading(true);
    await axiosInstance.post(`/courtstar/centre/delete/${centreId}`)
      .then(res => {
        if (res.data.data) {
          console.log('delete');
          toast.success('Delete successfully', {
            toastId: 'delete-success'
          });
          navigate(`/myCentre/balance`)
          window.location.reload();
        }
      })
      .catch(error => {
        toast.error(error.message, {
          toastId: 'delete-unsuccess'
        });
      })
      .finally(
      () => {
        setDeleteLoading(false);
      }
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
                <Button
                  label={t('close')}
                  fullWidth
                  size='medium'
                  className='bg-black text-white'
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
                  }
                  onClick={() => handleDisable(centreDetail.id)}
                  loading={activateLoading}
                />
                :
                <Button
                  label={t('activate')}
                  fullWidth
                  size='medium'
                  className='bg-primary-green hover:bg-teal-900 text-white'
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole-open"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>
                  }
                  onClick={() => handleActive(centreDetail.id)}
                  loading={activateLoading}
                />
            }

            <Button
              label={t('delete')}
              fullWidth
              size='medium'
              className='bg-red-600 hover:bg-red-800 text-white'
              icon={
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
              }
              onClick={() => handleDelete(centreDetail.id)}
              loading={deleteLoading}
            />
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
                  <span className='font-semibold'>{t('numberOfCourts')}: </span>
                  {centreDetail.numberOfCourts}
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

      <div className='flex-1 bg-white rounded-lg shadow-gray-400 shadow-md mt-3'>
        <div className='text-white rounded-t-lg bg-primary-green flex items-center justify-center gap-1.5 py-2'>
          <span className='text-3xl font-medium'>Feedbacks</span>
        </div>
        <div className="">
          <Feedback
            listItem={apiFeedbacks}
            itemsPerPage={10}
          />
        </div>
      </div>

    </div>
  )
}

export default CentreInfo;
