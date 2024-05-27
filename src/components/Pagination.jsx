import React, { useState } from 'react';
import Rating from "./Rating";

function Pagination(props) {

  const apiFeedbacks = [
    {
      name: 'Huỳnh Đoàn Thanh Phong',
      rating: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      name: 'Nguyen Thai Thanh',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      name: 'thanh ngu',
      rating: 3,
      content: 'Lorem ipsum doalesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      name: 'phong ngu',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    },
    {
      name: 'hoang ngu',
      rating: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Neo.'
    },
    {
      name: 'sang ngu',
      rating: 4,
      content: ' ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.'
    }
  ];


  return (
    <div>
      {apiFeedbacks.map((feedback, index) => (
        <div key={index} className="feedback-item">
          <div>{feedback.name}</div>
          <Rating value={feedback.rating} />
          <p>{feedback.content}</p>
        </div>
      ))}
    </div>
    );
}

export default Pagination;
