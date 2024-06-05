import React, { useState, useEffect, useRef } from 'react';
import bell from '../assets/images/bell.svg';
import notify from '../assets/images/icon-notify.svg'

const BellNotification = ({ notifications, onNotificationClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="relative rounded-full w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out focus:outline-none"
            >
                <img src={bell} alt="bell" className="w-6 h-6" />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 h-2 w-2 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full" />
                )}
            </button>

            {isOpen && (
                <div className="z-50 fixed mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg right-0">
                    <div className="p-2">
                        <h4 className="text-lg font-semibold text-gray-700 text-center">Notifications</h4>
                        {notifications.length === 0 && (
                            <p className="text-gray-500">No new notifications</p>
                        )}
                        <ul className="mt-2">
                            {notifications.map((notification, index) => (
                                <li key={notification.id}
                                    className={`flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer ${index < notifications.length - 1 ? 'border-b border-gray-200' : ''}`}
                                    onClick={() => onNotificationClick(notification)}>
                                    <img src={notify} alt="" className='w-4 h-4 mr-2' />
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray-700">{notification.message}</span>
                                        <span className="text-gray-500 text-sm">{notification.time}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BellNotification;
