import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('Honey');

    useEffect(() => {
        fetch('http://khandanifoodsbd.com:443/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if (products) {
        const shuffle = a => {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
        }
        shuffle(products);
        const currentCategory = products.filter(product => product.category === category);
        var selectedProducts = currentCategory.filter(item => item.weight === '500 gram');
    }

    console.log(products)
    return (
        <div className="container text-center " id="shopArea">
            <h1>শপ</h1>
            <div className="dropdown d-flex align-items-start ">
                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    ক্যাটাগরি - {category === 'MixedNuts' ? 'Honey Nuts' : category}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => setCategory('Honey')}><a className={category === 'Honey' ? "dropdown-item active" : "dropdown-item "} href="#shopArea">Honey</a></li>
                    <li onClick={() => setCategory('Tea')}><a className={category === 'Tea' ? "dropdown-item active" : "dropdown-item "} href="#shopArea">Tea Leaves</a></li>
                    <li onClick={() => setCategory('MixedNuts')}><a className={category === 'MixedNuts' ? "dropdown-item active" : "dropdown-item "} href="#shopArea">Honey Nuts</a></li>
                    <li onClick={() => setCategory('Dates')}><a className={category === 'Dates' ? "dropdown-item active" : "dropdown-item "} href="#shopArea">Dates</a></li>
                </ul>
            </div>
            <br />
            {
                products.length ?
                    <div className='row'>
                        {selectedProducts.map(item => <Products item={item} key={item.id}></Products>)}
                    </div>
                    :
                    <div class="d-flex justify-content-center mt-5 mb-5 pb-5">
                        <div class="spinner-border" style={{ width: '3rem', height: '3rem',  }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow" style={{ width: '3rem', height: '3rem', }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Shop;