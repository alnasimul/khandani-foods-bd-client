import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetail from '../BlogDetail/BlogDetail';

const Blogs = ({blogs, getPublish, deleteBlog}) => {
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
                   blogs.length > 0 ?  
                   blogs.map( (blog, index) => <BlogDetail blog={blog} key={blog._id} index={index+1} getPublish={getPublish} deleteBlog={deleteBlog}></BlogDetail>)
                   :
                   <div className='text-center text-secondary m-5 p-5'>
                       <h1> No blog available </h1>
                   </div>
            }      
        </div>
    );
};

export default Blogs;