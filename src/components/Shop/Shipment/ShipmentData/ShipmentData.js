import React from 'react';
import Modal from 'react-modal';
import ShipmentForm from '../ShipmentForm/ShipmentForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '80%',
        padding: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



Modal.setAppElement('#root')


const ShipmentData = ({orderInfo, modalIsOpen, closeModal}) => {
 
    return (
        <div>
             <Modal
                isOpen={modalIsOpen}
                onRequestClose=''
                style={customStyles}
                contentLabel="Example Modal"

            >
                <ShipmentForm orderInfo={orderInfo} closeModal={closeModal}  ></ShipmentForm>
            </Modal>
        </div>
    );
};

export default ShipmentData;