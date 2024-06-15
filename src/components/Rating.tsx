import React, { useState } from 'react';
import star from '../assets/images/star.svg';
import nostar from '../assets/images/nostar.svg';

interface RatingProps {
  ratingWrapper?: string;
  editable?: boolean;
  star?: string;
  value: number; // Thêm kiểu dữ liệu cho props 'value'
}

const Rating: React.FC<RatingProps> = (props) => {
  const [ratingValue, setRatingValue] = useState<number>(props.value); // Sử dụng useState với kiểu dữ liệu number cho ratingValue

  return (
    <div className={props.ratingWrapper}>
      <div className={props.editable ? 'cursor-pointer' : ''}>
        <img
          src={ratingValue >= 1 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(1) : undefined}
          alt="Star"
          className={props.star}
        />
      </div>
      <div className={props.editable ? 'cursor-pointer' : ''}>
        <img
          src={ratingValue >= 2 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(2) : undefined}
          alt="Star"
          className={props.star}
        />
      </div>
      <div className={props.editable ? 'cursor-pointer' : ''}>
        <img
          src={ratingValue >= 3 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(3) : undefined}
          alt="Star"
          className={props.star}
        />
      </div>
      <div className={props.editable ? 'cursor-pointer' : ''}>
        <img
          src={ratingValue >= 4 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(4) : undefined}
          alt="Star"
          className={props.star}
        />
      </div>
      <div className={props.editable ? 'cursor-pointer' : ''}>
        <img
          src={ratingValue >= 5 ? star : nostar}
          onClick={props.editable ? () => setRatingValue(5) : undefined}
          alt="Star"
          className={props.star}
        />
      </div>
    </div>
  );
};

export default Rating;
