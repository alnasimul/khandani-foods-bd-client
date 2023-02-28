import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Blogs from '../Blogs/Blogs';
import BlogsAccordion from '../BlogsAccordion/BlogsAccordion';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
   
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

        fetch(`https://khandani-foods-bd-server-render.onrender.com/updateBlogPublishStatus/${id}?email=${userInfo.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
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

        fetch(`https://khandani-foods-bd-server-render.onrender.com/updateBlogPublishHomeStatus/${id}?email=${userInfo.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
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

        fetch(`https://khandani-foods-bd-server-render.onrender.com/deleteBlog/${id}?email=${userInfo.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully deleted this blog from database .');
                window.location.reload();
                console.log(data);
            })
    }

    useEffect(() => {
        fetch(`https://khandani-foods-bd-server-render.onrender.com/getBlogs?email=${userInfo.email}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
         }
    )
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
                <BlogsAccordion blogs={displayBlogs} getPublish={getPublish} getPublishHome={getPublishHome} deleteBlog={deleteBlog} pageCount={pageCount} changePage={changePage} loading={loading} ></BlogsAccordion>
            </div>
        </div>
    );
};

export default Blog;