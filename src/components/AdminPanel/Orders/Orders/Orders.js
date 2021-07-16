import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OrdersByDate from '../OrdersByDate/OrdersByDate';

const Orders = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [orders, setOrders] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        const newDate = selectedDate.toDateString();
        fetch('http://localhost:4000/ordersByDate',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({date: newDate})
        })
        .then( res => res.json() )
        .then( data => setOrders(data)) 
    },[selectedDate])
    console.log(orders)
    return (
       <>
       <Sidebar></Sidebar>
        <section className="row">
            <div className="col-md-3 col-sm-12 mt-5 ms-0" style={{width: '450px'}}>
                    <h1 className='mb-5'>Calendar</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
            </div>
            <OrdersByDate orders={orders}></OrdersByDate>
        </section>
       </> 
    );
};

export default Orders;