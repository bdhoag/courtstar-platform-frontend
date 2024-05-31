import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import LanguageSelector from '../components/LanguageSelector';
import Login from '../auth/Login';
import bell from '../assets/images/bell.svg';

const Header = () => {
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
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account_id');
    localStorage.removeItem('role');
    setIsLogin(false);
    navigate('/');
  };

  //HANDLE ROLE
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [isLogin]);

  useEffect(() => {
    const userRole = localStorage.getItem('role');
    if (userRole) {
      setIsLogin(true);
    }
  }, [])


  return (
    <div className='font-Inter text-base overflow-x-hidden'>
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
                to="/">Home</Link>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/listOfCentre">List of Centre</Link>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/aboutUs">About us</Link>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/partnerRegister">Partner Register</Link>
              {
                role === 'ADMIN' &&
                <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                  to="/admin">My Dashboard</Link>
              }
              {
                (role === 'ADMIN' || role === 'CENTRE_MANAGER' || role === 'CENTRE_STAFF') &&
                <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                  to="/myCentre">My Centre</Link>
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
                  Log in
                </button>
                <Link className='block rounded-lg py-2 px-6 bg-gray-700 hover:bg-gray-800 transition-all ease-in-out duration-300 font-medium text-gray-200 cursor-pointer'
                  to="/customerRegister"
                >
                  Sign up
                </Link>
              </div>
            )}

            {(isLogin === true) && (
              <div className='flex gap-8 items-center justify-between'>
                <div className="hidden overflow-hidden transition-all duration-300 grow sm:block">
                  <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0">
                    <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                      to="/bookingHistory">Booking History</Link>
                    <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                      to="/profile">Profile</Link>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <button className='rounded-full w-8 h-8 hover:bg-gray-800 flex justify-center items-center transition-all duration-300 ease-in-out'>
                    <img src={bell}
                      alt="bell"
                    />
                  </button>
                  <button className='block rounded-lg py-2 px-6 bg-gray-700 hover:bg-gray-800 transition-all ease-in-out duration-300 font-medium text-gray-200 cursor-pointer'
                    onClick={logout}
                  >
                    Log out
                  </button>
                </div>
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
