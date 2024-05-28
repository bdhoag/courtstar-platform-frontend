import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/scrollbar.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import NoPage from "./page/NoPage";
import ScrollToTop from './components/ScrollToTop';
import Home from './Home';
import CentreBooking from './centre/CentreBooking';
import Centre from './centre/Centre';
import PartnerRegister from './auth/PartnerRegister';
import CustomerRegister from './auth/CustomerRegister';
import MyCentre from './court-manager/MyCentre';
import Admin from './admin/Admin';
import Profile from './auth/Profile';
import BookingHistory from './customer/BookingHistory';
import SpinnerLoading from './components/SpinnerLoading';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SpinnerLoading />
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="partnerRegister" element={<PartnerRegister />} />
          <Route path="customerRegister" element={<CustomerRegister />} />
          <Route path="centreBooking" element={<CentreBooking />} />
          <Route path="listOfCentre" element={<Centre />} />
          <Route path="myCentre" element={<MyCentre />} />
          <Route path="admin" element={<Admin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookingHistory" element={<BookingHistory />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
