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
import PartnerRegister from './auth/PartnerRegister';
import CustomerRegister from './auth/CustomerRegister';
import MyCentre from './court-manager/MyCentre';
import Admin from './admin/Admin';
import Profile from './auth/Profile';
import BookingHistory from './customer/BookingHistory';
import SpinnerLoading from './components/SpinnerLoading';
import ManagerRoute from './routes/ManagerRoute';
import AdminRoute from './routes/AdminRoute';
import CustomerRoute from './routes/CustomerRoute';
import AboutUs from './about-us/AboutUs';
import PrivacyPolicy from './about-us/PrivacyPolicy';
import CustomerTerm from './about-us/CustomerTerm';
import PartnerTerm from './about-us/PartnerTerm';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return  <SpinnerLoading 
              type='page'
              height='80'
              width='80'
              color='#2B5A50'
            />
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
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="CustomerTerm" element={<CustomerTerm />} />
          <Route path="PartnerTerm" element={<PartnerTerm />} />
          <Route
            path="myCentre"
            element={
              <ManagerRoute>
                <MyCentre />
              </ManagerRoute>
            }
          />
          <Route
            path="admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="profile"
            element={
              <CustomerRoute>
                <Profile />
              </CustomerRoute>
            }
          />
          <Route
            path="bookingHistory"
            element={
              <CustomerRoute>
                <BookingHistory />
              </CustomerRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
