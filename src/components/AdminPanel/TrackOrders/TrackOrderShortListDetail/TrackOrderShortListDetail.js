import React from 'react';

const TrackOrderShortListDetail = ({ order }) => {
    const { orderId, name, phone, totalBill, shippingCost, cart } = order;
    console.log(cart)
    return (
        <>
            <tr className="text-white">
                <td>{orderId}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{totalBill + shippingCost}</td>
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
        </>


    );
};

export default TrackOrderShortListDetail;