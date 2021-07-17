import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrdersTable from '../OrdersTable/OrdersTable';

const Orders = () => {
    const [orders,setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getOrders')
        .then( res => res.json())
        .then( data => setOrders(data) )
    },[orders])
    console.log(orders)
    return (
        <>
          <Sidebar></Sidebar>
        <section className="row">
            <OrdersTable orders={orders}></OrdersTable>
        </section>
        </>
    );
};

export default Orders;