import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import BlogTable from '../BlogTable/BlogTable';


const Blog = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <h1>Blog Area</h1>
            <div className='row'>
                <BlogTable></BlogTable>
            </div>
        </div>
    );
};

export default Blog;