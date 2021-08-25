import React, { useContext, useEffect, useState } from 'react';
import exclamatoryMark from '../../../images/exclamatory.png';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import { setOrderDetails } from '../../../utilities/orderDetailsManager';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'
import { UserContext } from '../../../App';

const Cart = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loadedCartData, setLoadedCartData] = useState([])
    const [cart, setCart] = useState([]);
    const [isCartEmpty, setIsCartEmpty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartPlusChange, setCartPlusChange] = useState(false);
    const [cartSubChange, setCartSubChange] = useState(false);
    const [tax, setTax] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [shippingLocation, setShippingLocation] = useState('');
    const [disabled, setDisabled] = useState(true);


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
            subtotal = subtotal + (item.quantity * (item.salePrice ? item.salePrice : item.regularPrice));
        })
        return subtotal;
    }

    useEffect(() => {
        previousCart = getDatabaseCart();

        // console.log(previousCart);

        // console.log(cart)

        const productKeys = Object.keys(previousCart);

        // console.log(productKeys)

        setIsCartEmpty(productKeys);

        if (isCartEmpty.length === 0) {
            setLoading(false)
        }


        fetch('https://www.webserver.khandanifoodsbd.com/getCartProducts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productKeys)

        })
            .then(res => res.json())
            .then(data => {
                setLoadedCartData(data);
                setLoading(false);

            });


        const currentCartFoods = loadedCartData.map(item => {
            item.quantity = previousCart[item.id]

            return item;
        })

        // console.log(currentCartFoods)


        setCart(currentCartFoods)




        // const currentCartFoods = cartFoodKeys.map(key => {
        //     const food = fakeData.find(food => food.id === key);
        //     food.quantity = previousCart[key];


        //     return food;
        // })


        // calculateSubtotal();
        // setCart(currentCartFoods);

    }, [loadedCartData.length, cartPlusChange, cartSubChange])





    // // console.log(loadedCartData);

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


    let newCart = []

    cart.forEach(item => {

        const newCartData = { ...item, image: null }

        newCart.push(newCartData)



        return newCart;
    })

    // console.log(newCart)

    const proceedForShipment = () => {
        setOrderDetails(newCart, orderId, shippingCost, subtotal);
    }




    return (
        <div className='container'>
            {

                loading === true ? <div className={` d-flex justify-content-center m-5 bg-light `} style={{ height: '500px' }}>
                    <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                    :
                    (
                        isCartEmpty.length > 0 ? <div className="row cartArea">
                            <div className="col-md-4 mx-5 pe-5 cartItems">
                                {cart.map(item => <CartItem item={item} key={item.id} cartPlusChange={cartPlusChanges} cartSubChange={cartSubChanges}></CartItem>)}
                            </div>
                            <div className="col-md-5 ms-5 ps-5 my-3 cartCalculator">
                                <p>total : {subtotal}</p>
                                <p>tax: {tax} </p>
                                <p>Shiping fee: {shippingCost} </p>
                                <p>Subtotal : {subtotal + shippingCost} </p>
                                <div className='d-flex shippingLocation justify-content-center'>
                                    <p className=''>Shipping Location: <button className='btn btn-success mx-1 mt-2' required onClick={() => {
                                        shippingForSylhet();
                                        setDisabled(false);
                                    }}> সিলেট সিটি </button>
                                        <button className='btn btn-success outsideSylhet' onClick={() => {
                                            shippingForOutside();
                                            setDisabled(false);
                                        }}>সিলেট সিটি এর বাইরে </button> </p>
                                </div>
                                <br />
                                {
                                    (userInfo || loggedInUser.email) ?
                                        <Link to='/shipment' className={disabled === true ? 'btn btn-danger disabled' : 'btn btn-danger'} onClick={() => proceedForShipment()}>
                                            অর্ডার চেকাউট করুন
                                        </Link>
                                        : <Link to='/shipment' className={disabled === true ? 'btn btn-danger disabled' : 'btn btn-danger'} onClick={() => proceedForShipment()}>
                                            অর্ডার চেকাউট করতে লগইন করুন
                                        </Link>
                                }
                                <br />
                                <br />
                                {
                                    disabled && <span className='text-danger'> আপনি শিপিং লোকেশন নির্বাচন করেননি শিপিং লোকেশন নির্বাচন করে অর্ডার প্রসেস করুন ধন্যবাদ ।</span>
                                }
                            </div>
                        </div> : <div className="row">
                            <div className="col-md-12 text-center my-5 py-5" >
                                <div className='d-flex justify-content-center bg-light p-5'>
                                    <img src={exclamatoryMark} alt="" style={{ width: '50px' }} />
                                    <h2 className='my-2 mx-2'>Your cart is empty</h2>
                                </div>
                                <Link to='/shop'>
                                    <button className='btn btn-danger my-3'>Continue to shop</button>
                                </Link>
                            </div>
                        </div>
                    )
            }



        </div>
    );
};

export default Cart;