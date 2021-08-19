import React from 'react';
// import ReactPaginate from 'react-paginate';
import ProductsShortlist from '../ProductsShortList/ProductsShortlist';
import './ProductsTable.css';

const ProductsTable = ({ products, deleteProduct, loading, category, setCategory }) => {
    console.log(products)
    return (
        <>
             <div className='col-md-10 productsTable table-responsive' style={{width:'83%'}}>
             <div className="dropdown  mt-5 mb-3 ">
                        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            ক্যাটাগরি - {(category === null && 'All Products') || (category === 'MixedNuts' ? 'Honey Nuts' : category)}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li onClick={() => setCategory(null)}><a className={category === null ? "dropdown-item active" : "dropdown-item "} >All Products</a></li>
                            <li onClick={() => setCategory('Honey')}><a className={category === 'Honey' ? "dropdown-item active" : "dropdown-item "} >Honey</a></li>
                            <li onClick={() => setCategory('Tea')}><a className={category === 'Tea' ? "dropdown-item active" : "dropdown-item "} >Tea Leaves</a></li>
                            <li onClick={() => setCategory('MixedNuts')}><a className={category === 'MixedNuts' ? "dropdown-item active" : "dropdown-item "} >Honey Nuts</a></li>
                            <li onClick={() => setCategory('Dates')}><a className={category === 'Dates' ? "dropdown-item active" : "dropdown-item "}>Dates</a></li>
                        </ul>
                    </div>

                {
                    loading ? <div className={` d-flex justify-content-center m-5`} style={{ height: '500px' }}>
                        <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> : (products.length > 0 ?
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
        </>
    );
};

export default ProductsTable;