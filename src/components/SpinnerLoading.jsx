import React from 'react'
import { ColorRing } from 'react-loader-spinner';

export default function SpinnerLoading() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#2B5A50','#2B5A50','#2B5A50','#2B5A50','#2B5A50']}
        />
    </div>

  )
}
