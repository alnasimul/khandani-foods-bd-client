import React from 'react';
import Modal from 'react-modal';
import UpdateBlogInfo from './UpdateBlogInfo/UpdateBlogInfo';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width:'70%',
        padding: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

const UpdateBlog = ({blog,modalIsOpen, closeModal}) => {
    return (
        <div className='row' style={{ height: '100vh'}}>
            <Modal 
                 isOpen={modalIsOpen}
                 onRequestClose={closeModal}
                 style={customStyles}
                 contentLabel="Example Modal"
            >
            <UpdateBlogInfo blog={blog} closeModal={closeModal}></UpdateBlogInfo>
            </Modal>
        </div>
    );
};

export default UpdateBlog;