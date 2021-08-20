import React, { useState } from 'react';
import Update from '../Update/Update';

const SingleMemberAccordion = ({ member, index, deleteMember }) => {
    const { _id, id, name, email, phone, image, role, designation, nid, address, city } = member;

    const [modalIsOpen, setIsOpen] = useState(false);



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    function alertForDelete(id) {

        if (window.confirm('Are you sure want to delete this member profile ?')) {
            deleteMember(id);
        }

    }
    return (
        <div class="accordion w-100" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id={`heading${index}`}>
                    <button class="accordion-button collapsed  text-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                        {id} - {name}
                    </button>
                </h2>
                <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                        <div className="dropdown mb-3">
                            <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Action
                            </a>

                            <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                                <li> <a className="dropdown-item" href="#" onClick={() => openModal()}>Update</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => alertForDelete(_id)} >Delete</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className='text-center mb-3'>
                                <img src={image} alt="" className='img-fluid' />
                            </div>
                            <p><strong>Email: </strong>{email}</p>
                            <p><strong>Phone: </strong> {phone}</p>
                            <p><strong>Nid: </strong> {nid}</p>
                            <p><strong>City: </strong> {city}</p>
                            <p><strong>Address: </strong> {address}</p>
                            <p><strong>Role: </strong> {role}</p>
                            <p><strong>Designation: </strong>{designation}</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalIsOpen && <Update member={member} modalIsOpen={modalIsOpen} closeModal={closeModal} ></Update>
            }
        </div>
    );
};

export default SingleMemberAccordion;