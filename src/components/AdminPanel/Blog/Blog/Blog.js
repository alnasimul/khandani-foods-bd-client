import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Sidebar from '../../Sidebar/Sidebar';
import Blogs from '../Blogs/Blogs';
import './Blog.css';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
   
    const blogsPerPage = 5 ;

    const pagesVisited = currentPage * blogsPerPage;

    //console.log(pagesVisited);

    const displayBlogs = blogs.slice(pagesVisited, pagesVisited + blogsPerPage)


    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const changePage = ({ selected }) => {
        console.log(selected);
        setCurrentPage(selected);
    };

    const getPublish = (status, id) => {

        fetch(`http://khandanifoodsbd.com:443/updateBlogPublishStatus/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ publish: status })
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully updated publish status.')
                console.log(data)
            })

        console.log(status, id)
    }

    const getPublishHome = (status, id) => {

        fetch(`http://khandanifoodsbd.com:443/updateBlogPublishHomeStatus/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ homeBlog: status })
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully updated home publish status.')
                console.log(data)
            })

        console.log(status, id)
    }

    const deleteBlog = id => {
        console.log(id);

        fetch(`http://khandanifoodsbd.com:443/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully deleted this blog from database .');
                window.location.reload();
                console.log(data);
            })
    }

    useEffect(() => {
        fetch('http://khandanifoodsbd.com:443/getBlogs' )
            .then(res => res.json())
            .then(data => {
                const reversedData = [...data.reverse()]
                setBlogs(reversedData)
                setLoading(false)
            })
    }, [])

    console.log(blogs);
    return (
        <div>
          
          
            <div className='row' >
                <Sidebar></Sidebar>
                <Blogs blogs={displayBlogs} getPublish={getPublish} getPublishHome={getPublishHome} deleteBlog={deleteBlog} pageCount={pageCount} changePage={changePage} loading={loading}></Blogs>
            </div>
        </div>
    );
};

export default Blog;