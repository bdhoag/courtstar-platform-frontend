import React, {useState} from 'react';
import Centre from './centre/Centre';
import Banner from './centre/Banner';

const Home = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
  };

  console.log(selectedDistrict);

  return (
    <div>
      <Banner onDistrictSelect={handleDistrictSelect} />
      <Centre selectedDistrict={selectedDistrict} />
    </div>
  );
};

export default Home;
