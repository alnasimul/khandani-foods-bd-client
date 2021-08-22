import React from 'react';
import SingleMemberAccordion from '../SingleMemberAccordion/SingleMemberAccordion';
import './MembersAccordion.css';

const MembersAccordion = ({ members, loading, deleteMember }) => {
    return (
        <div className="col-md-12 col-12 col-sm-12 ms-3 mb-3 mt-4 membersAccordion">
        {
            loading ? <div className={` d-flex justify-content-center m-5`} style={{ height: '500px' }}>
                <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

                : (members.length > 0 ? members.map((member, index) => <SingleMemberAccordion  member={member} deleteMember={deleteMember} index={index+1}></SingleMemberAccordion>)
                    
                    : <div className='text-center text-secondary m-5 p-5'>
                        <h1> No member available </h1>
                    </div>
                )}
    </div>
    );
};

export default MembersAccordion;