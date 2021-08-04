import React from 'react';
import './OrderShortListDetail.css';

const OrderShortListDetail = ({ order, getPaymentStatus, getDeliveryStatus,getOrderStatus, getConfirmationStatus, getCompleteOrderStatus, deleteOrder }) => {
    const { _id, orderId, name, email, phone, city, address, totalBill, shippingCost, created, cart,paymentStatus,deliveryStatus, confirmStatus, completeStatus } = order;

    const alertForPayment = (status) => {
        if(window.confirm('Are you sure want to update payment status for order id # '+orderId + ' ?')){
            getPaymentStatus(_id,status)
        }
    }
    const alertForConfirmation = (status) => {
        if(window.confirm('Are you sure want to confirm this order ?')){
            getConfirmationStatus(_id,status)
        }
    }
    const alertForDelivery = (status) => {
        if(window.confirm('Are you sure want to update delivery status for order id # '+orderId + ' ?')){
            getDeliveryStatus(_id,status)
        }
    }
    const alertForComplteteOrder = (status) => {
        if(window.confirm('Are you sure want to complete this order ?')){
            getCompleteOrderStatus(_id,status)
        }
    }
    const alertForCloseOrder = (status) => {
        if(window.confirm('Are you sure want to close this order ?')){
            getOrderStatus(_id,status)
        }
    }
    const alertForDelete = (id) => {
        if(window.confirm('Are you sure want to delete this order ?')){
            deleteOrder(id)
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
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForConfirmation('confirmed') } >Confirmed</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForDelivery('delivered') } >Delivered</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForComplteteOrder('completed') } >Completed</a></li>
                          
                            <hr />
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPayment('pending') } >Undo Paid</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForConfirmation('pending') } >Undo Confirmed</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForDelivery('pending') } >Undo Delivered</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForComplteteOrder('pending') } >Undo Completed</a></li>
                            <hr />
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForCloseOrder('closed') } >Close order</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () =>  alertForDelete(_id) } >Delete</a></li>
                        </ul>
                    </div>
                </td>
                <td><small style={{ fontSize: '15px',  borderRadius: '4px' }} className='bg-danger p-1 text-white'> <strong>{ paymentStatus}, {confirmStatus}, {deliveryStatus} , {completeStatus}</strong> </small></td>
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
        </>
    );
};

export default OrderShortListDetail;