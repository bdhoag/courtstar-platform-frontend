import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../config/axiosConfig';
import SpinnerLoading from '../../../components/SpinnerLoading';
import InputText from '../../../components/input-text';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const PaymentHistory: React.FC = () => {

  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [histories, setHistories] = useState<any>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const loadHistory = async () => {
      await axiosInstance.get(`/courtstar/transfer-money/manager/all`, { signal })
        .then(res => {
          setHistories(res.data.data);
        })
        .catch(err => {
          console.log(err.message);
        })
        .finally(
          () => {
            setLoading(false);
          }
        );
    }

    loadHistory();

    return () => {
      controller.abort();
    }

  }, []);

  return (
    loading
    ?
      <div className="h-[300px] flex items-center justify-center">
        <SpinnerLoading
          height='80'
          width='80'
          color='#2B5A50'
        />
      </div>
    :
      <div className="mt-4">
        <div className="px-10 py-4 grid grid-cols-12 gap-2 bg-white shadow rounded-xl ">
          <div className="col-span-3">
            <InputText
              placeholder={t('enterUserName')}
              label={t('fullName')}
              value=""
              onchange={() => {}}
            />
          </div>
          <div className="col-span-3">
            <InputText
              placeholder={t('enterUserName')}
              label={t('fullName')}
              value=""
              onchange={() => { }}
            />
          </div>
          <div className="col-span-2">
            <InputText
              placeholder={t('enterUserName')}
              label={t('fullName')}
              value=""
              onchange={() => { }}
            />
          </div>
          <div className="col-span-2">
            <InputText
              placeholder={t('enterUserName')}
              label={t('fullName')}
              value=""
              onchange={() => { }}
            />
          </div>
          <div className="col-span-2 pr-3">
            <InputText
              placeholder={t('enterUserName')}
              label={t('fullName')}
              value=""
              onchange={() => { }}
            />
          </div>
        </div>
        <div className="mt-2 font-medium">
          {histories?.map((item) => (
            <div
              key={item.id}
              className={item?.status
                ? "bg-slate-200 px-10 py-1 grid grid-cols-12 gap-2 hover:px-8 cursor-pointer mt-2 rounded-lg ease-in-out duration-300"
                : "bg-white px-10 py-1 grid grid-cols-12 gap-2 hover:bg-teal-50 hover:px-8 cursor-pointer mt-2 rounded-lg shadow ease-in-out duration-300"}
              onClick={
                () => {}
              }
            >
              <div className="col-span-3 px-3 flex items-center truncate">
                {item?.nameBanking}
              </div>
              <div className="col-span-3 px-3 flex items-center truncate">
                {item?.numberBanking}
              </div>
              <div className="col-span-2 flex items-center justify-center">
                {item?.cardHolderName}
              </div>
              <div className="col-span-2 flex items-center justify-center">
                {item?.amount}
              </div>
              <div className="col-span-2 flex flex-col justify-center items-center font-semibold">
                {moment(item?.dateCreateWithdrawalOrder).format("yyyy-MM-DD")}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default PaymentHistory
