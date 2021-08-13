import React from 'react';
import Modal from 'react-modal';
import UpdateMemberInfo from './UpdateMemberInfo/UpdateMemberInfo';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '80%',
        height: '95%',
        padding: '20px',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

const Update = ({ member, modalIsOpen, closeModal }) => {
    return (
        <div className='row w-100 container-fluid' style={{ height: '100vh'}}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <UpdateMemberInfo member={member} closeModal={closeModal}></UpdateMemberInfo>
            </Modal>
        </div>
    );
};

export default Update;

