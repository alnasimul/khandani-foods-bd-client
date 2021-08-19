import React from 'react';

const SingleOrderAccordion = ({ order, index, getPaymentStatus, getConfirmationStatus, getDeliveryStatus, getCompleteOrderStatus, deleteOrder, getOrderStatus }) => {

    const { _id, orderId, name, email, phone, city, address, totalBill, shippingCost, created, cart, paymentStatus, deliveryStatus, confirmStatus, completeStatus } = order;

    const alertForPayment = (status) => {
        if (window.confirm('Are you sure want to update payment status for order id # ' + orderId + ' ?')) {
            getPaymentStatus(_id, status)
        }
    }
    const alertForConfirmation = (status) => {
        if (window.confirm('Are you sure want to confirm this order ?')) {
            getConfirmationStatus(_id, status)
        }
    }
    const alertForDelivery = (status) => {
        if (window.confirm('Are you sure want to update delivery status for order id # ' + orderId + ' ?')) {
            getDeliveryStatus(_id, status)
        }
    }
    const alertForComplteteOrder = (status) => {
        if (window.confirm('Are you sure want to complete this order ?')) {
            getCompleteOrderStatus(_id, status)
        }
    }
    const alertForCloseOrder = (status) => {
        if (window.confirm('Are you sure want to close this order ?')) {
            getOrderStatus(_id, status)
        }
    }
    const alertForDelete = (id) => {
        if (window.confirm('Are you sure want to delete this order ?')) {
            deleteOrder(id)
        }
    }
    return (
        <div class="accordion w-100" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id={`heading${index}`}>
                    <button class="accordion-button collapsed  text-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                        #{orderId}
                    </button>
                </h2>
                <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <p><strong>Name</strong> {name}</p>
                                <p><strong>Email</strong>{email}</p>
                                <p><strong>Phone</strong> {phone}</p>
                                <p><strong>City</strong> {city}</p>
                                <p><strong>Address</strong> {address}</p>
                                <p><strong>Bill</strong> {totalBill + shippingCost}</p>
                                <p><strong>Date</strong>{created}</p>
                                <p><strong>Status</strong> {paymentStatus},{deliveryStatus}, {confirmStatus}, {completeStatus}</p>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Action
                                </a>
                                <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                                    <li> <a className="dropdown-item" href="#" onClick={() => alertForPayment('paid')} >Paid</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForConfirmation('confirmed')} >Confirmed</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForDelivery('delivered')} >Delivered</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForComplteteOrder('completed')} >Completed</a></li>

                                    <hr />
                                    <li> <a className="dropdown-item" href="#" onClick={() => alertForPayment('pending')} >Undo Paid</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForConfirmation('pending')} >Undo Confirmed</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForDelivery('pending')} >Undo Delivered</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForComplteteOrder('pending')} >Undo Completed</a></li>
                                    <hr />
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForCloseOrder('closed')} >Close order</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => alertForDelete(_id)} >Delete</a></li>
                                </ul>
                            </div>
                        </div>
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
                                            <td> <small style={{ fontSize: '13px' }}>{item.salePrice ? <del>{item.regularPrice}</del> : <span>{item.regularPrice} BDT </span>}</small>  <small style={{ fontSize: '11px' }}> ({item.weight}) </small> <br /> <small > {item.salePrice && <span style={{ fontSize: '11px' }} > {item.salePrice} BDT  </span>} </small>  </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrderAccordion;