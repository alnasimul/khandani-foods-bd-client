import React from 'react';
import Modal from 'react-modal';
import UpdateUserDetail from './UpdateUserDetail/UpdateUserDetail';

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

const UpdateUser = ({userDetail,modalIsOpenForUpdate,closeModalForUpdate}) => {
    return (
        <div>
            <Modal 
             isOpen={modalIsOpenForUpdate}
             onRequestClose={closeModalForUpdate}
             style={customStyles}
             contentLabel="Example Modal"
            >
            <UpdateUserDetail userDetail={userDetail} closeModalForUpdate={closeModalForUpdate}></UpdateUserDetail>
            </Modal>
        </div>
    );
};

export default UpdateUser;