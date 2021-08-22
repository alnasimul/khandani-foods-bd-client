import React from 'react';
import MembersShortLists from '../MembersShortLists/MembersShortLists';
import './MembersTable.css';

const MembersTable = ({ members, loading, deleteMember }) => {
    return (
        <div className='col-md-10 col-12 col-sm-12 table-responsive my-3' id='membersTable'>
            <h4 className='text-center mb-3'>Khandani Team Members</h4>
            {
                loading ?
                    <div className={` d-flex justify-content-center m-5 p-5 align-items-center`} style={{ height: '500px' }}>
                        <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" style={{ width: '3rem', height: '3rem', marginTop: '200px' }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : (members.length > 0 ?
                        <MembersShortLists members={members} deleteMember={deleteMember}></MembersShortLists>
                         : <div className='text-center text-secondary m-5 p-5'>
                            :
                            <h1> No member available </h1>
                        </div>
                    )
            }
        </div>
    );
};

export default MembersTable;