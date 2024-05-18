import React from 'react';
import Header from './page/Header';
import Centre from './centre/Centre';
import Banner from './centre/Banner';
import Footer from './page/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Centre />
      <Footer />
    </div>
  );
}

export default Home;
