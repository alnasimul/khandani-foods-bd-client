import React from 'react';
import banner from '../../../images/bannerTest.jpg';
import './slider.css';

const Slider = () => {
    return (
        <div className="container">
           <div className="container-fluid slider">
                <img style={{width: '1200px', height: '400px' }} className="my-5 sliderImg" src={banner} alt="" /> 
           </div>
        </div>
    );
};

export default Slider;