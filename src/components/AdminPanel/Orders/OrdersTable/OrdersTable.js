import React from 'react';
import OrdersShortList from '../OrdersShortList/OrdersShortList';
import { Link } from 'react-router-dom';

const OrdersTable = ({orders}) => {
    return (
        <div className="col-md-12 mt-5">
               <div class="btn-group text-white" role="group" aria-label="Basic example">
                        <Link to='/admin-panel/orders-by-date' className=" btn btn-danger bx bx-calendar nav_link p-2 "> 
                            Track orders by date
                        </Link>
                        <Link to='/admin-panel/track-orders' className=" btn btn-success bx bx-search nav_link p-2 ">
                            Track orders
                        </Link>
                    </div>
             <h2 className="text-danger text-center mb-5">Orders</h2>
            <OrdersShortList orders={orders}></OrdersShortList>
        </div>
    );
};

export default OrdersTable;