import { faCalendarDay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';
import './BlogDetail.css';

const customStyles = {
    content: {
        top: '54%',
        left: '50%',
        right: 'auto',
        width: '80%',
        height: '90%',
        padding: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

const BlogDetail = ({blog,modalForBlog, closeModalForBlog}) => {
    const {title, description, location, image, created} = blog;

    

  


    return (
        <div className='mt-5'>
            <Modal
                  isOpen={modalForBlog}
                  onRequestClose={closeModalForBlog}
                  style={customStyles}
                  contentLabel="Example Modal"
            >

            <div className='col-md-12 blogBg p-3'>
                <div className='d-flex'>
                <h3 className='text-danger'> <strong>Blog Post: # {title}</strong> </h3>
                <button className='btn btn-danger ms-auto' onClick={ () => closeModalForBlog() }>Close</button>
                </div>
          
            <div className='m-5 text-center'>
                <img src={`data:image/png;base64,${image.img}`} alt="" style={{ width: '600px', height: '500px'}} />
            </div>
            <div className='p-3 bg-light' style={{ border: '1px solid gray', borderRadius: '5px'}}>
               <div className='d-flex'>
               {
                    location &&  <span className='d-flex bg-danger text-white justify-content-center pt-3 mx-4' style={{borderRadius: '5px', width:'150px'}}>
                    <FontAwesomeIcon className='mt-1' icon={faMapMarkerAlt}></FontAwesomeIcon> 
                    <p className='mx-2'  style={{marginTop: '2px'}}> <strong> {location} </strong>  </p>
                    </span>
                }
                <span className='d-flex bg-danger text-white justify-content-center pt-3' style={{borderRadius: '5px', width:'200px'}}>
                    <FontAwesomeIcon className='mt-1' icon={faCalendarDay}></FontAwesomeIcon> 
                    <p className='mx-2'  style={{marginTop: '2px'}}> <strong> {created} </strong>  </p>
                </span>
               </div>
                <h4 className='px-4 pt-3'> <strong>{title}</strong> </h4>
                <p className='p-4'>{description}</p>
            </div>
        </div>
            </Modal>
        </div>
    );
};

export default BlogDetail;