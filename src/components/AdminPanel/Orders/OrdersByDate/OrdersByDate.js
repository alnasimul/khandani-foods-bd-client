import React from 'react';
import OrdersShortList from '../OrdersShortList/OrdersShortList';

const OrdersByDate = ({orders}) => {
    return (
        <div className="col-md-9 col-sm-12 ">
              <div className='mt-5'>
                <h2 className="text-brand text-center mb-5">Orders</h2>
                {
                    orders.length ?
                        <OrdersShortList orders={orders}></OrdersShortList>
                        :
                        <div className="p-5">
                            <h4 className="lead text-center">No Orders for this Date</h4>
                        </div>
                }
            </div>
        </div>
    );
};

export default OrdersByDate;