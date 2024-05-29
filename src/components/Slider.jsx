import React, { useState } from 'react';
import arrow from '../assets/images/arrow.svg';
const Slider = (props) => {

  // State to keep track of the currently active image in the image carousel
  const [activeImg, setActiveImg] = useState(0);

  // List of images to be displayed in the image carousel
  const imagesDemoList = props.imagesDemoList;

  // Get the currently active image to be displayed in the main image section
  const imgDisplay = imagesDemoList[activeImg];

  // Function to handle clicking the "previous" button in the image carousel
  const changeActiveMinus = () => {
    setActiveImg((activeImg - 1 + imagesDemoList.length) % imagesDemoList.length);
  };

  // Function to handle clicking the "next" button in the image carousel
  const changeActivePlus = () => {
    setActiveImg((activeImg + 1) % imagesDemoList.length);
  };

  // Function to handle clicking on a thumbnail image to make it the active image
  const clickImgActive = (index) => {
    setActiveImg(index);
  };

  // Render the list of thumbnail images
  const renderListImg = imagesDemoList.map((image, index) => (
    <img
      src={image.url}
      onClick={() => clickImgActive(index)}
      key={index}
      alt="demo centre"
      className={activeImg === index ? 'w-28 scale-90 transition-all ease-in-out duration-200 rounded-lg object-cover' : 'w-28 transition-all ease-in-out duration-200 rounded-lg object-cover cursor-pointer'}
    />
  ));

  return(
    <div className='group'>
      <div className='relative '>
        <img src={imgDisplay.url}
          alt="demo centre"
          className='w-[50rem] h-[25rem] rounded-lg object-cover'
        />
        <button onClick={changeActiveMinus} className="absolute group-hover:flex top-0 left-0 hidden h-full opacity-30 bg-slate-100 w-1/12 transition-all ease-in-out duration-300">
          <img src={arrow} alt="arrow" className='my-auto mx-auto' />
        </button>
        <button onClick={changeActivePlus} className="absolute group-hover:flex top-0 right-0 hidden h-full opacity-30 bg-slate-100 w-1/12 transition-all ease-in-out duration-1000">
          <img src={arrow} alt="arrow" className='rotate-180 my-auto mx-auto' />
        </button>
      </div>
      <div className='flex w-fit h-20 justify-center gap-2 mt-2 py-1.5 px-2.5 border rounded-md bg-white mx-auto'>
        {renderListImg}
      </div>
    </div>
  )
}

export default Slider;
