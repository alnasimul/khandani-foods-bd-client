import { faCalendarDay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = ({blog}) => {
    const {title, image, description, location, created } = blog;
    return (
        <div className="d-flex justify-content-start mt-3 bg-light ms-2 p-5" style={{borderRadius: '7px'}}>
            <div className='col-md-4 ms-5 me-5'>
                <img src={`data:image/png;base64,${image.img}`} alt="" style={{ width: '450px', borderRadius:'7px'}} className='img-fluid' />
            </div>
            <div className="col-md-5 ms-5">
                <h5> <strong>{title}</strong> </h5>
                <div className="d-flex justify-content-start mt-3">
                {
                    location &&  <span className='d-flex bg-danger text-white justify-content-center pt-3 me-3' style={{borderRadius: '5px', width:'150px'}}>
                    <FontAwesomeIcon className='mt-1' icon={faMapMarkerAlt}></FontAwesomeIcon> 
                    <p className='mx-2'  style={{marginTop: '2px'}}> <strong> {location} </strong>  </p>
                    </span>
                }
                <span className='d-flex bg-danger text-white justify-content-center pt-3' style={{borderRadius: '5px', width:'200px'}}>
                    <FontAwesomeIcon className='mt-1' icon={faCalendarDay}></FontAwesomeIcon> 
                    <p className='mx-2'  style={{marginTop: '2px'}}> <strong> {created} </strong>  </p>
                </span>
                </div>
                <p className='mt-3'> {description} </p>
            </div>
          
        </div>
    );
};

export default Blog;