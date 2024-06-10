import React, { useState } from 'react';
import CentreDropdown from './CentreDropdown';

const Sidebar = (props) => {
  // const [centreA, setCentreA] = useState(0);

  const handleChooseFromDropdown = (value, centreId) => {
    // setCentreA(data);
    props.onDataSubmit(value, centreId);
  };

  return (
    <div className="py-12 px-10">
      <div className="min-w-60 flex flex-col gap-6">
        <div className='text-2xl font-bold text-center'>
          My Centre
          {/* {props.centreList[0].name} */}
        </div>
        <div className='flex flex-col gap-4'>
          {props.centreList.map((centre, index) => (
            <div
              key={centre.id}
              className=""
            >
              <CentreDropdown
                centreId={centre.id}
                centreName={centre.name}
                isOpen={false}
                onDataSubmit={handleChooseFromDropdown}
              />
            </div>
          ))}
          {/* <CentreDropdown isOpen={false} onDataSubmit={handleChooseFromDropdown} />
          <CentreDropdown isOpen={false} onDataSubmit={handleChooseFromDropdown} /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
