import React from 'react';
import ReactPaginate from 'react-paginate';
import SingleOrderAccordion from '../SingleOrderAccordion/SingleOrderAccordion';
import './OrdersAccordion.css';

const OrdersAccordion = ({ orders, getPaymentStatus, getConfirmationStatus, getDeliveryStatus, getCompleteOrderStatus, deleteOrder, getOrderStatus, pageCount, changePage, loading }) => {
    return (
        <div className="col-md-12 col-10 col-sm-10 ms-2 mt-4 ordersAccordion">
            {
                loading ? <div className={` d-flex justify-content-center m-5`} style={{ height: '500px' }}>
                    <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                    : (orders.length > 0 ? orders.map((order, index) => <SingleOrderAccordion order={order} getPaymentStatus={getPaymentStatus} getDeliveryStatus={getDeliveryStatus} getOrderStatus={getOrderStatus} getConfirmationStatus={getConfirmationStatus} getCompleteOrderStatus={getCompleteOrderStatus} deleteOrder={deleteOrder} index={index+1}></SingleOrderAccordion>)
                        
                        : <div className='text-center text-secondary m-5 p-5'>
                            <h1> No order available </h1>
                        </div>
                    )}
            {
                orders.length > 0 && <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination  mt-5"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link text-danger"}
                    previousLinkClassName={"page-link text-danger"}
                    nextLinkClassName={"page-link text-danger "}
                    breakClassName={"page-item "}
                    breakLinkClassName={"page-link text-danger"}
                    disabledClassName={"disabled"}
                    activeClassName={"active"}
                />
            }
        </div>
    );
};

export default OrdersAccordion;