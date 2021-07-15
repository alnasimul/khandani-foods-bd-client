import React from 'react';
import OrderShortListDetail from '../OrderShortListDetail/OrderShortListDetail';

const OrdersShortList = ({trackedOrders}) => {
    return (
        <div className="col-md-7 mt-3">
               <table className="table table-borderless">
            <thead>
            <tr className="bg-dark text-white">
                <th scope="col">#OrderID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Total Bill</th>
                <th scope="col">Item Bought</th>
             </tr>
            </thead>
            <tbody>
                {
                  trackedOrders.map((order, index) => 
                    <OrderShortListDetail order={order}></OrderShortListDetail>
                  )
                }
            </tbody>
        </table>
     
        </div>
          
    );
};

export default OrdersShortList;