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



function App() {
  return (
    <div className="App">
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
              <Footer></Footer>
          </Route>
          <Route path="/cart">
            <Navbar></Navbar>
            <Cart></Cart>
          </Route>
          <Route path='/shipment'>
            <Navbar></Navbar>
            <Shipment></Shipment>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
          
      </Router>  
    </div>
  );
}

export default App;
