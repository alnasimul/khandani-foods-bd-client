import React from 'react';
import TrackOrderShortListDetail from '../TrackOrderShortListDetail/TrackOrderShortListDetail';

const TrackOrdersShortList = ({ trackedOrders }) => {
  return (
  <div className="col-md-7 mt-3">
     { trackedOrders.length > 0 ? 
      <table style={{ borderRadius: '7px' }} className="table bg-success">
        <thead>
          <tr className=" text-white">
            <th scope="col">#OrderID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Total Bill</th>
            <th scope="col">Item Bought</th>
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