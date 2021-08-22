import React from 'react';
import { processOrderFromOrderDetailsManager } from '../../../utilities/orderDetailsManager';
import Navbar from '../../Shared/Navbar/Navbar';
import OnWay from '../../../images/OrderOnWay.gif';
import exclamatory from '../../../images/exclamatory.gif';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const OrderISOnWayCOD = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        processOrderFromOrderDetailsManager();
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const orderId = getParameterByName('orderId');

    console.log(orderId);
    return (
        <div className='container'>
        <Navbar></Navbar>
        <div className='row m-5 d-flex justify-content-center align-items-center orderOnWay'>
            <div className='col-md-6 col-sm-12'>
                {
                    (orderId) ? <img src={OnWay} alt="" className='img-fluid' />
                        : <img src={exclamatory} alt="" className='img-fluid w-75 ms-3'  style={{ height: '360px' }}/>
                }

            </div>
            <div className='col-md-6 col-sm-12 mt-5'>
                {
                    (orderId) ? <span style={{ color: 'green' }}>ধন্যবাদ <strong className='text-danger'> {userInfo.name} </strong>,আপনার  অর্ডারটি <strong className='text-danger'>(Order ID: #{orderId}) </strong> সাক্সেসফুলি সম্পূর্ণ হয়েছে আমরা অতিসত্তর আপনার ঠিকানায় অর্ডারটি পৌছে দিব ।</span>
                        : <div className='text-center'>
                            <span className='text-danger'>{userInfo.name}, আপনি এখনও কোন অর্ডার করেননি অর্ডার করতে আমাদের শপ থেকে ঘুরে আসুন ধন্যবাদ</span>
                            <br />
                            <br />

                            <Link to='/shop'>
                                <button className='btn btn-danger'>  <FontAwesomeIcon icon={faShopify}> </FontAwesomeIcon> শপে ভিজিট করুন </button>
                            </Link>

                        </div>
                }
            </div>

        </div>
    </div>
    );
};

export default OrderISOnWayCOD;