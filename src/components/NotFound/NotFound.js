import React from 'react';
import error from '../../images/362-3620267_graphics.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center .notFound'>
            <img src={error} alt="" className='img-fluid'/>
        </div>
    );
};

export default NotFound;