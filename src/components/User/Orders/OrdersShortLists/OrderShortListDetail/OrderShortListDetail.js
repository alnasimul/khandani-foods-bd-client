import React from 'react';

const OrderShortListDetail = ({order, userDetail}) => {
    const { orderId, cart, totalBill, shippingCost, created, paymentStatus, confirmStatus, deliveryStatus, completeStatus } = order;
    const { name, phone, address, city } = userDetail;
    return (
       <tr>
           <td><small><strong> #{orderId} </strong></small></td>
           <td><small><strong> {address} </strong></small></td>
           <td><small><strong> {city} </strong></small></td>
           <td><small><strong> {created} </strong></small></td>
           <td><small><strong> {totalBill + shippingCost} </strong></small></td>
           <td><small><strong> ({paymentStatus}, {confirmStatus}, {deliveryStatus}, {completeStatus}) </strong></small></td>
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
                                        <td> <small style={{ fontSize: '13px' }}>{ item.salePrice ?  <del>{item.regularPrice}</del> : <span>{item.regularPrice} BDT </span> }</small>  <small style={{ fontSize: '11px' }}> ({item.weight}) </small> <br/> <small > { item.salePrice && <span style={{fontSize: '11px'}} > {item.salePrice} BDT  </span>} </small>  </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
           </td>
           
       </tr>
    );
};

export default OrderShortListDetail;