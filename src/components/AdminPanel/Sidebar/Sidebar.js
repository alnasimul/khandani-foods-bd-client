import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal, faFolderPlus, faPlusSquare, faUsersCog, faUserAstronaut, faUsers, faUserPlus, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faProductHunt, faShopify, faTeamspeak } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <div className="col-md-2">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2-special py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <p className='text-white'>
                            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> <strong> Khandani Team </strong>
                            <hr style={{color: '#fff', opacity: '1.25'}} />
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
                            <FontAwesomeIcon icon={faBlogger} /> <span>Blogs</span>
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
    )
};

export default Sidebar;