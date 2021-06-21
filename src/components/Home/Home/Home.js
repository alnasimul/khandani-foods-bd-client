import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Shop from '../../Shared/Shop/Shop';
import OurAim from '../OurAim/OurAim';
import OurWords from '../OurWords/OurWords';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Shop></Shop>
            <OurAim></OurAim>
            <OurWords></OurWords>
        </div>
    );
};

export default Home;