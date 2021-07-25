import React, { useEffect } from 'react';
import { useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';
import ProductsTable from '../ProductsTable/ProductsTable';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Honey')

     const deleteProduct = id => {
        fetch(`http://localhost:4000/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( data => {
            alert('Product successfully deleted from database.. ')
            window.location.reload();
        })
    }
    useEffect(() => {
        fetch('http://localhost:4000/getProducts')
        .then( res => res.json() )
        .then( data => setProducts(data))
    },[])

    
    if(category){
        var selectedProducts = products.filter(product => product.category === category);
    }
    
    console.log(products)
    return (
        <div>
            <Sidebar></Sidebar>
            <div className='row'>
            <div className="dropdown d-flex align-items-start mt-5 mb-3 ">
                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  ক্যাটাগরি - { (category === null && 'All Products') || (category === 'MixedNuts' ? 'Honey Nuts' : category)}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => setCategory(null)}><a className= {category === null ? "dropdown-item active" : "dropdown-item "} >All Products</a></li>
                    <li onClick={() => setCategory('Honey')}><a className= {category === 'Honey' ? "dropdown-item active" : "dropdown-item "} >Honey</a></li>
                    <li onClick={() => setCategory('Tea')}><a className={category === 'Tea' ? "dropdown-item active" : "dropdown-item "} >Tea Leaves</a></li>
                    <li onClick={() => setCategory('MixedNuts')}><a className={category === 'MixedNuts' ? "dropdown-item active" : "dropdown-item "} >Honey Nuts</a></li>
                    <li onClick={() => setCategory('Dates')}><a className={category === 'Dates' ? "dropdown-item active" : "dropdown-item "}>Dates</a></li>
                </ul>
            </div>
                <ProductsTable products={category ? selectedProducts : products} deleteProduct={deleteProduct}></ProductsTable>
            </div>
        </div>
    );
};

export default Products;