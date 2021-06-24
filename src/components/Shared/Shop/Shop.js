import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../../fakeData';
import Products from './Products/Products';

const Shop = () => {
    const data = fakeData;
    const [items, setItems] = useState([]);
    const [category,setCategory] = useState('Honey');

    useEffect(() => {
        setItems(data);
    },[data])

    const currentCategory = items.filter(item => item.category === category)
    return (
        <div className="container text-center ">
             <h1>শপ</h1>
            <div className="dropdown d-flex align-items-start ">
                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  ক্যাটাগরি - {category === 'MixedNuts' ? 'Honey Nuts' : category}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => setCategory('Honey')}><a className= {category === 'Honey' ? "dropdown-item active" : "dropdown-item "} href="#">Honey</a></li>
                    <li onClick={() => setCategory('Tea')}><a className={category === 'Tea' ? "dropdown-item active" : "dropdown-item "} href="#">Tea Leaves</a></li>
                    <li onClick={() => setCategory('MixedNuts')}><a className={category === 'MixedNuts' ? "dropdown-item active" : "dropdown-item "} href="#">Honey Nuts</a></li>
                    <li onClick={() => setCategory('Dates')}><a className={category === 'Dates' ? "dropdown-item active" : "dropdown-item "}href="#">Dates</a></li>
                </ul>
            </div>
            <br />
                <div className='row'>
                 {currentCategory.map( item => <Products item={item} key={item.id}></Products>)}
                </div>
           </div>
    );
};

export default Shop;