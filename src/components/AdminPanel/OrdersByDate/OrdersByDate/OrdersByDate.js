import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import OrdersByDateTable from '../OrdersByDateTable/OrdersByDateTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faSearch } from '@fortawesome/free-solid-svg-icons';


const OrdersByDate = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [orders, setOrders] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        const newDate = selectedDate.toDateString();
        fetch(`http://khandanifoodsbd.com:443/ordersByDate?email=${userInfo.email}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ date: newDate })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [selectedDate])
    console.log(orders)
    return (
        <>
           
            <section className="row" style={{backgroundColor: "rgb(2,1,3, 0.1)", height:'100vh'}}>
            <Sidebar></Sidebar>
                <div className="col-md-3 col-sm-12 mt-5 ms-0" style={{ width: '450px' }}>
                    <div class="btn-group text-white mb-5" role="group" aria-label="Basic example">
                        <Link to='/admin-panel/orders-by-date' className=" btn btn-danger "> 
                           <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon> Track orders by date
                        </Link>
                        <Link to='/admin-panel/track-orders' className=" btn btn-success ">
                        <FontAwesomeIcon icon={faSearch} className='mt-1'></FontAwesomeIcon> Track Orders
                        </Link>
                    </div>
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