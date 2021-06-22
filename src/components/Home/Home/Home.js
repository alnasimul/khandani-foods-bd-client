import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';
import Shop from '../../Shared/Shop/Shop';
import OurAim from '../OurAim/OurAim';
import OurWords from '../OurWords/OurWords';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Shop></Shop>
            <OurAim></OurAim>
            <OurWords></OurWords>
            <Footer></Footer>
        </div>
    );
};

export default Home;