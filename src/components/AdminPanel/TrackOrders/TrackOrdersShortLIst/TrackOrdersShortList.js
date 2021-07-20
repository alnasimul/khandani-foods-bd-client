import React from 'react';
import TrackOrderShortListDetail from '../TrackOrderShortListDetail/TrackOrderShortListDetail';

const TrackOrdersShortList = ({ trackedOrders }) => {
  return (
  <div className="col-md-9 mt-3">
     { trackedOrders.length > 0 ? 
      <table style={{ borderRadius: '7px' }} className="table bg-danger table-striped table-bordered">
        <thead>
          <tr className="text-white">
            <th scope="col" style={{ fontSize: '14px'}} >#OrderID</th>
            <th scope="col" style={{ fontSize: '14px'}} >Name</th>
            <th scope="col" style={{ fontSize: '14px'}} >Phone</th>
            <th scope="col" style={{ fontSize: '14px'}} >Email</th>
            <th scope="col" style={{ fontSize: '14px'}} >City</th>
            <th scope="col" style={{ fontSize: '14px'}} >Address</th>
            <th scope="col" style={{ fontSize: '13px'}} >Total</th>
            <th scope="col" style={{ fontSize: '13px'}} >Status(Payment, Delivery, Order)</th>
            <th scope="col" style={{ fontSize: '13px'}} >Action</th>
            <th scope="col" style={{ fontSize: '14px'}} >Item Bought</th>
          </tr>
        </thead>
        <tbody>
          {
            trackedOrders.map((order, index) =>
              <TrackOrderShortListDetail order={order}></TrackOrderShortListDetail>
            )
          }
        </tbody>
      </table> 
      : <div className='d-flex mt-5 pt-5 justify-content-center align-self-center'>
          <h4>No record available please use track order form to find data</h4>
        </div>
        }
  </div>

  );
};

export default TrackOrdersShortList;