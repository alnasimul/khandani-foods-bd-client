import React from 'react';
import OrderShortListDetail  from '../OrderShortListDetail/OrderShortListDetail';

const OrdersShortList = ({orders}) => {
  return (
     <table style={{ borderRadius: '7px' }} className="table bg-success">
        <thead>
          <tr className=" text-white">
            <th scope="col">#OrderID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Total</th>
            <th scope="col">Item Bought</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) =>
              <OrderShortListDetail order={order}></OrderShortListDetail>
            )
          }
        </tbody>
      </table> 
  );
};

export default OrdersShortList;