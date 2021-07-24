import React from 'react';
import ProductShortListDetail from '../ProductShortListDetail/ProductShortListDetail';

const ProductsShortlist = ({products}) => {
    return (
        <table className='table bg-light table-striped table-bordered'>
            <thead>
                <tr>
                <th scope="col">Index</th>
                <th scope="col">#Product ID</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Weight</th>
                <th scope="col">Product Type</th>
                <th scope="col">Regular Price</th>
                <th scope="col">Sale Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        products.map( (product, index) => <ProductShortListDetail product={product} key={product._id} index={index + 1}></ProductShortListDetail>)
                    }
            </tbody>
        </table>
    );
};

export default ProductsShortlist;