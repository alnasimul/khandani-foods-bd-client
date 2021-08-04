import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetail from '../BlogDetail/BlogDetail';
import ReactPaginate from 'react-paginate';
import './Blogs.css';
import BlogsShortLists from '../BlogsShortLists/BlogsShortLists';

const Blogs = ({ blogs, getPublish, deleteBlog, pageCount, changePage, loading }) => {
    return (
        <div className='col-md-12 mt-5'>
            <div class="btn-group text-white" role="group" aria-label="Basic example">
                <Link to='/admin-panel/blog' className="btn btn-danger bx bx-news nav_link p-2  ">
                    Blogs
                </Link>
                <Link to='/admin-panel/addBlog' className="btn btn-danger bx bx-plus nav_link p-2  ">
                    Add Blog
                </Link>
            </div>

            {
               loading ? <div className={` d-flex justify-content-center m-5 bg-light `} style={{ height: '500px' }}>
               <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                   <span class="visually-hidden">Loading...</span>
               </div>
               <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                   <span class="visually-hidden">Loading...</span>
               </div>
           </div>  :

               ( blogs.length > 0 ?
                //    blogs.map((blog, index) => <BlogDetail blog={blog} key={blog._id} index={index + 1} getPublish={getPublish} deleteBlog={deleteBlog}></BlogDetail>)
               <BlogsShortLists blogs={blogs} getPublish={getPublish} deleteBlog={deleteBlog} ></BlogsShortLists>
               
               :
               <div className='text-center text-secondary m-5 p-5'>
                   <h1> No blog available </h1>
               </div> )
            }

           {
               blogs.length > 0 &&  <ReactPaginate
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

export default Blogs;