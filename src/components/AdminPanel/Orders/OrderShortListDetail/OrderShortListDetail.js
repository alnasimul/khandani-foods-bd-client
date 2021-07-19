import React from 'react';
import './OrderShortListDetail.css';

const OrderShortListDetail = ({ order, getPaidStatus, getDeliveredStatus }) => {
    const { _id, orderId, name, email, phone, city, address, totalBill, shippingCost, created, cart,paidStatus,deliveredStatus } = order;

    const alertForPayment = (status) => {
        if(window.confirm('Are you sure want to update payment status for order id # '+orderId + ' ?')){
            getPaidStatus(_id,status)
        }
    }
    const alertForDelivery = (status) => {
        if(window.confirm('Are you sure want to update delivery status for order id # '+orderId + ' ?')){
            getDeliveredStatus(_id,status)
        }
    }
    return (
        <>
            <tr className="text-darl">
                <td><small style={{ fontSize: '13px' }}> <strong>#{orderId}</strong> </small></td>
                <td> <small style={{ fontSize: '13px' }}> <strong>{name}</strong></small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{email}</strong></small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{phone}</strong></small></td>
                <td> <small style={{ fontSize: '13px' }}> <strong>{city}</strong></small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{address}</strong> </small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{created} </strong></small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{totalBill + shippingCost} BDT</strong></small> </td>
                <td>
                    <div className="dropdown" style={{width:''}}>
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPayment('paid') } >Paid</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForDelivery('delivered') } >Delivered</a></li>
                            <hr />
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPayment('none') } >Undo Paid</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForDelivery('none') } >Undo Delivered</a></li>
                        </ul>
                    </div>
                </td>
                <td><small style={{ fontSize: '13px', backgroundColor:'#ad121a', color:'#fff', padding: '6px',border: 'none', borderRadius: '4px' }}> <strong>{ paidStatus ? paidStatus + ',' : 'none,'} {deliveredStatus ? deliveredStatus : 'none'}</strong> </small></td>
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