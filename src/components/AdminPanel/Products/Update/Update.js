import React from 'react';
import Modal from 'react-modal';
import UpdateProductInfo from './UpdateProductInfo/UpdateProductInfo';

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
const Update = ({product, modalIsOpen, closeModal}) => {

    return (
        <div className='row'>
             <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                   
                >
                <UpdateProductInfo product={product} closeModal={closeModal}></UpdateProductInfo>
                </Modal>
        </div>
    );
};

export default Update;