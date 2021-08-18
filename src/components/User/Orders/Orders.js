import React from 'react';
import ReactPaginate from 'react-paginate';
import OrdersShortLists from './OrdersShortLists/OrdersShortLists';
import './Orders.css';

const Orders = ({orders, userDetail, pageCount, changePage}) => {
    return (
        <div className='col-md-12 mt-3 customerOrders'>
            <OrdersShortLists orders={orders} userDetail={userDetail} ></OrdersShortLists>
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
    );
};

export default Orders;