import React from 'react';
import banner from '../../../../images/bannerTest.jpg';

const SliderInner = ({ alt }) => {
    return (
        <div class="carousel-item ">
            <img src={banner} class="d-block w-100" alt="..." />
        </div>
    );
};

export default SliderInner;