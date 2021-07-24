import React from 'react';
import ProductsShortlist from '../ProductsShortList/ProductsShortlist';

const ProductsTable = ({products}) => {
    return (
        <div className='col-md-12'>
            <ProductsShortlist products={products}></ProductsShortlist>
        </div>
    );
};

export default ProductsTable;