import React from 'react';
import CentreDropdown from './CentreDropdown';

const Sidebar = ({ onDataSubmit1 }) => {
  // const [centreA, setCentreA] = useState(0);

  const handleChooseFromA = (data) => {
    // setCentreA(data);
    handleSubmit(data);
  };

  const handleSubmit = (data) => {
    onDataSubmit1(data);
  };

  return (
    <div className="py-12 px-10">
      <div className="min-w-60 flex flex-col gap-6">
        <div className='text-2xl font-bold text-center'>
          My Centre
        </div>
        <div className='flex flex-col gap-4'>
          <CentreDropdown onDataSubmit={handleChooseFromA}/>
          {/* <CentreDropdown />
          <CentreDropdown /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
