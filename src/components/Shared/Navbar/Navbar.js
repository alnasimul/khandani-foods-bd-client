import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../../App';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { handleSignOut, initializeLoginFramework } from '../../Auth/Login/loginManager';

const Navbar = () => {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cartItems, setCartItems] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    fetch(`https://khandanifoodsbd.herokuapp.com/isAdmin/${userInfo ? userInfo.email : loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        checkAdmin(data)
      })

    const cartItems = getDatabaseCart();
    setCartItems(cartItems);
  }, [])
  const checkAdmin = (data) => {
    setIsAdmin(data)
    sessionStorage.setItem('admin', JSON.stringify({ admin: data }));
  }

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
  }

  const handleResponse = (res) => {
    sessionStorage.removeItem('userInfo')
    setLoggedInUser(res);
    setTimeout(() => {
      alert('logged out successfully');
      window.location.reload();
    }, 2000)
  }

  const getItemsQuantityFromCart = () => {

    let quantity = 0


    const values = Object.values(cartItems)

    values.map(value => {
      quantity = quantity + value
    })
    return quantity;
  }


  let quantity = getItemsQuantityFromCart();
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
                <Link to='/shop' className='text-decoration-none'>
                  <a className="nav-link text-dark " href=""> শপ  </a>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to='/blog' className='text-decoration-none'>
                  <a className="nav-link text-dark" href="#">ব্লগ</a>
                </Link>
              </li>
              {
                isAdmin ? <li className="nav-item mx-3">
                  <Link to='/admin-panel/dashboard' className='text-decoration-none'>
                    <a className="nav-link text-dark" href="#">এডমিন প্যানেল</a>
                  </Link>
                </li> : <li></li>
              }
              {userInfo ? <li className="nav-item mx-3">
                <Link to='/userProfile' className='text-decoration-none'>
                  <a className="nav-link text-dark" href="#">ইউজার প্রোফাইল </a>
                </Link>
              </li> : <li></li>
              }
              <li className="nav-item mx-3">
                <Link to='/cart' className='text-decoration-none'>
                  <span className={quantity > 0 ? "nav-link text-danger rounded-pill border border-danger px-4" : "nav-link text-dark"}><FontAwesomeIcon icon={faShoppingCart} /> {quantity > 0 && quantity}</span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                {
                  (userInfo || loggedInUser.email) ? <a className="nav-link btn btn-danger rounded-pill text-white px-3 py-2 loginBtn" href="#" onClick={() => signOut()}  >লগ আউট</a>
                  : <Link to='/login' className='text-decoration-none'>
                  <a className="nav-link btn btn-danger rounded-pill text-white px-3 py-2 loginBtn" href="#">লগ ইন</a>
                  </Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      {
        userInfo && <div className='text-center bg-danger me-auto p-2 text-white rounded-pill userName' style={{ width: '250px', }} >
          <strong> <small className='mx-3'> স্বাগতম, {userInfo.name} </small> </strong>
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