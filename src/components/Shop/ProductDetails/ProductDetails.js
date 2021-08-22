import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productKey } = useParams();


    const [product, setProduct] = useState({});
    const [key, setKey] = useState(productKey);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://khandanifoodsbd.herokuapp.com/getProductById/${key}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })

    }, [key]);

    const { title, image, regularPrice, description, productType, salePrice, category, stock } = product;


    const keyChangerFor250Gram = (key) => {
        const newKey = key.slice(0, -4).concat('-250');
        setProductByKey(newKey);
    }

    const keyChangerFor500Gram = key => {
        const newKey = key.slice(0, -4).concat('-500');
        setProductByKey(newKey);
    }

    const setProductByKey = key => {
        setKey(key);
    }

    const addToCart = (key) => {
        quantity > 0 && addToDatabaseCart(key, quantity);
    }

    const getPercentage = (value1, value2) => {
        return 100 - (value1/value2 ) * 100
     } 
 
    const percent = getPercentage(salePrice, regularPrice)

    console.log(key);
    //  console.log(product);
    return (
        <div className="container">

            {
                product.image ? <div className="row productDetails"  >
                    <div className="p-3 mt-2 productDescription bg-light" style={{ borderRadius: '5px '}}>
                        <div className='d-flex justify-content-between'>
                        <h2 className="">{title}</h2>
                        {
                            stock === 'In stock' ? <p className='mt-2'> <span className='rounded-pill bg-success text-white p-2'>{stock}</span> </p> : <p className='mt-2'><span className="rounded-pill bg-danger text-white p2">{stock}</span></p>
                        }
                        </div>
                        <br />
                        <p>{description}</p>
                        <div className='d-flex'>
                            <p className='me-2 my-1' ><strong>Quantity:</strong></p>
                            <button className='btn btn-danger px-3' onClick={() => quantity > 0 && setQuantity(quantity - 1)}>-</button>
                            <p className='mx-2 my-1 px-3' style={{ border: '1px solid lightgray', borderRadius: '5px' }}>{quantity}</p>
                            <button className="btn btn-danger px-3" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <br />
                        <div className='d-flex'>
                            <p className='me-2 my-1'> <strong> weight: </strong> </p>
                            {
                                category !== 'Dates' && <button className="btn btn-danger me-2" onClick={() => keyChangerFor250Gram(key)}>250 gram</button>
                            }
                            <button className="btn btn-danger" onClick={() => keyChangerFor500Gram(key)}>500 gram</button>
                        </div>
                        <br />
                        <p> <strong>  { productType === 'Sale' ? <del className='text-danger'> Price: ৳   {parseInt(regularPrice) * quantity } টাকা । </del> : <span> Price: ৳ {parseInt(regularPrice) * quantity } টাকা । </span> }   </strong> </p>
                        {
                          productType === 'Sale' && <p> <strong className='text-success'>Sale Price: ৳ {parseInt(salePrice) * quantity} টাকা । </strong> <span className='text-danger'> Your save {regularPrice - salePrice} Taka ({ Math.round(percent)} % Off)</span></p>
                        }
                        <Link to='/cart'>
                            {
                                stock === 'In stock' ?  <button className='btn btn-danger' onClick={() => addToCart(key)}> <FontAwesomeIcon style={{marginBottom: '1px'}} className='mx-1' icon={faShoppingBag}></FontAwesomeIcon> Add to cart</button> 
                                : <button className='btn btn-danger disabled' onClick={() => addToCart(key)}> <FontAwesomeIcon style={{marginBottom: '1px'}} className='mx-1' icon={faShoppingBag}></FontAwesomeIcon> Add to cart</button>
                            }
                           
                        </Link>
                    </div>
                    <div className="text-center productBanner ">
                        <img src={`data:image/png;base64,${image.img}`} alt="" className='productImg' style={{ borderRadius: '10px', width: '440px' }} />
                    </div>
                </div> : <div class="d-flex justify-content-center m-5 bg-light" style={{height: '500px'}}>
                    <div class="spinner-border text-danger" style={{width: '3rem', height: '3rem', marginTop:'200px'}} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" style={{width: '3rem', height: '3rem', marginTop:'200px'}} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </div>
    );
};

export default ProductDetails;