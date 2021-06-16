import React from 'react';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light .bg-white">
        <div class="container-fluid">
          <img src={logo} alt="" className="navbar-brand" style={{
            width: '150px',
            height: '150px'
          }} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5 " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item mx-3">
                <span className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></span>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link btn btn-danger text-white px-2 py-2" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;