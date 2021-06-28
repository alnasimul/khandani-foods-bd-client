import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const [cart, setCart ] = useState([]);
    // const [cartPlusChange, setCartPlusChange] = useState(false);
	// const [cartSubChange, setCartSubChange] = useState(false);

    
	// const cartPlusChanges = () => {
	// 	setCartPlusChange(!cartPlusChange);
	// };

	// const cartSubChanges = () => {
	// 	setCartSubChange(!cartSubChange);
	// };
    

    let previousCart = [];
    useEffect(() =>{
        previousCart = getDatabaseCart();

        const cartFoodKeys = Object.keys(previousCart);

        const currentCartFoods = cartFoodKeys.map( key => {
            const food = fakeData.find( food => food.id === key);
            food.quantity = previousCart[key];

            console.log(food);

            return food;
        })

        setCart(currentCartFoods);

    },[previousCart.length])
    console.log(cart);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    {cart.map( item => <CartItem item={item} key={item.id}></CartItem> )}
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
};

export default Cart;