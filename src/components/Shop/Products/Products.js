import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import sale from '../../../images/sale.png'

const Products = ({ item }) => {
    let { title, image, regularPrice, id, salePrice, productType } = item;
    return (
        <div className="col-md-4 my-3 productContainer">
            <img src={`data:image/png;base64,${image.img}`}  alt="" style={{ width: '320px', borderRadius: '7px' }} />
            <br />
            <br />
            <h6><strong>{title}</strong></h6>
            <p> <strong>  {
                    productType === 'Sale' ? <del>৳ {regularPrice} টাকা ।  </del> : <span> ৳ {regularPrice} টাকা । (প্রতি ৫০০ গ্রাম)</span>
                }  </strong> </p>

                {
                    productType === 'Sale' && <p className='saleArea'> <span className='rounded-pill bg-danger px-1 py-1 mx-2 text-white'> <strong> Sale </strong>  </span> <strong>৳ {salePrice} টাকা । (প্রতি ৫০০ গ্রাম) </strong> <span className='rounded-pill bg-danger px-1 py-1 mx-2 text-white'> <strong> Sale </strong>  </span> </p>
                }
            
                <Link to={'/product/' + id}>
                     <button className="btn btn-danger">View Product</button>
                </Link>
            
        </div>
    );
};

export default Products;