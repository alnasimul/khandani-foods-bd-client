import React from 'react';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light .bg-white">
        <div class="container-fluid">
          <img src={logo} alt="" className="navbar-brand" style={{
              width: '150px',
              height: '150px'}}/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5 " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link btn btn-danger text-white px-2 py-2" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;