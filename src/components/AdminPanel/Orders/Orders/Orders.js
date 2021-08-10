import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrdersTable from '../OrdersTable/OrdersTable';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [paymentStatus,setPaymentStatus] = useState('');
    const [deliveryStatus,setDeliveryStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const ordersPerPage = 10;

    const pagesVisited = currentPage * ordersPerPage;

    //console.log(pagesVisited);

    const displayOrders = orders.slice(pagesVisited, pagesVisited + ordersPerPage)


    const pageCount = Math.ceil(orders.length / ordersPerPage);

    const changePage = ({ selected }) => {
        console.log(selected);
        setCurrentPage(selected);
    };

    const getPaymentStatus= (id,status) => {
        console.log(id,status)

        if(id){
            setPaymentStatus(status);
            fetch(`http://khandanifoodsbd.com:443/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({paymentStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh())
        }
       
    }
    const getConfirmationStatus= (id,status) => {
        console.log(id,status)
        if(id){
            fetch(`http://khandanifoodsbd.com:443/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({confirmStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh())
        }
       
    }
    const getDeliveryStatus = (id,status) => {
        console.log(id,status)
        if(id){
            setDeliveryStatus(status);
            fetch(`http://khandanifoodsbd.com:443/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({deliveryStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh() )
        }
    }

    const getCompleteOrderStatus = (id,status) => {
        console.log(id,status)
        if(id){
            fetch(`http://khandanifoodsbd.com:443/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({completeStatus: status})
            })
            .then( res => res.json() )
            .then( data => refresh() )
        }
    }

    const getOrderStatus = (id,status) => {
        console.log(id,status)
        if(id){
            fetch(`http://khandanifoodsbd.com:443/updateStatus/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({orderStatus: status})
            })
            .then( res => res.json() )
            .then( data => {
                alert('successfully closed this order. ')
                refresh()
            } )
        }
    }

    const deleteOrder = id => {
        if(id){
            fetch(`http://khandanifoodsbd.com:443/deleteOrder/${id}`,{
                method: 'DELETE',
            })
            .then( res => res.json() )
            .then( data => {
                alert('successfully deleted this order from database.')
                refresh()
            } )
        }
    }
    const refresh = () => {
        return window.location.reload();
    }
    console.log(paymentStatus,deliveryStatus);

    useEffect(() => {
        fetch('http://khandanifoodsbd.com:443/getOrders')
        .then( res => res.json())
        .then( data => {
            setOrders(data);
            setLoading(false);
        } )
    },[])
    console.log(orders)
    return (
        <>
          <Sidebar></Sidebar>
        <section className="row">
            <OrdersTable orders={displayOrders} getPaymentStatus={getPaymentStatus} getConfirmationStatus={getConfirmationStatus} getDeliveryStatus={getDeliveryStatus} getCompleteOrderStatus={getCompleteOrderStatus} deleteOrder={deleteOrder} getOrderStatus={getOrderStatus} pageCount={pageCount} changePage={changePage} loading={loading}></OrdersTable>
        </section>
        </>
    );
};

export default Orders;