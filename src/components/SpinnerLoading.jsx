import React from 'react'
import { ColorRing } from 'react-loader-spinner';

export default function SpinnerLoading(props) {
  /**
   * ALL PROPS
   * type: 'page' || 'button'
   * height: string
   * width: string
   * color: string
   */
  return (
    <div className={`${props.type === 'page' ? 'h-screen w-screen' : ''} flex items-center justify-center`}>
      <ColorRing
        visible={true}
        height={props.height}
        width={props.width}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={[props.color,props.color,props.color,props.color,props.color]}
        />
    </div>

  )
}
