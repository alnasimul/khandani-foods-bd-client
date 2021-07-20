import React from 'react';
import Modal from 'react-modal';
import UpdateClientInfo from '../UpdateClientInfo/UpdateClientInfo';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width:'80%',
        padding: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



Modal.setAppElement('#root')

const Update = ({order,modalIsOpen,closeModal}) => {
    

    return (
        <div className='row'>
               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                   
                >
                <UpdateClientInfo order={order} closeModal={closeModal}></UpdateClientInfo>
                </Modal>
        </div>
    );
};

export default Update;