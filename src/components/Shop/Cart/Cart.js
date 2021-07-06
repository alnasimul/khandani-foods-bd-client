import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import exclamatoryMark from '../../../images/exclamatory.png';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { setOrderDetails } from '../../../utilities/orderDetailsManager';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartPlusChange, setCartPlusChange] = useState(false);
    const [cartSubChange, setCartSubChange] = useState(false);
    const [tax, setTax] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [shippingLocation, setShippingLocation] = useState('');


    const cartPlusChanges = () => {
        setCartPlusChange(!cartPlusChange);
    };

    const cartSubChanges = () => {
        setCartSubChange(!cartSubChange);
    };

    let previousCart = [];
    let subtotal = 0;

    const calculateSubtotal = () => {
        cart.map(item => {
            subtotal = subtotal + (item.quantity * item.price);
        })
        return subtotal;
    }

    useEffect(() => {
        previousCart = getDatabaseCart();

        console.log(previousCart);

        console.log(cart)

        const cartFoodKeys = Object.keys(previousCart);

        const currentCartFoods = cartFoodKeys.map(key => {
            const food = fakeData.find(food => food.id === key);
            food.quantity = previousCart[key];


            return food;
        })


        calculateSubtotal();
        setCart(currentCartFoods);

    }, [cart.length, cartPlusChange, cartSubChange])


    console.log(cart);

    const generateOrderId = () => {
        return Math.floor(Math.random().toFixed(4) * 10000);
    }


    const orderId = generateOrderId();

    subtotal = calculateSubtotal();


    const shippingForSylhet = () => {
        setShippingLocation('sylhet');
        setShippingCost(30)
    }

    const shippingForOutside = () => {
        setShippingLocation('outside');
        setShippingCost(100);
    }

    const proceedForShipment = () => {
        setOrderDetails(cart, orderId, shippingCost);
    }

    return (
        <div className='container'>
           { cart.length > 0 ?
            <div className="row">
                <div className="col-md-4 mx-5 pe-5">
                   {cart.map(item => <CartItem item={item} key={item.id} cartPlusChange={cartPlusChanges} cartSubChange={cartSubChanges}></CartItem>)}
                </div>
                <div className="col-md-5 ms-5 ps-5 my-3">
                   <p>total : {subtotal}</p>
                   <p>tax: {tax} </p>
                   <p>Shiping fee: {shippingCost} </p>
                   <p>Subtotal : {subtotal + shippingCost} </p>
                   <div className='d-flex'>
                       <p className=''>Shipping Location: <button className='btn btn-success mx-1' required onClick={() => shippingForSylhet()}> সিলেট সিটি </button>
                           <button className='btn btn-success' onClick={() => shippingForOutside() }>সিলেট সিটি এর বাইরে </button> </p>
                   </div>
                   <br />
                   <Link to='/shipment'>
                       <button className='btn btn-danger' onClick={() => proceedForShipment()}>Procced to checkout</button>
                   </Link>
                </div>
           </div> :
            <div className="row">
                <div className="col-md-12 text-center my-5 py-5" >
                    <div className='d-flex justify-content-center bg-light p-5'>
                        <img  src={exclamatoryMark} alt=""  style={{ width: '50px'}}/>
                        <h2 className='my-2 mx-2'>Your cart is empty</h2>
                    </div>
                    <Link to='/shop'>
                        <button className='btn btn-danger my-3'>Continue to shop</button>
                    </Link>
                </div>
            </div>
           }
          
        </div>
    );
};

export default Cart;