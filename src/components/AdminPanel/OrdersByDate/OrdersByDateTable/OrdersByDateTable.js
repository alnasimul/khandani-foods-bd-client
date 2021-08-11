import React from 'react';
import OrdersByDateShortList from '../OrdersByDateShortList/OrdersByDateShortList';

const OrdersByDateTable = ({orders}) => {
    return (
        <div className="col-md-7 col-sm-12 " style={{width:'59%'}}>
              <div className='mt-5'>
                <h2 className="text-brand text-center mb-5">Orders</h2>
                {
                    orders.length ?
                        <OrdersByDateShortList orders={orders}></OrdersByDateShortList>
                        :
                        <div className="p-5">
                            <h4 className="lead text-center">No Orders for this Date</h4>
                        </div>
                }
            </div>
        </div>
    );
};

export default OrdersByDateTable;