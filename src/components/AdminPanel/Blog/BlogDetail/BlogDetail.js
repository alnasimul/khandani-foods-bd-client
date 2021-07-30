import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import UpdateBlog from '../UpdateBlog/UpdateBlog';
import './BlogDetail.css';

const BlogDetail = ({blog,index,getPublish}) => {
    const {_id, title, description, location, image} = blog;

    const [modalIsOpen, setIsOpen] = useState(false);


    const [modalForProduct, setModalForProduct] = useState(false);



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
    return (
        <div className='col-md-11 blogBg p-3 '>
            <div className='d-flex'>
            <h3 className='text-danger'> <strong>Blog Post: # {index}</strong> </h3>
            <div className="dropdown ms-auto" style={{width:''}}>
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" onClick={ () => alertForPublish(true, _id) } >Publish</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () => openModal() } >Edit</a></li>
                            <hr />
                            <li><a className="dropdown-item" href="#" onClick={ () => alertForPublish(false, _id) } >Undo Publish</a></li>
                            <li> <a className="dropdown-item" href="#" onClick={ '' } >Delete</a></li>
                        </ul>
                    </div>
            </div>
            <div className='m-5 text-center'>
                <img src={`data:image/png;base64,${image.img}`} alt="" style={{ width: '600px', height: '500px'}} />
            </div>
            <div className='p-3 bg-light' style={{ border: '1px solid gray', borderRadius: '5px'}}>
                {
                    location &&  <span className='d-flex bg-danger text-white justify-content-center pt-3 mx-4' style={{borderRadius: '5px', width:'150px'}}>
                    <FontAwesomeIcon className='mt-1' icon={faMapMarkerAlt}></FontAwesomeIcon> 
                    <p className='mx-2'  style={{marginTop: '2px'}}> <strong> {location} </strong> </p>
                    </span>
                }
                <h4 className='px-4 pt-3'> <strong>{title}</strong> </h4>
                <p className='p-4'>{description}</p>
            </div>
            {
                modalIsOpen && <UpdateBlog blog={blog} modalIsOpen={modalIsOpen} closeModal={closeModal}></UpdateBlog>
            }
        </div>
    );
};

export default BlogDetail;