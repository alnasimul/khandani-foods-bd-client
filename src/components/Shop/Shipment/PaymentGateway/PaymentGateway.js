import React from 'react';
import sslcommerz from '../../../../images/sslcommerz.png'
import { processOrder } from '../../../../utilities/databaseManager';

const PaymentGateway = ({orderInfo, userDetail}) => {
    const orderData = { ...userDetail, ...orderInfo, paymentStatus: 'pending', deliveryStatus: 'pending' , confirmStatus: 'pending', completeStatus: 'pending', orderStatus : 'open', created: new Date().toDateString(),  }

    const placeOrder = data => {
        console.log(data)
        fetch('http://localhost:4000/addOrder',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderData)

        })
        .then( res => res.json() )
        .then( success => {
            processOrder();
            alert(`ধন্যবাদ ${userDetail.name}, আমরা আপনার অর্ডারটি পেয়েছি, আমরা অতিসত্তর আপনার সাথে যোগাযোগ করবো ধন্যবাদ । `)
        })
    }
    return (
        <div className='col-md-5 align-item-center m-5 text-center'>
            <h4 className='text-center text-success'>Payment Gateway</h4>
            <img src={sslcommerz} alt="" className='img-fluid mt-5'/>
            <button className='btn btn-warning mt-3' onClick={ () => placeOrder(orderData)} >confirm order and proceed for payment via sslcommerz</button>
        </div>
    );
};

export default PaymentGateway;