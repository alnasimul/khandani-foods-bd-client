import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Shop from '../../Shared/Shop/Shop';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Shop></Shop>
        </div>
    );
};

export default Home;