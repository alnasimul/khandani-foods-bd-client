import React from 'react';
import OrderByDateShortListDetail  from '../OrderByDateShortListDetail/OrderByDateShortListDetail';

const OrdersByDateShortList = ({orders}) => {
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
              <OrderByDateShortListDetail order={order}></OrderByDateShortListDetail>
            )
          }
        </tbody>
      </table> 
  );
};

export default OrdersByDateShortList;