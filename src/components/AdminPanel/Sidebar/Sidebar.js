import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faGripHorizontal, faFolderPlus, faPlusSquare, faUsers, faUserPlus,  faNewspaper, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt, faShopify } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
import { handleSignOut, initializeLoginFramework } from '../../Auth/Login/loginManager';



const Sidebar = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    initializeLoginFramework();
    const signOut = () => {
        handleSignOut()
        .then(() => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: false,
                photo: '',
                error: '',
                success: false
            }
            handleResponse(signedOutUser)
        })
        
        console.log("logged out successfully")
    }

    const handleResponse = (res) => {
        sessionStorage.removeItem('userInfo')
        setLoggedInUser(res);
        setTimeout(() => {
            alert('logged out successfully');
            window.location.reload();
        },3000)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ms-3 topNavbar p-2">
                <div className="container-fluid">
                    <div>
                        <FontAwesomeIcon icon={faUsers} className='me-3' style={{marginLeft: '7px'}}></FontAwesomeIcon>
                        <span>Khandani team {userInfo && <small className='text-danger'>({userInfo.name})</small>}</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-2 text-dark " id="navbarNav">
                        <ul className="navbar-nav mt-2">
                            <hr />
                            <li className="nav-item ">
                                <Link to="/" className='text-decoration-none'>
                                    <a className="nav-link text-dark" aria-current="page" > <FontAwesomeIcon icon={faHome} /> Home </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/admin-panel/dashboard' className='text-decoration-none'>
                                    <a className="nav-link text-dark" aria-current="page" > <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard</a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/admin-panel/orders' className='text-decoration-none'>
                                    <a className="nav-link text-dark " href=""> <FontAwesomeIcon icon={faShopify} /> Orders </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/admin-panel/products' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> <FontAwesomeIcon icon={faProductHunt} /> Products</a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/admin-panel/addProduct' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> <FontAwesomeIcon icon={faFolderPlus} />  Add Product</a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/admin-panel/blog' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> <FontAwesomeIcon icon={faNewspaper} />  Blogs </a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/admin-panel/addBlog' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> <FontAwesomeIcon icon={faPlusSquare} /> Add blog </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin-panel/addMember' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> <FontAwesomeIcon icon={faUserPlus} /> Add Member </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin-panel/members' className='text-decoration-none'>
                                    <a className="nav-link text-dark" href="#"> <FontAwesomeIcon icon={faUsers} /> Members </a>
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
                            </p>
                        </li>
                        <li>
                            <p className='text-white'>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                {
                                    userInfo &&  <strong> <small className=''>{userInfo.name}</small> </strong>
                                 }
                            </p>
                            <hr style={{ color: '#fff', opacity: '1.25' }} />
                        </li>
                        <li>
                            <Link to="/" className="text-white">
                                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                            </Link>
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
                    <div onClick={() => signOut()} >
                        <Link to="" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sidebar;