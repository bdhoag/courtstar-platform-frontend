import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <div className='font-Inter text-base text-white overflow-x-hidden'>
      <footer className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800">
        <div className="max-w-screen-1440 1440:mx-auto mx-4 w-full flex flex-col items-center justify-between">
          <div className='flex justify-between items-center w-full py-5'>
            <img src={logo}
              alt="logo"
              className='w-52 h-52 block basis-1/3'
            />
            <div className='flex flex-col basis-1/3 gap-4'>
              <div>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/aboutUs">About us</Link>
              </div>
              <div>
              <Link className="text-gray-200 hover:text-white transition-all ease-in-out duration-300"
                to="/partnerRegister">Partner Registration</Link>
              </div>
              <div>
                <a href="#terms"
                  className='hover:text-gray-300 transition-all duration-200 ease-in-out'>
                  Terms
                </a>
              </div>
              <div>
                <a href="#privacy"
                  className='hover:text-gray-300 transition-all duration-200 ease-in-out'>
                  Privacy
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex flex-col gap-5'>
              <div>
                Email: courtstar.se@gmail.com
              </div>
              <div>
                Address: Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
              </div>
            </div>
          </div>
          <hr className='bg-white w-[100vw]'/>
          <div className='py-4'>
            © All rights reserved 2024 Court Star
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
