import React, { useState } from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import UpdateBlog from '../UpdateBlog/UpdateBlog';

const BlogShortListDetail = ({blog, getPublish, deleteBlog, getPublishHome}) => {
    const { _id, title, location, image, description, created } = blog;
    const [modalIsOpen, setIsOpen] = useState(false);


    const [modalForBlog, setModalForBlog] = useState(false);



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalForBlog(){
        setModalForBlog(true)
    }

    function closeModalForBlog(){
        setModalForBlog(false)
    }


    const alertForPublish = (status,id) => {
        if(status){
            if(window.confirm('Are you sure want to publish this blog ?')){
                    getPublish(status,id)
            }
        }
        else {
            if(window.confirm('Are you sure want to undo publish this blog ?')){
                getPublish(status,id)
            }
        }
    }

    const alertForPublishHome = (status, id) => {
        if(status){
            if(window.confirm('Are you sure want to publish this blog to home?')){
                getPublishHome(status,id)
        }
        }
        else {
            if(window.confirm('Are you sure want to undo publish this blog to home?')){
                getPublishHome(status,id)
            }
        }
    }

    const alertForDelete = id => {
            if(window.confirm('Are you sure want to delete this blog from database ?')){
                deleteBlog(id);
            }
    }
    return (
      <>
       <tr>
                <td><img src={`data:image/png;base64,${image.img}`}  alt="" style={{width: '150px'}}/></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{created}</strong></small></td>
                <td> <small style={{ fontSize: '13px' }}> <strong>{title}</strong></small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{location}</strong></small></td>
                <td><small style={{ fontSize: '13px' }}> <strong>{description}</strong></small></td>
                <td>
                <div className="dropdown ms-auto" style={{width:''}}>
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPublish(true, _id) } >Publish</a></li>
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPublishHome(true, _id) } >Publish Home</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () => openModal() } >Edit</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () => openModalForBlog() } >View Blog</a></li>
                            <hr />
                            <li><a className="dropdown-item" href="#" onClick={ () => alertForPublish(false, _id) } >Undo Publish</a></li>
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPublishHome(false, _id) } >Undo Publish Home</a></li>
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForDelete(_id) } >Delete</a></li>
                        </ul>
                    </div>
                </td>
               
       </tr>
       {
            
                modalIsOpen && <UpdateBlog blog={blog} modalIsOpen={modalIsOpen} closeModal={closeModal} ></UpdateBlog>
            
       }
        {
                modalForBlog && <BlogDetail blog={blog} modalForBlog={modalForBlog} closeModalForBlog={closeModalForBlog}></BlogDetail>
        }
      </>
    );
};

export default BlogShortListDetail;