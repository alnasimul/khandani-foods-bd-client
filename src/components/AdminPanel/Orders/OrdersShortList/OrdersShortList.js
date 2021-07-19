import React from 'react';
import OrderShortListDetail from '../OrderShortListDetail/OrderShortListDetail';

const OrdersShortList = ({orders,getPaidStatus, getDeliveredStatus }) => {
    return (
        <table style={{ borderRadius: '7px' }} className="table bg-info ">
        <thead className="fixed-postition">
          <tr className=" text-dark">
            <th scope="col">#OrderID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
            <th scope="col">Status (Payment, Delivery)</th>
            <th scope="col">Item Bought</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) =>
              <OrderShortListDetail order={order} getPaidStatus={getPaidStatus} getDeliveredStatus={getDeliveredStatus}></OrderShortListDetail>
            )
          }
        </tbody>
      </table> 
    );
};

export default OrdersShortList;