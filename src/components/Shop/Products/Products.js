import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = ({ item }) => {
    let { title, image, regularPrice, id, salePrice } = item;
    return (
        <div className="col-md-4 my-3 productContainer">
            <img src={`data:image/png;base64,${image.img}`}  alt="" style={{ width: '320px', borderRadius: '7px' }} />
            <br />
            <br />
            <h6><strong>{title}</strong></h6>
            <p> <strong>  ৳ {regularPrice} টাকা । (প্রতি ৫০০ গ্রাম) </strong> </p>
            
                <Link to={'/product/' + id}>
                     <button className="btn btn-danger">View Product</button>
                </Link>
            
        </div>
    );
};

export default Products;