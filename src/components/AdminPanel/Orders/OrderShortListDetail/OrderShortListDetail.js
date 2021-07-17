import React from 'react';
import './OrderShortListDetail.css';

const OrderShortListDetail = ({ order }) => {
    const { orderId, name, email, phone, city, address, totalBill, shippingCost, created, cart } = order;
    return (
        <>
            <tr className="text-white">
                <td><small style={{ fontSize: '13px' }}>{orderId}</small></td>
                <td> <small style={{ fontSize: '13px' }}>{name}</small></td>
                <td><small style={{ fontSize: '13px' }}>{email}</small></td>
                <td><small style={{ fontSize: '13px' }}>{phone}</small></td>
                <td> <small style={{ fontSize: '13px' }}>{city}</small></td>
                <td><small style={{ fontSize: '13px' }}>{address} </small></td>
                <td><small style={{ fontSize: '13px' }}>{created} </small></td>
                <td><small style={{ fontSize: '13px' }}>{totalBill + shippingCost} BDT</small> </td>
                <td>
                    <div className="dropdown" style={{width:''}}>
                        <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#">Paid</a></li>
                            <li><a className="dropdown-item" href="#">Deliverd</a></li>
                        </ul>
                    </div>
                </td>
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

export default OrderShortListDetail;