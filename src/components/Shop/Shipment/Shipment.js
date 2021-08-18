import React, { useEffect, useState } from 'react';
import { getOrderDetails } from '../../../utilities/orderDetailsManager';
import PaymentGateway from './PaymentGateway/PaymentGateway';
import AddUser from './AddUser/AddUser';
import UpdateUser from './UpdateUser/UpdateUser';
import './Shipment.css';




const Shipment = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const [userDetail, setUserDetail] = useState({})
    const [orderInfo, setOrderInfo] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenForUpdate, setIsOpenForUpdate] = useState(false);

    const disabled = 'disabled'

  
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalForUpdate() {
        setIsOpenForUpdate(true);
    }

    function closeModalForUpdate() {
        setIsOpenForUpdate(false);
    }


    useEffect(() => {
        fetch(`http://khandanifoodsbd.com:443/getUser?email=${userInfo.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserDetail(data)
            })
        setOrderInfo(getOrderDetails());
    }, []);

  

    //console.log(orderInfo)
    return (
      <div className='container'>
        <div className='row shippingContainer'>
            <div className='m-5 bg-light p-5 shippingAddress'>
                <div className='d-flex'>
                    <h3>Shipping Address:</h3>
                    {
                        userDetail.address ? <button className="btn btn-danger ms-auto" onClick={ () => openModalForUpdate() }>Edit</button> : <button className="btn btn-danger ms-auto" onClick={ () => openModal() }>Add</button> 
                    }
                </div >
                {
                    userDetail.address && <div className='mt-3'>
                            <p> {userDetail.name} </p>
                            <p> {userDetail.email} </p>
                            <p> {userDetail.phone} </p>
                            <p> {userDetail.address} </p>
                            <p> {userDetail.city} </p>
                    </div>
                }
            </div>
            <PaymentGateway orderInfo={orderInfo} userDetail={userDetail} disabled={disabled}></PaymentGateway>
        </div>

        {
            modalIsOpen && <AddUser userInfo={userInfo} modalIsOpen={modalIsOpen} closeModal={closeModal}></AddUser>
        }
        {
            modalIsOpenForUpdate && <UpdateUser userDetail={userDetail} modalIsOpenForUpdate={modalIsOpenForUpdate} closeModalForUpdate={closeModalForUpdate}></UpdateUser>
        }
      </div>
             
    );
};

export default Shipment;