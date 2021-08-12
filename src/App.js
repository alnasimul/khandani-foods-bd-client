import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetails from './components/Shop/ProductDetails/ProductDetails';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Shop from './components/Shop/Shop/Shop';
import Slider from './components/Shared/Slider/Slider';
import Cart from './components/Shop/Cart/Cart';
import Shipment from './components/Shop/Shipment/Shipment';
import Login from './components/Auth/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import Dashboard from './components/AdminPanel/Dashboard/Dashboard';
import TrackOrders from './components/AdminPanel/TrackOrders/TrackOrders/TrackOrders';
import OrdersByDate from './components/AdminPanel/OrdersByDate/OrdersByDate/OrdersByDate';
import Orders from './components/AdminPanel/Orders/Orders/Orders';
import Products from './components/AdminPanel/Products/Products/Products';
import AddProduct from './components/AdminPanel/Products/AddProduct/AddProduct';
import Blog from './components/AdminPanel/Blog/Blog/Blog';
import AddBlog from './components/AdminPanel/Blog/AddBlog/AddBlog';
import UserProfile from './components/User/UserProfile/UserProfile';
import OrderIsOnAway from './components/User/OrderIsOnAway/OrderIsOnAway';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Blogs from './components/Blogs/Blogs';
import AddMember from './components/AdminPanel/Members/AddMember/AddMember';




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Navbar></Navbar>
              <Slider></Slider>
              <Shop></Shop>
              <Footer></Footer>
            </Route>
            <Route path='/product/:productKey'>
              <Navbar></Navbar>
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/cart">
              <Navbar></Navbar>
              <Cart></Cart>
            </Route>
            <Route path='/blog'>
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path='/shipment'>
              <Navbar></Navbar>
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/userProfile'>
              <UserProfile></UserProfile>
            </PrivateRoute>
            <PrivateRoute path='/orderIsOnWay'>
              <OrderIsOnAway></OrderIsOnAway>
            </PrivateRoute>
            <Route path='/admin-panel/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path="/admin-panel/orders">
              <Orders></Orders>
            </Route>
            <Route path='/admin-panel/orders-by-date'>
              <OrdersByDate></OrdersByDate>
            </Route>
            <Route path='/admin-panel/track-orders'>
              <TrackOrders></TrackOrders>
            </Route>
            <Route path='/admin-panel/products'>
              <Products></Products>
            </Route>
            <Route path='/admin-panel/addProduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/admin-panel/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/admin-panel/addBlog'>
              <AddBlog></AddBlog>
            </Route>
            <Route path='/admin-panel/addMember'>
              <AddMember></AddMember>
            </Route>
          </Switch>
          {/* <MessengerCustomerChat
            pageId="102797561559766"
            appId="1039933163425478"
            shouldShowDialog={true}
            // htmlRef="<REF_STRING>"
          /> */}
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
