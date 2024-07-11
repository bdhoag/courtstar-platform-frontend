import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import SpinnerLoading from "../../components/SpinnerLoading";
import Button from "../../components/button";
import moment from "moment";
import { toast } from "react-toastify";
import Dropdown, { Item } from "../../components/dropdown";  // Ensure Item is imported correctly
import InputText from "../../components/input-text";
import PopupModal from "../../components/PopupModal";

const Withdrawal = () => {
  const [loading, setLoading] = useState(true);
  const [requestList, setRequestList] = useState<any>();
  const [requestDetail, setRequestDetail] = useState<any>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const amountItems: Item[] = [
    { key: 'all', label: 'All Request' },
    { key: 'asc', label: 'Ascending' },
    { key: 'dsc', label: 'Descending' }
  ];
  const dateItems: Item[] = [
    { key: 'all', label: 'All Request' },
    { key: 'asc', label: 'Ascending' },
    { key: 'dsc', label: 'Descending' }
  ];
  const statusItems: Item[] = [
    { key: 'all', label: 'All Request' },
    { key: 'acp', label: 'Accepted' },
    { key: 'den', label: 'Denied' },
    { key: 'pen', label: 'Pending' }
  ];

  const [filteredRequest, setFilteredRequest] = useState<any>();
  const [emailFilter, setEmailFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const applyFilters = () => {
      let updatedRequest = requestList;

      // Filter by email
      if (emailFilter) {
        updatedRequest = updatedRequest.filter(request =>
          request.managerEmail.toLowerCase().includes(emailFilter.toLowerCase())
        );
      }

      // Filter by status
      if (statusFilter && statusFilter !== 'all') {
        updatedRequest = updatedRequest.filter(request => {
          if (statusFilter === 'acp') {
            return request.status === true;
          } else if (statusFilter === 'den') {
            return request.status === false && request.dateAuthenticate;
          } else if (statusFilter === 'pen') {
            return !request.dateAuthenticate;
          }
          return true;
        });
      }

      // Sort by amount
      if (amountFilter && amountFilter !== 'all') {
        updatedRequest = updatedRequest.slice().sort((a, b) => {
          if (amountFilter === 'asc') {
            return a.amount - b.amount;
          } else if (amountFilter === 'dsc') {
            return b.amount - a.amount;
          }
          return 0;
        });
      }

      // Sort by date
      if (dateFilter && dateFilter !== 'all') {
        updatedRequest = updatedRequest.slice().sort((a, b) => {
          if (dateFilter === 'asc') {
            return moment(a.dateCreateWithdrawalOrder).diff(b.dateCreateWithdrawalOrder);
          } else if (dateFilter === 'dsc') {
            return moment(b.dateCreateWithdrawalOrder).diff(a.dateCreateWithdrawalOrder);
          }
          return 0;
        });
      }
      setFilteredRequest(updatedRequest);
    };

    applyFilters();
  }, [emailFilter, amountFilter, dateFilter, statusFilter, requestList]);

  const load = async () => {
    try {
      const res = await axiosInstance.get(`/courtstar/transfer-money/all`);
      const sortedData = res.data.data
        .map((item) => ({ ...item, loading: false }))
      setRequestList(sortedData);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenRequestDetail = (request) => {
    setRequestDetail(request);
    setIsOpenModal(true);
  };

  const requestInfo = (
    <div className="text-black w-96">
      <div className="">
        <span className="font-semibold">Manager's email:</span> {requestDetail?.managerEmail}
      </div>
      <div className="">
        <span className="font-semibold">Created date:</span> {moment(requestDetail?.dateCreateWithdrawalOrder).format('yyyy-MM-DD')}
      </div>
      <div className="">
        {requestDetail?.dateAuthenticate &&
          <>
            <span className="font-semibold">Response date:</span> {moment(requestDetail?.dateAuthenticate).format('yyyy-MM-DD')}
          </>
        }
      </div>
      <div className="">
        <span className="font-semibold">Card holder name:</span> {requestDetail?.cardHolderName}
      </div>

      <div className="">
        <span className="font-semibold">Bank name:</span> {requestDetail?.nameBanking}
      </div>
      <div className="">
        <span className="font-semibold">Bank account number:</span> {requestDetail?.numberBanking}
      </div>
      {!requestDetail?.dateAuthenticate
        ?
        <>
          {!requestDetail?.loading
            ?
            <div className="mt-2 flex gap-1 w-full">
              <Button
                className="text-center text-primary-green text-xs font-semibold w-full py-1 border-primary-green border-2 rounded hover:bg-primary-green hover:text-white"
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
                label='Accept'
                onClick={() => handleAcceptRequest(requestDetail)}
              />
              <Button
                className="text-center text-red-500 text-xs font-semibold w-full py-1 border-red-500 border-2 rounded hover:bg-red-500 hover:text-white"
                icon={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>}
                label='Deny'
                onClick={() => handleDenyRequest(requestDetail)}
              />
            </div>
            :
            <div className="mx-auto mt-2">
              <SpinnerLoading
                width="24"
                height="24"
                color="#2b5a50"
              />
            </div>
          }
        </>
        :
        <>
          {requestDetail?.status
            ?
            <div className="text-center py-1 mt-2 text-white bg-primary-green font-semibold rounded">
              Accepted
            </div>
            :
            <div className="text-center py-1 mt-2 text-white bg-rose-500 font-semibold rounded">
              Denied
            </div>
          }
        </>
      }
    </div>
  );

  const handleAcceptRequest = async (request) => {
    setRequestDetail((prev) => ({
      ...prev,
      loading: true
    }));
    try {
      const res = await axiosInstance.post(`/courtstar/transfer-money/authenticate-withdrawal-order/${request.id}`);
      toast.success('Accepted withdrawal!', {
        toastId: 'accept-withdrawal-success'
      });
      if (res.data.data) {
        load();
        setIsOpenModal(false);
      }
    } catch (error: any) {
      toast.error(error.message, {
        toastId: 'accept-withdrawal-unsuccess'
      });
    }
  };

  const handleDenyRequest = async (request) => {
    setRequestDetail((prev) => ({
      ...prev,
      loading: true
    }));
    try {
      const res = await axiosInstance.post(`/courtstar/transfer-money/authenticate-deny-withdrawal-order/${request.id}`);
      toast.success('Denied withdrawal!', {
        toastId: 'deny-withdrawal-success'
      });
      if (res.data.data) {
        load();
        setIsOpenModal(false);
      }
    } catch (error: any) {
      toast.error(error.message, {
        toastId: 'deny-withdrawal-unsuccess'
      });
    }
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <div className='py-7 px-7'>
      <PopupModal
        isOpen={isOpenModal}
        setIsOpen={() => {
          setIsOpenModal(false);
          setRequestDetail(null);
        }}
        html={requestInfo}
        title='Request Detail'
        centreInfo
      />
      <div className="text-3xl font-bold mb-4">
        Withdrawal Request
      </div>
      {loading ? (
        <div className="h-[500px] flex items-center justify-center">
          <SpinnerLoading height='80' width='80' color='#2B5A50' />
        </div>
      ) : (
        <>
          <div className="px-10 bg-white py-4 grid grid-cols-4 gap-x-1 rounded-xl shadow">
            <div className="">
              <InputText
                placeholder="Enter email of manager"
                label="Manager's Email"
                value={emailFilter}
                onchange={(e) => setEmailFilter(e.target.value)}
              />
            </div>
            <div className="">
              <div className="font-semibold mb-2">Amount</div>
              <Dropdown
                placeholder="Select Amount"
                items={amountItems}
                onSelect={(item) => setAmountFilter(item?.key ?? 'all')}
                buttonClassName='!px-3'
              />
            </div>
            <div className="">
              <div className="font-semibold mb-2">Date Create</div>
              <Dropdown
                placeholder="Select Date Create"
                items={dateItems}
                onSelect={(item) => setDateFilter(item?.key ?? 'all')}
                buttonClassName='!px-3'
              />
            </div>
            <div className="">
              <div className="font-semibold mb-2">Status</div>
              <Dropdown
                placeholder="Select Status"
                items={statusItems}
                onSelect={(item) => setStatusFilter(item?.key ?? 'all')}
                buttonClassName='!px-3'
              />
            </div>
          </div>
          {filteredRequest && filteredRequest.length > 0 ? (
            filteredRequest.map((request) => (
              <div
                key={request.id}
                className={`grid grid-cols-4 py-3 px-10 mt-2 rounded-lg shadow ease-in-out duration-300 font-medium
                        ${!request.dateAuthenticate ? 'bg-white' : 'bg-slate-50'}
                        hover:hover:px-8 cursor-pointer`}
                onClick={() => handleOpenRequestDetail(request)}
              >
                <div className="self-center font-semibold ml-5 truncate">
                  {request.managerEmail}
                </div>
                <div className="self-center text-center truncate">
                  {request.amount}
                </div>
                <div className="self-center text-center truncate">
                  {moment(request.dateCreateWithdrawalOrder).format('yyyy-MM-DD')}
                </div>
                {request.status ?
                  <div className="text-xs mx-auto py-1 px-2 text-white bg-primary-green w-fit font-semibold rounded">
                    Accepted
                  </div>
                  : !request.dateAuthenticate ?
                    <div className="text-xs mx-auto py-1 px-2 text-white bg-yellow-400 w-fit font-semibold rounded">
                      Pending
                    </div>
                    :
                    <div className="text-xs mx-auto py-1 px-2 text-white bg-rose-500 w-fit font-semibold rounded">
                      Denied
                    </div>
                }
              </div>
            ))
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default Withdrawal;
