import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';
import Blogs from '../Blogs/Blogs';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const getPublish = (status,id) => {

        fetch(`http://localhost:4000/updateBlogPublishStatus/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({publish: status })
        })
        .then( res => res.json() )
        .then( data => {
            alert('Successfully updated publish status.')
            console.log(data)
        })

        console.log(status,id)
    }

    useEffect(() => {
        fetch('http://localhost:4000/getBlogs')
        .then( res => res.json() )
        .then( data => setBlogs(data))
    },[])

    console.log(blogs);
    return (
        <div>
            <Sidebar></Sidebar>
            <h1>Blog Area</h1>
            <div className='row'>
                <Blogs blogs={blogs} getPublish={getPublish}></Blogs>
            </div>
        </div>
    );
};

export default Blog;