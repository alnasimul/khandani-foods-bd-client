import React from 'react';

const OrderByDateShortListDetail = ({ order }) => {
    const { orderId, name, totalBill, shippingCost, cart, phone, city, address } = order;
    return (
        <>
            <tr className="text-white">
                <td><small style={{ fontSize: '13px' }}>{orderId}</small></td>
                <td> <small style={{ fontSize: '13px' }}>{name}</small></td>
                <td><small style={{ fontSize: '13px' }}>{phone}</small></td>
                <td> <small style={{ fontSize: '13px' }}>{city}</small></td>
                <td><small style={{ fontSize: '13px' }}>{address} </small></td>
                <td><small style={{ fontSize: '13px' }}>{totalBill + shippingCost} BDT</small> </td>
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