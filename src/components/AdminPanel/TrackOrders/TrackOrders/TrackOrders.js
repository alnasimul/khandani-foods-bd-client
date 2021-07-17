import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderFilterForm from '../OrderFilterForm/OrderFilterForm';
import OrdersShortList from '../TrackOrdersShortLIst/TrackOrdersShortList';

const TrackOrders = () => {
    const [searchData, setSearchData] = useState(null);
    const [trackedOrders,setTrackedOrders] = useState([])

    const getSearchData = (data) => {
        setSearchData(data);
    }
    useEffect(() => {
        fetch('http://localhost:4000/trackOrder',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(searchData)
    })
    .then(res => res.json())
    .then( data => setTrackedOrders(data) )
    },[searchData])
    console.log(searchData)

    
    
    return (
        <>
        <Sidebar></Sidebar>
        <div className='row'>
            <OrderFilterForm getSearchData={getSearchData}></OrderFilterForm>
            <OrdersShortList trackedOrders = {trackedOrders}></OrdersShortList>
        </div>
        </>
    );
};

export default TrackOrders;