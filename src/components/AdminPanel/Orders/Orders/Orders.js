import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrdersTable from '../OrdersTable/OrdersTable';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [paymentStatus,setPaymentStatus] = useState('');
    const [deliveryStatus,setDeliveryStatus] = useState('');

    const getPaymentStatus= (id,status) => {
        if(id){
            setPaymentStatus(status);
            fetch(`http://localhost:4000/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({paymentStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh())
        }
       
    }
    const getDeliveryStatus = (id,status) => {
        if(id){
            setDeliveryStatus(status);
            fetch(`http://localhost:4000/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({deliveryStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh() )
        }
    }

    const getOrderStatus = (id,status) => {
        if(id){
            fetch(`http://localhost:4000/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({orderStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh() )
        }
    }
    const refresh = () => {
        return window.location.reload();
    }
    console.log(paymentStatus,deliveryStatus);

    useEffect(() => {
        fetch('http://localhost:4000/getOrders')
        .then( res => res.json())
        .then( data => setOrders(data) )
    },[])
    console.log(orders)
    return (
        <>
          <Sidebar></Sidebar>
        <section className="row">
            <OrdersTable orders={orders} getPaymentStatus={getPaymentStatus} getDeliveryStatus={getDeliveryStatus} getOrderStatus={getOrderStatus}></OrdersTable>
        </section>
        </>
    );
};

export default Orders;