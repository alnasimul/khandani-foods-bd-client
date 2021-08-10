import React from 'react';
import sslcommerz from '../../../../images/sslcommerz.png'
import { processOrder } from '../../../../utilities/databaseManager';

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
    const placeOrder = data => {
        console.log(data)
        fetch('http://khandanifoodsbd.com:443/addOrder',{
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

    const redirectToSSLCommerz = (data) => {
        fetch('http://khandanifoodsbd.com:443/ssl-payment-gateway-sandbox', {
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
        <div className='col-md-5 align-item-center m-5 text-center'>
            <h4 className='text-center text-success'>Payment Gateway</h4>
            <img src={sslcommerz} alt="" className='img-fluid mt-5' />
            {
                (userDetail.address && orderInfo) ?
                    <button className='btn btn-warning mt-3' onClick={() => placeOrder(orderData)} >confirm order and proceed for payment via sslcommerz</button>
                    : <div>
                        <button className={`btn btn-warning mt-3 ${disabled}`} onClick={() => placeOrder(orderData)} >confirm order and proceed for payment via sslcommerz</button> <br /> <br />  <span className='text-danger'> আপনার ঠিকানা সেট করা হয়নি অথবা আপনার শপিং কার্ট সম্পূর্ণ খালি, আপনার ঠিকানা সেট করে এবং শপিং কার্টে পণ্য যোগ করে পুনরায় চেষ্টা করুন ধন্যবাদ ।</span>
                    </div>
            }
        </div>
    );
};

export default PaymentGateway;