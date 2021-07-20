import React from 'react';

const OrderByDateShortListDetail = ({ order }) => {
    const { orderId, name, totalBill, shippingCost, cart, phone, city, address, email, paymentStatus, deliveryStatus, orderStatus } = order;
    return (
        <>
            <tr className="text-dark">
            <td><small style={{ fontSize: '13px'}} > <strong> #{orderId} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {name} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {phone} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {email}</strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {city} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {address} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {totalBill + shippingCost} </strong> </small></td>
                <td><small style={{ fontSize: '15px'}} className="bg-warning p-1" > <strong> {paymentStatus}, {deliveryStatus}, {orderStatus}  </strong> </small></td>
                <td>
                    <table className="table" style={{ borderRadius: '7px !important' }} >
                        <thead >
                            <tr className="text-dark bg-light">
                                <th scope="col" > <small>Title</small> </th>
                                <th scope="col" > <small>Quantity</small> </th>
                                <th scope="col" > <small>Unit Price</small></th>
                            </tr>
                        </thead>
                        <tbody style={{ width: '400px' }}>
                            {
                                cart.map(item =>
                                    <tr className="text-dark bg-light p-5">
                                        <td> <small style={{ fontSize: '13px' }}>{item.title}</small></td>
                                        <td> <small style={{ fontSize: '13px' }}>{item.quantity}</small>  </td>
                                        <td> <small style={{ fontSize: '13px' }}>{item.price} BDT</small>  <small style={{ fontSize: '11px' }}> ({item.weight}) </small></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    );
};

export default OrderByDateShortListDetail;