import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddUser from '../AddUser/AddUser';
import Orders from '../Orders/Orders';
import UpdateUser from '../UpdateUser/UpdateUser';
import './UserProfile.css';

const UserProfile = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const [orders, setOrders] = useState([]);
    const [userDetail, setUserDetail] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenForUpdate, setIsOpenForUpdate] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const ordersPerPage = 3;


    const pagesVisited = currentPage * ordersPerPage;

    //console.log(pagesVisited);

    const displayOrders = orders.slice(pagesVisited, pagesVisited + ordersPerPage)


    const pageCount = Math.ceil(orders.length / ordersPerPage);

    const changePage = ({ selected }) => {
        console.log(selected);
        setCurrentPage(selected);
    };


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
        fetch(`https://khandani-foods-bd-server-render.onrender.com/userOrders?email=${userInfo.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const newData = [...data.reverse()]
                setOrders(newData)
            })

        fetch(`https://khandani-foods-bd-server-render.onrender.com/getUser?email=${userInfo.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
                mode: "no-cors",
            },


        })
            .then(res => res.json())
            .then(data => {

                setUserDetail(data)
            })
    }, [])

    //console.log(userInfo)
    console.log(orders)
    console.log(userDetail);
    return (
        <div className='container'>
            <Navbar></Navbar>
            <div className='row userProfile'>
                <div className="col-md-5  bg-light m-5 p-5 personalProfile">
                    <div className='d-flex mb-3'>
                        <h3><strong>ব্যাক্তিগত প্রোফাইল</strong></h3>
                    </div>
                    <p> {userInfo.name}</p>
                    <p> {userInfo.email} </p>
                </div>

                <div className="col-md-5 bg-light m-5 p-5 billingAddress">
                    <div className='d-flex mb-3'>
                        <h3> <strong>বিলিং এড্রেস</strong> </h3>
                        {
                            userDetail.email ? <button className="btn btn-danger ms-auto" onClick={() => openModalForUpdate()}> Edit </button> : <button className="btn btn-danger ms-auto" onClick={() => openModal()}>Add</button>
                        }

                    </div>
                    {
                        userDetail.email && <div className='mx-1 mt-1'>
                            <p>{userDetail.name}</p>
                            <p>{userDetail.email}</p>
                            <p>{userDetail.phone}</p>
                            <p>{userDetail.address} </p>
                            <p>{userDetail.city} </p>
                        </div>
                    }
                </div>
            </div>
            <div className='row'>
                <Orders orders={displayOrders} userDetail={userDetail} pageCount={pageCount} changePage={changePage}></Orders>
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

export default UserProfile;