import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetails from './components/Shop/Shop/ProductDetails/ProductDetails';
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
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders/Orders';


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
            <PrivateRoute path='/shipment'>
              <Navbar></Navbar>
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/admin-panel/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/admin-panel/orders'>
              <Orders></Orders>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
