import React, { useState } from 'react';
import Update from '../Update/Update';
import ViewImage from '../ViewImage/ViewImage';

const MembersShortListDetail = ({member, deleteMember, index}) => {

    const {_id, id, name, email, phone, image, role, designation, nid, address, city } = member;

    const [modalIsOpen, setIsOpen] = useState(false);


    const [modalForMember, setModalForMember] = useState(false);



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalForMember(){
        setModalForMember(true)
    }

    function closeModalForMember(){
        setModalForMember(false)
    }

    function alertForDelete(id){

        if(window.confirm('Are you sure want to delete this member profile ?')){
            deleteMember(id);
        }

    }
    return (
        <>
            <tr>
                <td> <small> <strong> {index} </strong> </small> </td>
                <td> <small> <strong> {id} </strong> </small> </td>
                <td> <img src={image} style={{ width: '120px' }} alt="" onClick={() => openModalForMember()} /> </td>
                <td> <small > <strong> {name} </strong> </small> </td>
                <td> <small > <strong> {email} </strong> </small> </td>
                <td> <small > <strong> {phone} </strong> </small> </td>
                <td> <small > <strong> {role} </strong> </small> </td>
                <td> <small > <strong> {designation} </strong> </small> </td>
                <td> <small > <strong> {nid}  </strong> </small> </td>
                <td> <small > <strong> {address}  </strong> </small> </td>
                <td> <small > <strong> {city}  </strong> </small> </td>
                <td>
                    <div className="dropdown">
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" onClick={() => openModal() }>Update</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () => alertForDelete(_id) } >Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            {
                modalIsOpen && <Update member={member} modalIsOpen={modalIsOpen} closeModal={closeModal} ></Update>
            }
            {
                openModalForMember && <ViewImage member={member} modalForMember={modalForMember} closeModalForMember={closeModalForMember}></ViewImage>
            }
        </>
    );
};

export default MembersShortListDetail;