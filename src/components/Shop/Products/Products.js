import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
const  pic = require('../../../images/Products/azwa~1-min.png')

const Products = ({ item }) => {
    let { title, regularPrice, id, salePrice, productType, stock, img } = item;


    const getPercentage = (value1, value2) => {
       return 100 - (value1/value2 ) * 100
    } 

    const percent = getPercentage(salePrice, regularPrice)
    
    //img ? : `data:image/png;base64,${image.img}`
    return (
        <div className="col-md-4 my-3 productContainer">
            <img src={ require('../../../images/Products/'+img).default }  alt="" style={{ width: '320px', borderRadius: '7px' }} />
            <br />
            <br />
            <h6><strong>{title}</strong></h6>
            <p> <strong>  {
                    productType === 'Sale' ? <del>৳ {regularPrice} টাকা ।  </del> : <span> ৳ {regularPrice} টাকা । (প্রতি ৫০০ গ্রাম)</span>
                }  </strong> </p>

                {
                    productType === 'Sale' && <p className='saleArea'> <span className='rounded-pill bg-danger px-1 py-1 mx-2 text-white'> <strong> Sale </strong>  </span> <strong>৳ {salePrice} টাকা । (প্রতি ৫০০ গ্রাম) </strong> <span className='rounded-pill bg-danger px-1 py-1 mx-2 text-white'> <strong> Sale </strong>  </span> <br /><span className='text-danger'>Your Save {regularPrice - salePrice} Taka ({ Math.round(percent) } % Off)</span> </p>
                }

                {
                    stock === 'In stock' ? <p><span className="rounded-pill bg-success text-white p-2">{stock}</span></p>
                    : <p><span className="rounded-pill bg-danger text-white p-2">{stock}</span></p>
                }
            
                <Link to={'/product/' + id}>
                     <button className="btn btn-danger">প্রোডাক্ট বিস্তারিত</button>
                </Link>
            
        </div>
    );
};

export default Products;