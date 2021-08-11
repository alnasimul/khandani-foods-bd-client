import React from 'react';
import OrderByDateShortListDetail  from '../OrderByDateShortListDetail/OrderByDateShortListDetail';

const OrdersByDateShortList = ({orders}) => {
  return (
     <table style={{ borderRadius: '7px' }} className="table bg-info table-striped table-bordered"  >
        <thead>
          <tr className="text-dark">
          <th scope="col" style={{ fontSize: '14px'}} >#OrderID</th>
            <th scope="col" style={{ fontSize: '14px'}} >Name</th>
            <th scope="col" style={{ fontSize: '14px'}} >Phone</th>
            <th scope="col" style={{ fontSize: '14px'}} >Email</th>
            <th scope="col" style={{ fontSize: '14px'}} >City</th>
            <th scope="col" style={{ fontSize: '14px'}} >Address</th>
            <th scope="col" style={{ fontSize: '13px'}} >Total</th>
            <th scope="col" style={{ fontSize: '13px'}} >Status(Payment, Delivery, Order)</th>
            <th scope="col" style={{ fontSize: '14px'}} >Item Bought</th>
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