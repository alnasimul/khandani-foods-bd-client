import React from 'react';
import { Link } from 'react-router-dom';

const BlogTable = () => {
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
        </div>
    );
};

export default BlogTable;