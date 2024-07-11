import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../config/axiosConfig';
import SpinnerLoading from '../../../components/SpinnerLoading';
import InputText from '../../../components/input-text';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Dropdown from '../../../components/dropdown';

const PaymentHistory: React.FC = () => {

  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [histories, setHistories] = useState<any>();
  const options = [
    {
      key: 1,
      label: "All"
    },
    {
      key: 2,
      label: "Pending"
    },
    {
      key: 3,
      label: "Accepted"
    },
    {
      key: 4,
      label: "Denied"
    }
  ];

  const handleSelectDropdown = (item) => {
    console.log(`Selected: ${item.label}`);
  };

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

  useEffect(() => {
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
        <div className="bg-white shadow rounded-xl">
          <div className="text-center font-semibold text-white py-1.5 text-2xl bg-primary-green rounded-t-xl">
            Withdrawal history
          </div>
          <div className="px-10 py-4 grid grid-cols-12 gap-2">
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
            <div className="col-span-2">
              <InputText
                placeholder={t('enterUserName')}
                label={t('fullName')}
                value=""
                onchange={() => { }}
              />
            </div>
            <div className="col-span-2">
              <Dropdown
                label="Date"
                items={options}
                onSelect={handleSelectDropdown}
                placeholder={t('Select date')}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 font-medium">
          {histories?.map((item) => (
            <div
              key={item.id}
              className="bg-white px-10 py-2 grid grid-cols-12 gap-2 mt-2 rounded-lg shadow"
              onClick={
                () => { }
              }
            >
              <div className="col-span-2 px-3 flex items-center truncate">
                {item?.nameBanking}
              </div>
              <div className="col-span-2 px-3 flex items-center truncate">
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
              {item?.dateAuthenticate
                ?
                <>
                  {item?.status
                    ?
                    <div className="col-span-2 text-xs mx-auto py-1 px-2 text-white bg-primary-green w-fit font-semibold rounded">
                      Accepted
                    </div>
                    :
                    <div className="col-span-2 text-xs mx-auto py-1 px-2 text-white bg-rose-500 w-fit font-semibold rounded">
                      Denied
                    </div>
                  }
                </>
                :
                <div className="col-span-2 text-xs mx-auto py-1 px-2 text-white bg-yellow-400 w-fit font-semibold rounded">
                  Pending
                </div>
              }
            </div>
          ))}
        </div>
      </div>
  )
}

export default PaymentHistory
