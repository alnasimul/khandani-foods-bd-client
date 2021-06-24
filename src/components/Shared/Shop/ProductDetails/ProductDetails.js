import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../../fakeData';

const ProductDetails = () => {
   const {productKey} = useParams();
     
    const product = fakeData.find( pd => pd.id === productKey);

    const {title,img,price,description,quantity} = product;
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 my-5 mx-1">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className="btn btn-danger">{quantity}</button>
                    <br />
                    <br />
                    <p>  ৳ {price}  টাকা । </p>
                </div>
                <div className="col-md-4 my-5 ">
                    <img src={img} alt="" style={{ borderRadius: '10px'}} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;