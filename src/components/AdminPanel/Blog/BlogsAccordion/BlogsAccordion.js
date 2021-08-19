import React from 'react';
import ReactPaginate from 'react-paginate';
import SingleBlogAccordion from '../SingleBlogAccordion/SingleBlogAccordion';
import './BlogsAccordion.css';

const BlogsAccordion = ({ blogs, getPublish, getPublishHome, deleteBlog, pageCount, changePage, loading }) => {
    return (
        <div className="col-md-12 col-10 col-sm-10 ms-2 mt-4 blogsAccordion">
        {
            loading ? <div className={` d-flex justify-content-center m-5`} style={{ height: '500px' }}>
                <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

                : (blogs.length > 0 ? blogs.map((blog, index) => <SingleBlogAccordion blog={blog} getPublish={getPublish} getPublishHome={getPublishHome} deleteBlog={deleteBlog} index={index+1}></SingleBlogAccordion>)
                    
                    : <div className='text-center text-secondary m-5 p-5'>
                        <h1> No order available </h1>
                    </div>
                )}
        {
            blogs.length > 0 && <ReactPaginate
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
        }
    </div>
    );
};

export default BlogsAccordion;