import React from 'react';
import logo from '../../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <div>
            <img src={logo} alt="" className="navbar-brand" style={{
              width: '150px',
              height: '150px'
            }} />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-2 " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="/">হোম</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="">  <Link to='/shop'>
                  শপ
                </Link></a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">ব্লগ</a>
              </li>
              <li className="nav-item mx-3">
                <Link to='/cart'>
                  <span className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></span>
                </Link>
              </li>
              <li class="nav-item mx-3">
                <Link to='/login'>
                  <a class="nav-link btn btn-danger text-white px-2 py-2" href="#">লগ ইন</a>
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
      <hr className="me-4" />
    </div>
  );
};

export default Navbar;