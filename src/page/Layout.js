import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/toast.css';

const Layout = () => {
  return (
    <div className="relative">

      <Header />
      <div className="min-h-20"></div>
      <Outlet />
      <Footer />
      <ToastContainer draggable/>
    </div>
  )
};

export default Layout;
