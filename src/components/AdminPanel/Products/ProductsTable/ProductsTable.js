import React from 'react';
// import ReactPaginate from 'react-paginate';
import ProductsShortlist from '../ProductsShortList/ProductsShortlist';

const ProductsTable = ({products, deleteProduct,loading}) => {
    console.log(products)
    return (
        <div className='col-md-12'>

            {
                loading ? <div className={` d-flex justify-content-center m-5 bg-light `} style={{ height: '500px' }}>
                <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div> : ( products.length > 0 ?
                <ProductsShortlist products={products} deleteProduct={deleteProduct}></ProductsShortlist> : <div className='text-center text-secondary m-5 p-5'>
                :
                <h1> No product available </h1>
                </div> 
                )
            }

            {/* {
               products.length > 0 &&  <ReactPaginate
               previousLabel={"Previous"}
               nextLabel={"Next"}
               pageCount={pageCount}
               onPageChange={changePage}
               containerClassName={"pagination  mt-5"}
               pageClassName={"page-item"}
               pageLinkClassName={"page-link text-danger"}
               previousLinkClassName={"page-link text-danger"}
               nextLinkClassName={"page-link text-danger "}
               breakClassName={"page-item "}
               breakLinkClassName={"page-link text-danger"}
               disabledClassName={"disabled"}
               activeClassName={"active"}
           />
           } */}
        </div>
    );
};

export default ProductsTable;