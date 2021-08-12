import React from 'react';
import OrdersShortList from '../OrdersShortList/OrdersShortList';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faSearch } from '@fortawesome/free-solid-svg-icons';

const OrdersTable = ({orders,getPaymentStatus,getDeliveryStatus,getOrderStatus,pageCount,changePage,loading,  getConfirmationStatus, getCompleteOrderStatus,deleteOrder}) => {
    return (
       <>
        {/* <div className=""></div> */}
        <div className="col-md-10 mt-5">
               <div class="btn-group text-white" role="group" aria-label="Basic example">
               <div class="btn-group text-white mb-5" role="group" aria-label="Basic example">
                        <Link to='/admin-panel/orders-by-date' className=" btn btn-danger "> 
                           <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon> Track orders by date
                        </Link>
                        <Link to='/admin-panel/track-orders' className=" btn btn-success ">
                            <FontAwesomeIcon icon={faSearch} className='mt-1'></FontAwesomeIcon> Track Orders
                        </Link>
                    </div>
                    </div>
             <h2 className="text-danger text-center mb-5">Orders</h2>
            {
                loading ? <div className={` d-flex justify-content-center m-5 bg-light `} style={{ height: '500px' }}>
                <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
                
                :  ( orders.length > 0 ? <OrdersShortList orders={orders} getPaymentStatus={getPaymentStatus} getDeliveryStatus={getDeliveryStatus} getOrderStatus={getOrderStatus} getConfirmationStatus={getConfirmationStatus} getCompleteOrderStatus={getCompleteOrderStatus} deleteOrder={deleteOrder}></OrdersShortList>
                    : <div className='text-center text-secondary m-5 p-5'>
                    <h1> No order available </h1>
                </div> 
                    )
            }

            {
               orders.length > 0 &&  <ReactPaginate
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
       </>
    );
};

export default OrdersTable;