import React, { useEffect, useState } from 'react';
import { getOrderDetails } from '../../../utilities/orderDetailsManager';
import ShipmentForm from './ShipmentForm/ShipmentForm';
import Modal from 'react-modal';
import PaymentGateway from './PaymentGateway/PaymentGateway';
import './Shipment.css';

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


const Shipment = () => {
    const [orderInfo, setOrderInfo] = useState({});
    useEffect(() => {
        setOrderInfo(getOrderDetails());
    }, []);

    const [modalIsOpen, setIsOpen] = useState(true);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    //console.log(orderInfo)
    return (
        <div className='container'>
            <div className="row">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose=''
                    style={customStyles}
                    contentLabel="Example Modal"
                   
                >
                <ShipmentForm orderInfo={orderInfo} closeModal={closeModal}  ></ShipmentForm>
                </Modal>
                <PaymentGateway></PaymentGateway>
            </div>
        </div>
    );
};

export default Shipment;