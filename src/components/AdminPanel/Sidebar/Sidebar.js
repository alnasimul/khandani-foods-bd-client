import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal, faFolderPlus, faPlusSquare, faUsers, faUserPlus, faBlog, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt, faShopify } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light topNavbar">
                <div className="container-fluid">
                    <div>
                        <FontAwesomeIcon icon={faUsers} className='me-3'></FontAwesomeIcon>
                        <span>Khandani team</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-2 text-dark " id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/dashboard' className='text-decoration-none'>
                                    <a className="nav-link text-dark" aria-current="page" href="/">Dashboard</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/orders' className='text-decoration-none'>
                                    <a className="nav-link text-dark " href=""> Orders </a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/products' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#">Products</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/addProduct' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> Add Product</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/blog' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> Blogs </a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/addBlog' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> Add blog </a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/addMember' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> Add Member </a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to='/admin-panel/members' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> Members </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="col-md-2">
                <div className="sidebar d-flex flex-column justify-content-between col-md-2-special py-5 px-4" style={{ height: "100vh" }}>
                    <ul className="list-unstyled">
                        <li>
                            <p className='text-white'>
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> <strong> Khandani Team </strong>
                                <hr style={{ color: '#fff', opacity: '1.25' }} />
                            </p>
                        </li>

                        <li>
                            <Link to="/admin-panel/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/orders" className="text-white">
                                <FontAwesomeIcon icon={faShopify} /> <span>Orders</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/admin-panel/products" className="text-white">
                                <FontAwesomeIcon icon={faProductHunt} /> <span>Products</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/admin-panel/addProduct" className="text-white">
                                <FontAwesomeIcon icon={faFolderPlus} /> <span>Add Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/blog" className="text-white" >
                                <FontAwesomeIcon icon={faNewspaper} /> Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/addBlog" className="text-white" >
                                <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/addMember" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Member</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/members" className="text-white" >
                                <FontAwesomeIcon icon={faUsers} /> <span>Members</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sidebar;