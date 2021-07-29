import React from 'react';
import { NavLink } from 'react-router-dom';
import   './Sidebar.css';

const Sidebar = () => {
    return (
        <section id="body-pd" className="">
            <div className="header" id="header">
                <div className="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
            </div>
            <div className="l-navbar" id="nav-bar">
                <img src="" alt="" />
                <nav className="nav">
                    <div> <a href="#" className="nav_logo">
                        <i className='bx bx-layer nav_logo-icon'></i>
                        <span className="nav_logo-name">Khandani team</span> </a>
                        <div className="nav_list">
                            <a href="#" className="nav_link active-sidebar"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </a>
                            <NavLink  to="/admin-panel/orders"  className="nav_link" >
                                <i className='bx bx-shopping-bag nav_icon'></i> <span className="nav_name">Orders</span>
                            </NavLink>
                            <NavLink to='/admin-panel/products' className="nav_link">
                                <i className='bx bx-package nav_icon'></i> <span className="nav_name">Products</span>
                            </NavLink>
                            <NavLink to='/admin-panel/addProduct' className="nav_link">
                                <i className='bx bx-plus nav_icon'></i> <span className="nav_name">Add Product</span>
                            </NavLink>
                            <NavLink to='/admin-panel/blog' className="nav_link">
                                <i className='bx bx-news nav_icon'></i> <span className="nav_name">Blog</span>
                            </NavLink>
                                <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Bookmark</span> </a>
                                <a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Files</span> </a>
                                <a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Stats</span> </a>
                        </div>
                        </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
                </nav>
             </div>
        </section>

            );
};

            export default Sidebar;