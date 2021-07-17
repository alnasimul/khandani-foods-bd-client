import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import OrdersByDateTable from '../OrdersByDateTable/OrdersByDateTable';


const OrdersByDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [orders, setOrders] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        const newDate = selectedDate.toDateString();
        fetch('http://localhost:4000/ordersByDate', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ date: newDate })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [selectedDate])
    console.log(orders)
    return (
        <>
            <Sidebar></Sidebar>
            <section className="row">
                <div className="col-md-3 col-sm-12 mt-5 ms-0" style={{ width: '450px' }}>
                    <div class="btn-group text-white" role="group" aria-label="Basic example">
                        <Link to='/admin-panel/orders-by-date' className=" btn btn-danger bx bx-calendar nav_link p-2 "> 
                            Track orders by date
                        </Link>
                        <Link to='/admin-panel/track-orders' className=" btn btn-success bx bx-search nav_link p-2 ">
                            Track orders
                        </Link>
                    </div>
                    <h1 className='mb-5'>Calendar</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <OrdersByDateTable orders={orders}></OrdersByDateTable>
            </section>
        </>
    );
};

export default OrdersByDate;