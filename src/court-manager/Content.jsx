// @ts-nocheck
import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosConfig';
import SpinnerLoading from '../components/SpinnerLoading';
import StaffInfo from './StaffInfo';
import CheckIn from './CheckIn';
import CentreInfo from './CentreInfo';
import MyBalance from './MyBalance';
import { useParams } from 'react-router-dom';

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
      name: 'Huỳnh Đoàn Thanh Phong',
      rating: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 2,
      name: 'Nguyen Thai Thanh',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 3,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 4,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 5,
      name: 'sang ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 6,
      name: 'phat ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 7,
      name: 'alo ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 8,
      name: 'hay di ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 9,
      name: 'dung ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 10,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 11,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 12,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 13,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 14,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 15,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 16,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 17,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 18,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 19,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 20,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 21,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 22,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 23,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 24,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 25,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 26,
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 27,
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 28,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 29,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 30,
      name: 'ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      id: 31,
      name: 'buon ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    }
  ]

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
