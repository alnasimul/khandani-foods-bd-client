import React from 'react';
import OrderShortListDetail from '../OrderShortListDetail/OrderShortListDetail';

const OrdersShortList = ({orders,getPaymentStatus, getDeliveryStatus,getOrderStatus }) => {
    return (
        <table style={{ borderRadius: '7px' }} className="table bg-light table-striped table-bordered">
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
              <OrderShortListDetail order={order} getPaymentStatus={getPaymentStatus} getDeliveryStatus={getDeliveryStatus} getOrderStatus={getOrderStatus}></OrderShortListDetail>
            )
          }
        </tbody>
      </table> 
    );
};

export default OrdersShortList;