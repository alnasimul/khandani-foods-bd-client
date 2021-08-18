import React from 'react';
import OrderShortListDetail from './OrderShortListDetail/OrderShortListDetail';

const OrdersShortLists = ({orders,userDetail}) => {
    return (
       <table className='table table-striped table-bordered'>
           <thead>
               <tr>
                   <th scope='col'># OrderID</th>
                   <th scope='col'>Order Date</th>
                   <th scope='col'>Total Bill</th>
                   <th scope='col'>Status</th>
                   <th scope='col'>Item Bought</th>
                </tr>
           </thead>
           <tbody>
               {
                   orders.map( order => <OrderShortListDetail order={order} userDetail={userDetail} ></OrderShortListDetail> )
               }
               
           </tbody>
       </table>
    );
};

export default OrdersShortLists;