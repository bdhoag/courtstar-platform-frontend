import React from 'react';

const Sidebar = ({ onDataSubmit }) => {
  // const [centreA, setCentreA] = useState(0);

  // const handleChooseFromDropdown = (value) => {
  //   // setCentreA(data);
  //   handleSubmit(value);
  // };

  // const handleSubmit = (value) => {
  //   onDataSubmit(value);
  // };

  return (
    <div className="py-12 px-6 min-w-64 bg-gray-800 text-gray-500 font-medium flex flex-col gap-10">
      <div className='flex flex-col gap-2'>
        <div className='uppercase font-semibold'>Core</div>
        <button className='text-left hover:text-white transition-all duration-200 ease-in-out group flex gap-1.5 items-center'>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className='stroke-gray-500 group-hover:stroke-white transition-all duration-200 ease-in-out'
          >
            <path d="M15.6 2.7002C13.4612 1.86928 11.1017 1.79917 8.91731 2.50162C6.73294 3.20407 4.85658 4.63636 3.603 6.5582C2.34943 8.48005 1.7949 10.7745 2.03245 13.0567C2.26999 15.339 3.28516 17.4701 4.90765 19.0926C6.53013 20.715 8.66124 21.7302 10.9435 21.9678C13.2257 22.2053 15.5202 21.6508 17.442 20.3972C19.3638 19.1436 20.7961 17.2673 21.4986 15.0829C22.201 12.8985 22.1309 10.539 21.3 8.4002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.4 10.6L19 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>Dashboard</div>
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='uppercase font-semibold'>Management</div>
        <div className='flex flex-col gap-1'>
          <button className='text-left hover:text-white transition-all duration-200 ease-in-out group flex gap-1.5 items-center'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              className='stroke-gray-500 group-hover:stroke-white transition-all duration-200 ease-in-out'
            >
              <path d="M6 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H6C7.10457 19 8 18.1046 8 17V7C8 5.89543 7.10457 5 6 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 7H18C16.8954 7 16 7.89543 16 9V15C16 16.1046 16.8954 17 18 17H20C21.1046 17 22 16.1046 22 15V9C22 7.89543 21.1046 7 20 7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>Centre</div>
          </button>
          <button className='text-left hover:text-white transition-all duration-200 ease-in-out group flex gap-1.5 items-center'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              className='stroke-gray-500 group-hover:stroke-white transition-all duration-200 ease-in-out'
            >
              <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>User</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
