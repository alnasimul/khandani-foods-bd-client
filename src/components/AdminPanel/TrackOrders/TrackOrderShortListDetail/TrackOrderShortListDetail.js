import React from 'react';
import { useState } from 'react';
import Update from '../../Shared/Update/Update';

const TrackOrderShortListDetail = ({ order }) => {
    const { orderId, name, phone, email, city, address, totalBill, shippingCost, cart, paymentStatus, deliveryStatus, orderStatus } = order;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <tr className="text-white">
                <td><small style={{ fontSize: '13px'}} > <strong> #{orderId} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {name} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {phone} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {email}</strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {city} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {address} </strong> </small></td>
                <td><small style={{ fontSize: '13px'}} > <strong> {totalBill + shippingCost} </strong> </small></td>
                <td><small style={{ fontSize: '15px'}} className="bg-warning p-1 text-dark" > <strong> {paymentStatus}, {deliveryStatus}, {orderStatus}  </strong> </small></td>
                <td> <button className="btn btn-warning  btn-sm" onClick={() => openModal() }> Update</button></td>
                <td>
                    <table className="table" style={{ borderRadius: '7px !important' }} >
                        <thead >
                            <tr className="text-dark bg-light">
                                <th scope="col" > <small>Title</small> </th>
                                <th scope="col" > <small>Quantity</small> </th>
                                <th scope="col" > <small>Unit Price</small></th>
                                <th scope="col" > <small>Weight</small></th>
                            </tr>
                        </thead>
                        <tbody style={{ width: '400px' }}>
                            {
                                cart.map(item =>
                                    <tr className="text-dark bg-light p-5">
                                        <td> <small style={{ fontSize: '13px' }}>{item.title}</small></td>
                                        <td> <small style={{ fontSize: '13px' }}>{item.quantity}</small>  </td>
                                        <td> <small style={{ fontSize: '13px' }}>{item.price} BDT</small></td>
                                        <td><small style={{ fontSize: '13px' }}> ({item.weight}) </small> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </td>
            </tr>
            {
            modalIsOpen &&
                <Update order={order} modalIsOpen={modalIsOpen} closeModal={closeModal}></Update>
            }
        </>


    );
};

export default TrackOrderShortListDetail;