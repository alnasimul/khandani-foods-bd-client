import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../../fakeData';
import { addToDatabaseCart } from '../../../../utilities/databaseManager';
import './ProductDetails.css';

const ProductDetails = () => {
   const {productKey} = useParams();
     
    const defaultProduct = fakeData.find( pd => pd.id === productKey);

    const [product, setProduct] = useState(defaultProduct);
    const [key, setKey] = useState(productKey);
    const [quantity,setQuantity] = useState(1);

    const {title,img,price,description} = product;
   
     
    const keyChangerFor250Gram = (key) => {
        const newKey = key.slice(0,-4).concat('-250');

         setProductByKey(newKey);
       
        
    }

    const keyChangerFor500Gram  = key => {
        const newKey = key.slice(0,-4).concat('-500');

        setProductByKey(newKey);

    }

    const setProductByKey = key => {
         setKey(key);
         setProduct(fakeData.find( pd => pd.id === key));
    }

    const addToCart = (key) => {
        quantity > 0 && addToDatabaseCart(key, quantity);
    }

    
    //console.log(key);
   // console.log(product);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 my-5 mx-2 bg-light p-5 productDescription" style={{ borderRadius: '5px '}}>
                    <h2 className="">{title}</h2>
                    <br />
                    <p>{description}</p>
                    <div className='d-flex'>
                    <p className='me-2 my-1' ><strong>Quantity:</strong></p>
                    <button className='btn btn-danger px-3' onClick={  () => quantity > 0  && setQuantity( quantity - 1)}>-</button>
                    <p className='mx-2 my-1 px-3' style={{border: '1px solid lightgray',borderRadius: '5px'}}>{quantity}</p>
                    <button className="btn btn-danger px-3" onClick={ () => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <br />
                    <div className='d-flex'>
                        <p className='me-2 my-1'> <strong> weight: </strong> </p>
                        {
                            product.category !== 'Dates' && <button className="btn btn-danger me-2" onClick={() => keyChangerFor250Gram(key)}>250 gram</button> 
                        }
                        <button className="btn btn-danger" onClick={() => keyChangerFor500Gram(key)}>500 gram</button> 
                    </div>
                    <br />
                    <p> <strong>Price: </strong> ৳ {price * quantity}  টাকা । </p>
                    <Link to='/cart'>
                         <button className='btn btn-danger' onClick={() => addToCart(key)}>Add to cart</button>
                    </Link>
                </div>
                <div className="col-md-4 my-5 text-center productImg">
                    <img src={img} alt="" className='img-fluid' style={{ borderRadius: '10px',width:'420x'}} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;