import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import axiosInstance from '../../../config/axiosConfig';
import SpinnerLoading from '../../../components/SpinnerLoading';
import InputText from '../../../components/input-text';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Dropdown from '../../../components/dropdown';

interface ChildHandle {
  increment: () => void;
}

const PaymentHistory = forwardRef<ChildHandle>((_, ref) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [histories, setHistories] = useState<any>([]);
  const options = [
    { key: 1, label: "All" },
    { key: 2, label: "Pending" },
    { key: 3, label: "Accepted" },
    { key: 4, label: "Denied" }
  ];

  useImperativeHandle(ref, () => ({
    increment() {
      loadHistory();
    }
  }));

  const handleSelectDropdown = (item: { key: number; label: string }) => {
    console.log(`Selected: ${item.label}`);
  };

  const controller = new AbortController();
  const { signal } = controller;

  const loadHistory = async () => {
    await axiosInstance.get(`/courtstar/transfer-money/manager/all`, { signal })
      .then(res => {
        const sortedHistories = res.data.data.sort((a, b) => b.id - a.id);
        setHistories(sortedHistories);
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
    };
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
          {histories?.length > 0
            ?
            <div className="px-10 py-4 grid grid-cols-12 gap-2">
              <div className="col-span-2 text-center">
                <InputText
                  placeholder={t('enterUserName')}
                  label="Bank's name"
                  value=""
                  onchange={() => { }}
                />
              </div>
              <div className="col-span-2 text-center">
                <InputText
                  placeholder={t('enterUserName')}
                  label="Account number"
                  value=""
                  onchange={() => { }}
                />
              </div>
              <div className="col-span-2 text-center">
                <InputText
                  placeholder={t('enterUserName')}
                  label="Card Holder's Name"
                  value=""
                  onchange={() => { }}
                />
              </div>
              <div className="col-span-2 text-center">
                <InputText
                  placeholder={t('enterUserName')}
                  label="Amount"
                  value=""
                  onchange={() => { }}
                />
              </div>
              <div className="col-span-2 text-center">
                <InputText
                  placeholder={t('enterUserName')}
                  label="Date Create Order"
                  value=""
                  onchange={() => { }}
                />
              </div>
              <div className="col-span-2 text-center">
                <Dropdown
                  label="Status"
                  items={options}
                  onSelect={() => handleSelectDropdown}
                  placeholder={t('Select date')}
                />
              </div>
            </div>
            :
            <div className='flex flex-col items-center justify-center h-[300px] text-3xl text-primary mx-auto'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250" height="250"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-x"
              >
                <path d="m13.5 8.5-5 5" />
                <path d="m8.5 8.5 5 5" />
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              No request found.
            </div>
          }
        </div>
        <div className="mt-2 font-medium">
          {histories?.map((item: any) => (
            <div
              key={item.id}
              className="bg-white px-10 py-2 grid grid-cols-12 gap-2 mt-2 rounded-lg shadow"
              onClick={() => { }}
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
});

export default PaymentHistory;
