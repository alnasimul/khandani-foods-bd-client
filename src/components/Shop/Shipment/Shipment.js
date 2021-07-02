import React, { useEffect, useState } from 'react';
import { getOrderDetails } from '../../../utilities/orderDetailsManager';

const Shipment = () => {
    const [orderInfo,setOrderInfo] = useState({});
    useEffect(() => {
        setOrderInfo(getOrderDetails());
    } , []);

    console.log(orderInfo)
    return (
        <div className='container'>
            <div className='text-center text-success'>
                <h4 >Order ID # {orderInfo.orderId}</h4>
            </div>
        </div>
    );
};

export default Shipment;