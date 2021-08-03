import React from 'react';
import fun from '../../../../images/pictureabhibaki.gif';

const PaymentGateway = () => {
    return (
        <div className='col-md-5'>
            <h4 className='text-center text-success'>Payment Gateway</h4>
            <img src={fun} alt="" className='img-fluid'/>
        </div>
    );
};

export default PaymentGateway;