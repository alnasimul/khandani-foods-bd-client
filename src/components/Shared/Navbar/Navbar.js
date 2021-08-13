import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../App';

const Navbar = () => {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://khandanifoodsbd.com:443/isAdmin/${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        checkAdmin(data)
      })
  }, [])
  const checkAdmin = (data) => {
    setIsAdmin(data)
    sessionStorage.setItem('admin', JSON.stringify({admin: data}));
}
  console.log(isAdmin)
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div>
            <img src={logo} alt="" className="navbar-brand" style={{
              width: '150px',
              height: '150px'
            }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-2 text-dark " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-3">
                <a className="nav-link text-dark" aria-current="page" href="/">হোম</a>
              </li>
              <li className="nav-item mx-3">
                <Link to='/shop'>
                  <a className="nav-link text-dark" href=""> শপ  </a>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to='/blog'>
                  <a className="nav-link text-dark" href="#">ব্লগ</a>
                </Link>
              </li>
              {
                isAdmin ? <li className="nav-item mx-3">
                  <Link to='/admin-panel/dashboard'>
                    <a className="nav-link text-dark" href="#">এডমিন প্যানেল</a>
                  </Link>
                </li> : <li></li>
              }
              {userInfo ? <li className="nav-item mx-3">
                <Link to='/userProfile'>
                  <a className="nav-link text-dark" href="#">ইউজার প্রোফাইল </a>
                </Link>
              </li> : <li></li>
              }
              <li className="nav-item mx-3">
                <Link to='/cart'>
                  <span className="nav-link text-dark"><FontAwesomeIcon icon={faShoppingCart} /></span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to='/login'>
                  <a className="nav-link btn btn-danger text-white px-2 py-2" href="#">লগ ইন</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      {
        userInfo && <div className='text-center bg-danger me-auto p-2 text-white center' style={{ width: '300px', borderRadius: '5px', marginRight: '50px' }} >
          <strong> <small className='mx-3'> Welcome, {userInfo.name} </small> </strong>
        </div>
      }
      {/*       
      {loggedInUser.email &&
        <div className='text-center bg-danger me-auto p-2 text-white center' style={{ width: '300px', borderRadius: '5px', marginRight: '50px' }} >
         <strong> <small className='mx-3'> Welcome, {loggedInUser.name ? loggedInUser.name : loggedInUser.email} </small> </strong>
        </div>
      } */}
      <hr className="me-3" />
    </div>
  );
};

export default Navbar;