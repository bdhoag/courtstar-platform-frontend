// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import LanguageSelector from '../components/LanguageSelector';
import Login from '../auth/Login';
import axiosInstance from '../config/axiosConfig';
import DropdownHeader from '../components/DropdownHeader'
import Bell from '../components/notification';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { t } = useTranslation();
  const token = useAuth();

  //HANDLE LOGIN POPUP
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const handleLoginPopup = () => {
    setLoginPopupOpen(true);
  }
  const handleLoginClose = () => {
    setLoginPopupOpen(false);
  }

  //HANDLE LOGIN ACTION
  const [isLogin, setIsLogin] = useState(false);

  //HANDLE LOGOUT ACTION
  const navigate = useNavigate();
  const logout = async() => {
    await axiosInstance.post(`/courtstar/auth/logout`, localStorage.getItem('token'))
      .then(res => {
        localStorage.clear();
        setIsLogin(false);
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally();
  };

  //HANDLE ROLE
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(localStorage.getItem('role'));
    if (isLogin) load();
  }, [isLogin]);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token])

  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: ""
  });

  const load = async () => {
    await axiosInstance.get(`/courtstar/account/myInfor`)
      .then(res => {
        setAccount(res.data.data);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally();
  };
  // Mock notifications for demonstration purposes
  const apiNotifications = [
    {
      id: 1,
      content: "Welcome to CourtStar!",
      date: "1 month ago",
      type: "registered",
      status: true
    },
    {
      id: 2,
      content: "There's a new centre needs approval",
      date: "1 hour ago",
      type: "request",
      status: false
    },
    {
      id: 3,
      content: "There's a new booking",
      date: "1 hour ago",
      type: "booking",
      status: false
    }
  ]

  return (
    <div className='font-Inter text-base overflow-x-hidden w-full shadow-lg fixed z-30'>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary-green">
        <nav className="max-w-screen-1440 1440:mx-auto mx-4 w-full sm:flex sm:items-center sm:justify-between">

          <div className="flex items-center justify-between">
            <div>
              <img src={logo}
                className="w-20 h-20"
                alt='logo' />
            </div>
            <div className="sm:hidden">
              <button type="button"
                className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className="hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden overflow-hidden transition-all duration-300 grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <Link className="font-medium text-white transition-all ease-in-out duration-300"
                to="/">{t('home')}</Link>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/aboutUs">{t('aboutUs')}</Link>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/partnerRegister">{t('partnerRegister')}</Link>
              {
                role && role==='ADMIN' && isLogin &&
                <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                  to="/admin">{t('myDashboard')}</Link>
              }
              {
                (role && (role==='STAFF' || role==='MANAGER')) && isLogin &&
                <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                  to="/myCentre/balance">{t('myCentre')}</Link>
              }
            </div>
          </div>

          <div className="flex">

            <LanguageSelector />

            {(isLogin === false) && (
              <div className="flex gap-4">
                <button className='block border border-white rounded-lg py-2 px-6 text-white transition-all ease-in-out duration-300 hover:bg-gray-200 hover:text-primary-green font-medium cursor-pointer'
                  onClick={handleLoginPopup}
                >
                  {t('logIn')}
                </button>
                <Link className='block rounded-lg py-2 px-6 bg-gray-700 hover:bg-gray-800 transition-all ease-in-out duration-300 font-medium text-gray-200 cursor-pointer'
                  to="/customerRegister"
                >
                  {t('signUp')}
                </Link>
              </div>
            )}

            {(isLogin === true) && (
              <div className="flex items-center gap-3">
                <DropdownHeader userEmail={account.email} logout={logout} />
                <Bell
                  notifications={apiNotifications.reverse()}
                />
              </div>
            )}

          </div>

        </nav>
      </header>

      <Login
        isOpen={loginPopupOpen}
        setIsOpen={handleLoginClose}
        setIsLogin={setIsLogin}
      />
    </div>
  );
}

export default Header;
