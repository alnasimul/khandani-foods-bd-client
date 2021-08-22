import React from 'react';
import sslcommerz from '../../../../images/sslcommerz.png'
import { processOrder } from '../../../../utilities/databaseManager';
import './PaymentGateway.css';

const PaymentGateway = ({ orderInfo, userDetail, disabled }) => {



    const { _id, ...rest } = userDetail

    //console.log(rest)


    const filteredUserDetail = { ...rest }

    // console.log(filteredUserDetail)

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    //console.log(orderInfo)

    const orderData = { ...filteredUserDetail, ...orderInfo, paymentStatus: 'pending', deliveryStatus: 'pending', confirmStatus: 'pending', completeStatus: 'pending', orderStatus: 'open', created: new Date().toDateString(), month: monthNames[new Date().getMonth()], year: new Date().getFullYear() }

    //console.log(orderData)
    const placeOrderWithSSLCommerz = data => {
        data.paymentMethod= 'DP';
        console.log(data)
        fetch('https://khandanifoodsbd.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then( res => res.json() )
        .then( success => {
            if(success){
                processOrder();
                redirectToSSLCommerz(data)
                alert(`ধন্যবাদ ${userDetail.name}, আমরা আপনার অর্ডারটি পেয়েছি, অনুগ্রহ করে পেমেন্টি সম্পন্ন করুন । `)
            }
        })
    }

    const placeOrderCashOn = (data) => {
        data.paymentMethod= 'COD';
        console.log(data)
        
        fetch('https://khandanifoodsbd.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then( res => res.json() )
        .then( success => {
            if(success){
                processOrder();
                alert(`ধন্যবাদ ${userDetail.name}, আমরা আপনার অর্ডারটি পেয়েছি, অতিসত্তর আপনার প্রোডাক্ট আপনার ঠিকানায় পৌছে যাবে ধন্যবাদ ।`)
                window.location.replace(`http://localhost:3000/orderIsOnWayCOD?orderId=${data.orderId}`);
            }
        })
    }

    const redirectToSSLCommerz = (data) => {
        fetch('https://khandanifoodsbd.herokuapp.com/ssl-payment-gateway-sandbox', {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                window.location.replace(res.url)
            })
        // .then(data => window.location.href(data))

    }


    return (
        <div className=' align-item-center mt-5 text-center paymentGateway'>
            <h4 className='text-center text-success'>Payment Gateway</h4>
            <img src={sslcommerz} alt="" className='img-fluid mt-5' />
            {
                (userDetail.address && orderInfo) ?
                    <div>
                        <button className='btn btn-warning mt-3' onClick={() => placeOrderWithSSLCommerz(orderData)} >অর্ডার কনফার্ম করুন এবং পেমেন্ট সম্পন্ন করুন SSLCOMMERZ এর মাধ্যমে</button>
                        <button className='btn btn-warning mt-3' onClick={() => placeOrderCashOn(orderData)} >ক্যাশ অন ডেলিভারি (শুধু মাত্র সিলেট সিটি এর জন্য) </button>
                    </div>
                    : <div>
                        <button className={`btn btn-warning mt-3 ${disabled}`}  >অর্ডার কনফার্ম করুন এবং পেমেন্ট সম্পন্ন করুন SSLCOMMERZ এর মাধ্যমে</button>
                        <button className={`btn btn-warning mt-3 ${disabled}`}  >ক্যাশ অন ডেলিভারি (শুধু মাত্র সিলেট সিটি এর জন্য) </button>
                         <br /> <br />  <span className='text-danger'> আপনার ঠিকানা সেট করা হয়নি অথবা আপনার শপিং কার্ট সম্পূর্ণ খালি, আপনার ঠিকানা সেট করে এবং শপিং কার্টে পণ্য যোগ করে পুনরায় চেষ্টা করুন ধন্যবাদ ।</span>
                    </div>
            }
        </div>
    );
};

export default PaymentGateway;