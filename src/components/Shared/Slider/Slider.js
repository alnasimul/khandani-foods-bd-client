import React from 'react';
import SliderInner from './SilderInner/SliderInner';
//import './slider.css';
import banner from '../../../images/bannerTest.jpg';



const Slider = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-12 mb-5">
                <marquee direction="left" height="100" bgcolor="white"><h4 className='text-danger w-100'> &#128525; 😇  আমরা আপনাদেরকে আরো ভালো বিক্রয়োত্তর সেবা প্রদানের জন্য আমাদের এই ইকমার্স সাইটটি ডেভোলাপ করছি ।  অল্প কিছু দিনের মধ্যে আমরা আমদের ওয়েবসাইটটি উদ্ধোদন করতে যাচ্ছি  ইনশাল্লাহ	&#128515; ! আপনাদের সহযোগিতা আমাদের একান্ত কাম্য ধন্যবাদ । &#128522; &#128522;  </h4></marquee>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner slider">
                            {/* <SliderInner></SliderInner>
                            <SliderInner></SliderInner>
                            <SliderInner></SliderInner>
                            <SliderInner></SliderInner> */}
                            <div class="carousel-item active">
                                <img src={banner} class="d-block w-100 sliderImg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={banner} class="d-block w-100 sliderImg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={banner} class="d-block w-100  sliderImg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={banner} class="d-block w-100 sliderImg" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid slider">
                <img style={{width: '1200px', height: '400px' }} className="my-5 sliderImg" src={banner} alt="" /> 
           </div> */}
        </div>
    );
};

export default Slider;