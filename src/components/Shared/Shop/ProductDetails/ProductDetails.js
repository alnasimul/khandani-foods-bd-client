import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../../fakeData';

const ProductDetails = () => {
   const {productKey} = useParams();
     
    const defaultProduct = fakeData.find( pd => pd.id === productKey);

    const [product, setProduct] = useState(defaultProduct);
    const [key, setKey] = useState(productKey)

    const {title,img,price,description,quantity} = product;
     
    const keyChangerFor250Gram = (key) => {
        const newKey = key.slice(0,-4).concat('-250');

         setKey(newKey);
        
    }

    const keyChangerFor500Gram  = key => {
        const newKey = key.slice(0,4).concat('-500');

        setKey(newKey);
    }
    console.log(key);
    console.log(product);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 my-5 mx-4 align-middle">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className="btn btn-danger" onClick={() => keyChangerFor250Gram(key)}>250 gram</button> | <button className="btn btn-danger" onClick={() => keyChangerFor500Gram(key)}>{quantity}</button> 
                    <br />
                    <br />
                    <p>  ৳ {price}  টাকা । </p>
                </div>
                <div className="col-md-4 my-5 text-center">
                    <img src={img} alt="" style={{ borderRadius: '10px',width:'420px'}} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;