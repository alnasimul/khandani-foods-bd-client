import React from 'react';
import banner from '../../../images/bannerTest.jpg';

const Slider = () => {
    return (
        <div className="container">
           <div className="container-fluid">
                <img style={{width: '1200px', height: '400px' }} className="my-5 me-5 img-fluid" src={banner} alt="" /> 
           </div>
        </div>
    );
};

export default Slider;