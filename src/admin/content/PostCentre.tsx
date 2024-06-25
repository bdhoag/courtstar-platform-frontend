import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axiosConfig';

type Props = {}

const PostCentre = (props: Props) => {
  const controller = new AbortController();
  const { signal } = controller;
  const [loading, setLoading] = useState(true);
  const [listCentrePending, setListCentrePending] = useState();

  const load = async () => {
    await axiosInstance.get(`/courtstar/centre/centre/pending`, { signal })
      .then(res => {
        setListCentrePending(res.data.data)
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

  console.log(listCentrePending);


  return (
    <div
      className='py-5 px-7'
    >
      <div className="text-3xl font-bold">
        Post Centre Request
      </div>

      <div className="bg-white rounded-xl my-5 shadow">
        
      </div>
    </div>
  )
}

export default PostCentre
