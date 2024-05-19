import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import NoPage from "./page/NoPage";
import ScrollToTop from './components/ScrollToTop';
import Home from './Home';
import CentreBooking from './centre/CentreBooking';
import Centre from './centre/Centre';
import PartnerRegister from './auth/PartnerRegister';
import CustomerRegister from './auth/CustomerRegister';
import Login from './auth/Login';
import MyCentre from './court-manager/MyCentre';
import ForgotPassword from './ForgotPassword';
import CheckEmail from './CheckEmail';
import SetNewPassword from './SetNewPassword';
import NewPasswordSuccessful from './NewPasswordSuccessful';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="partnerRegister" element={<PartnerRegister />} />
          <Route path="customerRegister" element={<CustomerRegister />} />
          <Route path="login" element={<Login />} />
          <Route path="centreBooking" element={<CentreBooking />} />
          <Route path="listOfCentre" element={<Centre />} />
          <Route path="myCentre" element={<MyCentre />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
