import React from 'react';
import logo from '../../../../images/accounting-icon-4.jpg';

const TotalSalesOfCurrentMonth = ({ totalSalesAndOrders }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
        <div className='col-md-5 mt-5 mx-5 bg-light p-3 mb-5 text-left text-white d-flex justify-content-center align-items-center' style={{ borderRadius: '7px' }}>
            <div className='my-4'>
                <img src={logo} alt="" className='m-3' style={{ width: '250px', height: '250px' }} />
            </div>
            <div className='p-5 bg-danger' style={{  borderRadius: '7px' }}>
                <h3 className='mb-4'><strong>{months[new Date().getMonth()]}</strong></h3>
                <h5 className='mb-4'> <strong>Total Sales: {totalSalesAndOrders.totalSales} ৳  </strong> </h5>
                <h5> <strong>Total Orders: {totalSalesAndOrders.filteredOrders.length}</strong></h5>
            </div>
        </div>
    );
};

export default TotalSalesOfCurrentMonth;