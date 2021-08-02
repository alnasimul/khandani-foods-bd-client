import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const UserProfile = () => {
    
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const [orders, setOrders ] = useState([]);

    const {cart, totalbill, shippingCost, orderId, } = orders;


    useEffect(()=> {
        fetch(`http://localhost:4000/userOrders?email=${userInfo.email}`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then( res => res.json())
        .then( data => setOrders(data))
    },[])

    console.log(userInfo)
    console.log(orders)
    return (
        <div className='container'>
            <Navbar></Navbar>
            <div className='row'>
                <div className="col-md-5 bg-light m-5 p-5">
                    <div className='d-flex'> 
                         <h3>Personal Profile</h3>
                         <button className='btn btn-danger ms-auto'>Edit</button>
                         
                    </div>
                    <p> {userInfo.name}</p>
                    <p> {userInfo.email} </p>
                </div>
                <div className="col-md-5 bg-light m-5 p-5">
                <h3> Your orders </h3>
                    
                </div>
            </div>
            
        </div>
    );
};

export default UserProfile;