import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetails from './components/Shared/Shop/ProductDetails/ProductDetails';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Shop from './components/Shared/Shop/Shop';
import Slider from './components/Home/Slider/Slider';



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
        </Switch>
          
      </Router>  
    </div>
  );
}

export default App;
