import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import StaffInfo from './StaffInfo';
import CheckIn from './CheckIn';
import CentreInfo from './CentreInfo';
import MyBalance from './MyBalance';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Content = (props) => {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [centreDetail, setCentreDetail] = useState({});
  const [imgList, setImgList] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [checkIn, setCheckIn] = useState([]);
  const handleAddCentrePopup = props.handleAddCentrePopup;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    if (id > 0) {
      const load = async () => {
        setImgList([]);
        setCentreDetail({});
        await axiosInstance.get(`/courtstar/centre/getCentre/${id}`, { signal })
          .then(res => {
            setCentreDetail(res.data.data);
            setImgList(res.data.data.images);
            setStaffList(res.data.data.centreStaffs)
          })
          .catch(error => {
            console.log(error.message);
          })
          .finally(
            () => {
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }
          );
      }
      load();
      const loadCheckIn = async () => {
        setLoading(true);
        await axiosInstance.get(`/courtstar/booking/${id}`, { signal })
          .then(res => {
            setCheckIn(res.data.data);
          })
          .catch(error => {
            console.log(error.message);
          })
          .finally(
            () => {
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }
          );
      }
      loadCheckIn();
    }

    return () => {
      controller.abort();
    }
  }, [id])


  const apiFeedbacks = [
    {
      id: 1,
      fullName: 'Anh Thanh khó tính',
      rate: 1,
      content: 'Sân cầu lông mà không có cháo lòng, -4 sao',
      createDate: new Date().toISOString()
    },
    {
      id: 2,
      fullName: 'Hoàng bú bóng',
      rate: 5,
      content: 'Chị staff mlem quá sốp ơi!',
      createDate: moment().subtract(1, 'minutes').toISOString()
    },
    {
      id: 3,
      fullName: 'Trần Thanh Hà',
      rate: 3,
      content: 'Dịch vụ tạm ổn.',
      createDate: moment().subtract(3, 'hours').toISOString()
    },
    {
      id: 4,
      fullName: 'Lê Hoàng Nam',
      rate: 4,
      content: 'Sân chơi rất rộng rãi và thoáng mát.',
      createDate: moment().subtract(4, 'days').toISOString()
    },
    {
      id: 5,
      fullName: 'Phạm Minh Quang',
      rate: 5,
      content: 'Rất hài lòng với dịch vụ.',
      createDate: moment().subtract(5, 'seconds').toISOString()
    },
    {
      id: 6,
      fullName: 'Ngô Thanh Bình',
      rate: 2,
      content: 'Không gian hơi chật, cần cải thiện.',
      createDate: moment().subtract(1, 'minutes').toISOString()
    },
    {
      id: 7,
      fullName: 'Trần Thị Hồng',
      rate: 4,
      content: 'Chất lượng phục vụ tốt.',
      createDate: moment().subtract(2, 'minutes').toISOString()
    },
    {
      id: 8,
      fullName: 'Lê Văn Long',
      rate: 3,
      content: 'Giá cả hợp lý.',
      createDate: moment().subtract(3, 'minutes').toISOString()
    },
    {
      id: 9,
      fullName: 'Phạm Văn Nam',
      rate: 4,
      content: 'Sân chơi rất sạch sẽ.',
      createDate: moment().subtract(4, 'minutes').toISOString()
    },
    {
      id: 10,
      fullName: 'Nguyễn Văn Bình',
      rate: 5,
      content: 'Sân chơi đẹp và rộng.',
      createDate: moment().subtract(5, 'minutes').toISOString()
    },
    {
      id: 11,
      fullName: 'Đinh Thị Mai',
      rate: 2,
      content: 'Cần cải thiện chất lượng dịch vụ.',
      createDate: moment().subtract(1, 'hours').toISOString()
    },
    {
      id: 12,
      fullName: 'Nguyễn Văn Tùng',
      rate: 3,
      content: 'Dịch vụ tạm ổn.',
      createDate: moment().subtract(2, 'hours').toISOString()
    },
    {
      id: 13,
      fullName: 'Lê Thị Hoa',
      rate: 4,
      content: 'Không gian rộng rãi.',
      createDate: moment().subtract(3, 'hours').toISOString()
    },
    {
      id: 14,
      fullName: 'Phạm Văn Hùng',
      rate: 5,
      content: 'Rất hài lòng.',
      createDate: moment().subtract(4, 'hours').toISOString()
    },
    {
      id: 15,
      fullName: 'Ngô Văn Thanh',
      rate: 4,
      content: 'Sân chơi tốt.',
      createDate: moment().subtract(5, 'hours').toISOString()
    },
    {
      id: 16,
      fullName: 'Lê Thị Bích',
      rate: 3,
      content: 'Dịch vụ tạm ổn.',
      createDate: moment().subtract(1, 'days').toISOString()
    },
    {
      id: 17,
      fullName: 'Nguyễn Thị Lan',
      rate: 4,
      content: 'Không gian sạch sẽ.',
      createDate: moment().subtract(2, 'days').toISOString()
    },
    {
      id: 18,
      fullName: 'Phạm Văn Minh',
      rate: 5,
      content: 'Sân chơi rộng và đẹp.',
      createDate: moment().subtract(3, 'days').toISOString()
    },
    {
      id: 19,
      fullName: 'Trần Văn Thắng',
      rate: 3,
      content: 'Giá cả hợp lý.',
      createDate: moment().subtract(4, 'days').toISOString()
    },
    {
      id: 20,
      fullName: 'Lê Thị Mai',
      rate: 4,
      content: 'Chất lượng phục vụ tốt.',
      createDate: moment().subtract(5, 'days').toISOString()
    },
    {
      id: 21,
      fullName: 'Nguyễn Văn Bình',
      rate: 2,
      content: 'Không gian hơi chật.',
      createDate: moment().subtract(6, 'days').toISOString()
    },
    {
      id: 22,
      fullName: 'Đinh Văn Minh',
      rate: 3,
      content: 'Dịch vụ tạm ổn.',
      createDate: moment().subtract(7, 'days').toISOString()
    },
    {
      id: 23,
      fullName: 'Phạm Thị Hương',
      rate: 4,
      content: 'Sân chơi rất sạch sẽ.',
      createDate: moment().subtract(8, 'days').toISOString()
    },
    {
      id: 24,
      fullName: 'Nguyễn Thị Thanh',
      rate: 5,
      content: 'Rất hài lòng với dịch vụ.',
      createDate: moment().subtract(9, 'days').toISOString()
    },
    {
      id: 25,
      fullName: 'Lê Văn Nam',
      rate: 4,
      content: 'Sân chơi rộng rãi và thoáng mát.',
      createDate: moment().subtract(10, 'days').toISOString()
    },
    {
      id: 26,
      fullName: 'Trần Thị Bình',
      rate: 3,
      content: 'Giá cả hợp lý.',
      createDate: moment().subtract(11, 'days').toISOString()
    },
    {
      id: 27,
      fullName: 'Phạm Thị Hà',
      rate: 4,
      content: 'Chất lượng phục vụ tốt.',
      createDate: moment().subtract(12, 'days').toISOString()
    },
    {
      id: 28,
      fullName: 'Nguyễn Thị Hương',
      rate: 5,
      content: 'Sân chơi rất sạch sẽ.',
      createDate: moment().subtract(13, 'days').toISOString()
    },
    {
      id: 29,
      fullName: 'Đinh Thị Hoa',
      rate: 3,
      content: 'Dịch vụ tạm ổn.',
      createDate: moment().subtract(14, 'days').toISOString()
    },
    {
      id: 30,
      fullName: 'Lê Văn Hùng',
      rate: 4,
      content: 'Sân chơi rộng rãi và thoáng mát.',
      createDate: moment().subtract(15, 'days').toISOString()
    }
  ];

  return (
    <div className="flex-1 flex justify-center max-w-screen-1440 px-14 mx-auto">

      {
        id === "balance"
          ?
          <>
            <MyBalance
              balanceDetail={props.balanceDetail}
              handleAddCentrePopup={handleAddCentrePopup}
            />
          </>
          :
          <>
            {loading
              ?
              <div className="h-[500px] flex items-center justify-center">
                < SpinnerLoading
                  height='80'
                  width='80'
                  color='#2B5A50'
                />
              </div>
              :

              <>
                {props.tab === 0 &&
                  (
                    <CentreInfo
                      centreDetail={centreDetail}
                      imgList={imgList}
                      apiFeedbacks={apiFeedbacks}
                    />
                  )
                }

                {
                  props.tab === 1 &&
                  (
                    <div className="">
                      <StaffInfo
                        staffList={staffList}
                      />
                    </div>
                  )
                }

                {
                  props.tab === 2 &&
                  (
                    <div className="">
                      <CheckIn
                        apiCheckin={checkIn}
                        centreDetail={centreDetail}
                      />
                    </div>
                  )
                }
              </>}
          </>}
    </div >
  );
}

export default Content;
