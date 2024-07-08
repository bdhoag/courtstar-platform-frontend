import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { useTranslation } from "react-i18next";
import SpinnerLoading from "../../components/SpinnerLoading";
import Button from "../../components/button";
import moment from "moment";

const Withdrawal = () => {

  const controller = new AbortController();
  const { signal } = controller;
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [requestList, setRequestList] = useState<any>();


  const load = async () => {
    await axiosInstance.get(`/courtstar/transfer-money/all`, { signal })
      .then(res => {
        setRequestList(res.data.data)
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(
        () => {
          setLoading(false);
        }
      );
  }

  useEffect(() => {
    load();
  }, [])

  console.log(requestList);


  return (
    <div
      className='py-7 px-7'
    >
      <div className="text-3xl font-bold">
        Withdrawal Request
      </div>

      {loading
        ?
        <div className="h-[500px] flex items-center justify-center">
          <SpinnerLoading
            height='80'
            width='80'
            color='#2B5A50'
          />
        </div>
        :
        <>
          {
            requestList && (requestList.length > 0)
              ?
              <div className="mt-2">
                {requestList?.map((request) => (
                  <div
                    key={request.id}
                    className=
                    {`grid grid-cols-6 py-3 px-10 mt-1 rounded-lg shadow-sm ease-in-out duration-300 font-medium
                    ${request.status ? 'bg-teal-50' : !request.dateAuthenticate ? 'bg-white' : 'bg-red-100'} `}
                  // onClick={() => openrequestDetail(request.id)}
                  >
                    <div className="self-center font-semibold">
                      {request.managerEmail}
                    </div>
                    <div className="self-center">
                      {request.amount}
                    </div>
                    <div className="self-center">
                      {request.nameBanking}
                    </div>
                    <div className="self-center">
                      {request.numberBanking}
                    </div>
                    <div className="self-center">
                      NGUYEN THAI THANH
                    </div>
                    {!(request.dateAuthenticate)
                      ?
                      <div className="flex justify-end gap-3 items-center">
                        <Button
                          className="text-center text-primary-green text-xs font-semibold px-2 py-1 border-primary-green border-2 rounded hover:bg-primary-green hover:text-white"
                          icon={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20"
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>}
                        />
                        <Button
                          className="text-center text-red-500 text-xs font-semibold px-2 py-1 border-red-500 border-2 rounded hover:bg-red-500 hover:text-white"
                          icon={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20"
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>}
                        />
                      </div>
                      :
                      <div className="flex justify-end">
                        {moment(request.dateAuthenticate).format('yyyy-MM-DD')}
                      </div>
                    }


                  </div>
                ))}
              </div >
              :
              <div className='flex flex-col items-center justify-center h-[500px] text-3xl text-primary mx-auto'>
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
        </>
      }

    </div>
  )
}

export default Withdrawal
