
import React from 'react';
import './Loader.css'; 
import logo from '../../assets/logo-balady.png'
import BounceLoader from 'react-spinners/BounceLoader';
import logo1 from '../../assets/loader-logo.png'





const Loader = () => {
  return (
    <div className="loader relative">
        <div className='w-[100px] h-[100px] ml-5  '>
        <BounceLoader
  color="#ebf0ec"
  size={90}
/>

        </div>
      <img src={logo1} alt="Loading..." className="loader-image w-[200px] h-[200px] absolute top-50 left-50" />
    </div>
  );
};

export default Loader;
