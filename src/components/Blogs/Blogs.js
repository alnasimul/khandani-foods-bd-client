import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Navbar from '../Shared/Navbar/Navbar';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
   
    const blogsPerPage = 2 ;

    const pagesVisited = currentPage * blogsPerPage;

    //console.log(pagesVisited);

    const displayBlogs = blogs.slice(pagesVisited, pagesVisited + blogsPerPage)


    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const changePage = ({ selected }) => {
        console.log(selected);
        setCurrentPage(selected);
    };

    useEffect(() => {
        fetch('https://khandani-foods-bd-server-render.onrender.com/blogs')
        .then(res => res.json() )
        .then( data => setBlogs(data))
    },[])

    console.log(blogs)
    return (
        <div className='container'>
            <Navbar></Navbar>
            <div className="row">
                {
                    displayBlogs.map( blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            {
               blogs.length > 2 &&  <ReactPaginate
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