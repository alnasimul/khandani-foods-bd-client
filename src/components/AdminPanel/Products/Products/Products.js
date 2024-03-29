import React, { useEffect } from 'react';
import { useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';
import ProductsAccordion from '../ProductsAccordion/ProductsAccordion';
import ProductsTable from '../ProductsTable/ProductsTable';

const Products = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Honey')
    const [loading, setLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(0);
    // const [productsPerPage, setProductsPerPage] = useState(10);

    // const pagesVisited = currentPage * productsPerPage;

    // //console.log(pagesVisited);

    // const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage)


    // const pageCount = Math.ceil(products.length / productsPerPage);

    // const changePage = ({ selected }) => {
    //     console.log(selected);
    //     setCurrentPage(selected);
    // };

    const deleteProduct = id => {
        fetch(`https://khandani-foods-bd-server-render.onrender.com/deleteProduct/${id}?email=${userInfo.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                alert('Product successfully deleted from database.. ')
                window.location.reload();
            })
    }
    useEffect(() => {
        fetch(`https://khandani-foods-bd-server-render.onrender.com/getProducts?email=${userInfo.email}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])


    if (category) {
        var selectedProducts = products.filter(product => product.category === category);
    }

    console.log(products)
    return (
        <>
            <div className='row'>
                <Sidebar></Sidebar>
                <ProductsTable products={category ? selectedProducts : products} deleteProduct={deleteProduct} loading={loading} category={category} setCategory={setCategory} ></ProductsTable>
                <ProductsAccordion products={category ? selectedProducts : products} deleteProduct={deleteProduct} loading={loading} category={category} setCategory={setCategory}></ProductsAccordion>
            </div>
        </>
    );
};

export default Products;