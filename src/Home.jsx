import React, { useState } from 'react';
import Header from './page/Header';
import Centre from './centre/Centre';
import Banner from './centre/Banner';
import Footer from './page/Footer';
import CentreBooking from './centre/CentreBooking';

const Home = () => {
  const [isBooking, setIsBooking] = useState(false);

  const handleBookingClick = () => {
    setIsBooking(true);
  };

  return (
    <div>
      <Header />
      {!isBooking && <Banner />}
      {isBooking ? <CentreBooking /> : <Centre onBookingClick={handleBookingClick} />}
      <Footer />
    </div>
  );
}

export default Home;
