import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const [cart, setCart ] = useState([]);
    const [cartPlusChange, setCartPlusChange] = useState(false);
	const [cartSubChange, setCartSubChange] = useState(false);

    
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

    const insideSylhetShipping = () => {
        return true;
    }
    subtotal = calculateSubtotal();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    {cart.map( item => <CartItem item={item} key={item.id} cartPlusChange={cartPlusChanges} cartSubChange={cartSubChanges}></CartItem> )}
                </div>
                <div className="col-md-4">
                    <p>total : {subtotal}</p>
                    <p>tax: </p>
                    <p>Shiping fee: {insideSylhetShipping()} </p>
                    <p>Subtotal : {subtotal} </p>

                    <button className='btn btn-success' required onClick={() => insideSylhetShipping() }> Insinde sylhet shipping fee 30 tk</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;