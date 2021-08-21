import React, { useState } from 'react';
import UpdateBlog from '../UpdateBlog/UpdateBlog';

const SingleBlogAccordion = ({ blog, index, getPublish, deleteBlog, getPublishHome }) => {
    const { _id, title, location, image, description, created } = blog;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const alertForPublishHome = (status, id) => {
        if (status) {
            if (window.confirm('Are you sure want to publish this blog to home?')) {
                getPublishHome(status, id)
            }
        }
        else {
            if (window.confirm('Are you sure want to undo publish this blog to home?')) {
                getPublishHome(status, id)
            }
        }
    }

    const alertForDelete = id => {
        if (window.confirm('Are you sure want to delete this blog from database ?')) {
            deleteBlog(id);
        }
    }

    const alertForPublish = (status, id) => {
        if (status) {
            if (window.confirm('Are you sure want to publish this blog ?')) {
                getPublish(status, id)
            }
        }
        else {
            if (window.confirm('Are you sure want to undo publish this blog ?')) {
                getPublish(status, id)
            }
        }
    }
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id={`heading${index}`}>
                    <button class="accordion-button collapsed  text-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                        {title}
                    </button>
                </h2>
                <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                        <div className="dropdown">
                            <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Action
                            </a>

                            <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                                <li> <a className="dropdown-item" href="#" onClick={() => alertForPublish(true, _id)} >Publish</a></li>
                                <li> <a className="dropdown-item" href="#" onClick={() => alertForPublishHome(true, _id)} >Publish Home</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => openModal()} >Edit</a></li>
                                <hr />
                                <li><a className="dropdown-item" href="#" onClick={() => alertForPublish(false, _id)} >Undo Publish</a></li>
                                <li> <a className="dropdown-item" href="#" onClick={() => alertForPublishHome(false, _id)} >Undo Publish Home</a></li>
                                <li> <a className="dropdown-item" href="#" onClick={() => alertForDelete(_id)} >Delete</a></li>
                            </ul>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p><strong>Location: </strong>{location}</p>
                            <p><strong>Date: </strong> {created}</p>
                            <p><strong>Description: </strong> {description}</p>

                        </div>
                    </div>
                </div>
            </div>
            {

                modalIsOpen && <UpdateBlog blog={blog} modalIsOpen={modalIsOpen} closeModal={closeModal} ></UpdateBlog>

            }
        </div>
    );
};

export default SingleBlogAccordion;