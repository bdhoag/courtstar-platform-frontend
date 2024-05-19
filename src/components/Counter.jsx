import React, { useState, useEffect } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = props.endNumber;
    const totalDuration = props.duration; // total duration in milliseconds
    const incrementTime = 1000 / 60; // update frequency in milliseconds (60fps)

    const step = (end - start) / (totalDuration / incrementTime);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(interval);
  }, [props.endNumber, props.duration]);

  return (
    <div>
      <div>
        {props.prefix}
        {count.toLocaleString('de-DE')}
        {props.postfix}
      </div>
    </div>
  );
};

export default Counter;
