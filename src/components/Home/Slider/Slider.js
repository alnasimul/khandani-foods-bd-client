import React from 'react';
import banner from '../../../images/basicbanner.png';

const Slider = () => {
    return (
        <div className="container">
           <div className="container-fluid">
                <img style={{width: '1100px', height: '300px' }} className="my-4 mx-3 img-fluid" src={banner} alt="" /> 
           </div>
        </div>
    );
};

export default Slider;