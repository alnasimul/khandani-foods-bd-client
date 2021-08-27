import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '30%',
        height: '78%',
        padding: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')
const ViewImageModal = ({ product, modalForProduct, closeModalForProduct }) => {
    const { title, weight, productType, regularPrice, salePrice, img } = product;
    return (
        <div className='mt-3'>
            <Modal
                isOpen={modalForProduct}
                onRequestClose={closeModalForProduct}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className='text-center text-success bg-light p-3'>
                    <img src={require('../../../../images/Products/'+img).default} alt="" style={{ width: '400px' }} />
                    <div className=' mt-3'>
                        <p className=''>Title: <strong>  {title}</strong></p>
                        <p className=''>Product Type: <strong>  {productType}</strong></p>
                        <p> Weight: {weight}</p>
                        <p> Regular Price: {regularPrice} BDT</p>
                        {salePrice && <p> Sale Price: {salePrice}</p>}
                        <button className='btn btn-danger' onClick={closeModalForProduct}>Close</button>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default ViewImageModal;