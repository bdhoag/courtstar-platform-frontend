import React, { useState } from 'react';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/nostar.svg';

export default function Rating(props) {
  /**
   * ALL PROPS
   * ratingWrapper: string
   * editable: boolean
   * star: string
   */
  const [ratingValue, setRatingValue] = useState(props.value);

  return (
    <div className={props.ratingWrapper}>
      <div
        className={props.editable ? 'cursor-pointer' : ''}
      >
        <img src={ratingValue >=1 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(1) : null }
          alt="Star"
          className={props.star}/>
      </div>
      <div
        className={props.editable ? 'cursor-pointer' : ''}
      >
        <img src={ratingValue >=2 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(2) : null }
          alt="Star"
          className={props.star}/>
      </div>
      <div
        className={props.editable ? 'cursor-pointer' : ''}
      >
        <img src={ratingValue >=3 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(3) : null }
          alt="Star"
          className={props.star}/>
      </div>
      <div
        className={props.editable ? 'cursor-pointer' : ''}
      >
        <img src={ratingValue >=4 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(4) : null }
          alt="Star"
          className={props.star}/>
      </div>
      <div
        className={props.editable ? 'cursor-pointer' : ''}
      >
        <img src={ratingValue >=5 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(5) : null }
          alt="Star"
          className={props.star}/>
      </div>
  </div>
  )
}
