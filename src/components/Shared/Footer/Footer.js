import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faGooglePlus, faMailchimp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faMailBulk, faPhone, faEnvelope, faTruck } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <footer className="container footerContainer bg-dark pt-5 pb-2 px-5 text-white my-2" >
            <div className="row" >
                <div className="col-md-3 my-5 mx-3 companyLogo">
                    <img src={logo} alt="" style={{ width: '250px', height: '250px' }} className="img-fluid" />
                </div>
                <div className="col-md-3 my-3 mx-2 followSection ">
                    <h3 className="mx-3 my-3">Follow us on</h3>
                    <br />
                    <a className="nav-link text-white d-flex" href="https://www.facebook.com/khandaniFoodsBd/?ref=pages_you_manage" target="_blank"><FontAwesomeIcon icon={faFacebookF} className="mx-2"></FontAwesomeIcon>fb.com/khandaniFoodsBd</a>
                    <br />
                    <a className="nav-link text-white " href="https://www.instagram.com/khandanifoodsbd" target="_blank" ><FontAwesomeIcon icon={faInstagram} className="mx-2" ></FontAwesomeIcon>Khandani Foods BD</a>
                </div>
                <div className="col-md-3 my-3 mx-3 contactSection">
                    <h3 className="my-3">Contact us</h3>
                    <br />
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faLocationArrow} className="text-white mt-1 mx-2"></FontAwesomeIcon> <p>Jalalabad R/A, Amborkhana, Sylhet</p>
                    </div>
                    <br />
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faPhone} className="text-white mt-4 mx-2"></FontAwesomeIcon> <p>+8801759676800 <br /> +8801303485980 <br /> +8801686933768</p>
                    </div>
                    <br />
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faEnvelope} className="ms-2 mt-3 "></FontAwesomeIcon><a class="nav-link text-white mt-1" href="https://mail.google.com/" target="_blank">khandanifoodsbd@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="d-flex my-3 justify-content-center copyrightSection ">
                <br />
                <FontAwesomeIcon icon={faTruck} className=" mx-2 mt-1"></FontAwesomeIcon> <p> <strong> Home delivery available </strong> </p>
            </div>
            <p className="text-center text-white mt-3 copyrightSection"> © Copyright {(new Date()).getFullYear()} - Khandani Foods BD All Rights Reserved</p>
        </footer>
    );
};

export default Footer;