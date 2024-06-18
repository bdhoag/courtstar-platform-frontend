import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
import { XCarouselProps } from './index';

const XCarousel: React.FC<XCarouselProps> = ({ images }) => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showStatus={false}
        thumbWidth={100}
        transitionTime={1000}
      >
        {images.map((image) => (
          <div key={image.id} className="w-[800px] h-[400px]">
            <img
              src={image.url}
              alt={`Image ${image.imageNo}`}
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default XCarousel;
