import React from 'react';
import CentreDropdown from './CentreDropdown';

const Sidebar = ({ onDataSubmit }) => {
  // const [centreA, setCentreA] = useState(0);

  const handleChooseFromDropdown = (value) => {
    // setCentreA(data);
    handleSubmit(value);
  };

  const handleSubmit = (value) => {
    onDataSubmit(value);
  };

  return (
    <div className="py-12 px-10">
      <div className="min-w-60 flex flex-col gap-6">
        <div className='text-2xl font-bold text-center'>
          My Centre
        </div>
        <div className='flex flex-col gap-4'>
          <CentreDropdown isOpen={true} onDataSubmit={handleChooseFromDropdown}/>
          <CentreDropdown isOpen={false} onDataSubmit={handleChooseFromDropdown}/>
          <CentreDropdown isOpen={false} onDataSubmit={handleChooseFromDropdown}/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
