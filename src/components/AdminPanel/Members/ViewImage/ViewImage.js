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
const ViewImage = ({member, modalForMember, closeModalForMember}) => {
    const { image } = member;
   
    return (
        <div className='mt-3'>
        <Modal
            isOpen={modalForMember}
            onRequestClose={closeModalForMember}
            style={customStyles}
            contentLabel="Example Modal"

        >
            <div className='text-center text-success bg-light p-3'>
                <img src={image} alt="" style={{ width: '400px' } } className='img-fluid' />
            </div>

        </Modal>
    </div>
    );
};

export default ViewImage;