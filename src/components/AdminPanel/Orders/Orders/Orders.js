import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrdersTable from '../OrdersTable/OrdersTable';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [paidStatus,setPaidStatus] = useState('');
    const [deliveredStatus,setDeliveredStatus] = useState('');

    const getPaidStatus= (id,status) => {
        if(id){
            setPaidStatus(status);
            fetch(`http://localhost:4000/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({paidStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh())
        }
       
    }
    const getDeliveredStatus = (id,status) => {
        if(id){
            setDeliveredStatus(status);
            fetch(`http://localhost:4000/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({deliveredStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh() )
        }
    }
    const refresh = () => {
        return window.location.reload();
    }
    console.log(paidStatus,deliveredStatus);

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
            <OrdersTable orders={orders} getPaidStatus={getPaidStatus} getDeliveredStatus={getDeliveredStatus}></OrdersTable>
        </section>
        </>
    );
};

export default Orders;