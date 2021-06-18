import React from 'react';

const Products = ({item}) => {
  let {title, img, price} = item;
    return (
        <div className="col-md-4">
            <h5>{title}</h5>
            <br />
        </div>
    );
};

export default Products;