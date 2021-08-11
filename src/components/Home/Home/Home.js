import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from '../../Shared/Slider/Slider';
import Shop from '../../Shop/Shop/Shop';
import OurAim from '../OurAim/OurAim';
import OurWords from '../OurWords/OurWords';
import Footer from '../../Shared/Footer/Footer';
import HomeBlogs from '../HomeBlogs/HomeBlogs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Shop></Shop>
            <HomeBlogs></HomeBlogs>
            <OurAim></OurAim>
            <OurWords></OurWords>
            <Footer></Footer>
        </div>
    );
};

export default Home;