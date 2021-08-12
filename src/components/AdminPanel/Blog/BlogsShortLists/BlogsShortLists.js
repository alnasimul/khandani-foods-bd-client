import React from 'react';
import BlogShortListDetail from '../BlogShortListDetail/BlogShortListDetail';

const BlogsShortLists = ({blogs, getPublish, getPublishHome, deleteBlog}) => {
    return (
        <table className='table table-striped table-bordered bg-light'>
            <thead>
                <tr className="text-dark">
                    <th scope="col">Image</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col">Location</th>
                    
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs.map( (blog , index) => <BlogShortListDetail blog={blog} getPublish={getPublish} getPublishHome={getPublishHome} deleteBlog={deleteBlog} ></BlogShortListDetail>)
                }
            </tbody>
        </table>
    );
};

export default BlogsShortLists;