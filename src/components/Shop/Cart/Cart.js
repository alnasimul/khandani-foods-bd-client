import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { setOrderDetails } from '../../../utilities/orderDetailsManager';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart ] = useState([]);
    const [cartPlusChange, setCartPlusChange] = useState(false);
	const [cartSubChange, setCartSubChange] = useState(false);
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
        cart.map( item => {
            subtotal = subtotal + (item.quantity * item.price); 
        })
        return subtotal;
    }

    useEffect(() =>{
        previousCart = getDatabaseCart();

        console.log(previousCart);

        console.log(cart)

        const cartFoodKeys = Object.keys(previousCart);

        const currentCartFoods = cartFoodKeys.map( key => {
            const food = fakeData.find( food => food.id === key);
            food.quantity = previousCart[key];


            return food;
        })


        calculateSubtotal();
        setCart(currentCartFoods);

    },[cart.length,cartPlusChange,cartSubChange])


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

     const proceedForShipment = () => {
        setOrderDetails(cart,orderId,shippingCost);
     }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4 me-5 pe-5">
                    {cart.map( item => <CartItem item={item} key={item.id} cartPlusChange={cartPlusChanges} cartSubChange={cartSubChanges}></CartItem> )}
                </div>
                <div className="col-md-5 mx-5 px-5 my-3">
                    <p>total : {subtotal}</p>
                    <p>tax: </p>
                    <p>Shiping fee: {shippingCost} </p>
                    <p>Subtotal : {subtotal + shippingCost} </p>
                    <div className='d-flex'>
                    <p className=''>Shipping Location: <button className='btn btn-success me-1' required onClick={ () => shippingForSylhet() }> সিলেট সিটি </button>  
                    <button className='btn btn-success '>সিলেট সিটি এর বাইরে </button> </p>
                    </div>
                    <br />
                    <Link to='/shipment'>
                        <button className='btn btn-danger' onClick={() => proceedForShipment() }>Procced to checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;