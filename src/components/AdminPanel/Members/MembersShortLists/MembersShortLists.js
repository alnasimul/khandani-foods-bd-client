import React from 'react';
import MembersShortListDetail from '../MemberShortListDetail/MembersShortListDetail';


const MembersShortLists = ({members, deleteMember}) => {
    return (
        <table className='table bg-light table-striped table-bordered'>
        <thead>
            <tr>
            <th scope="col">Index</th>
            <th scope="col">#Member ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
            <th scope="col">Designation</th>
            <th scope="col">Nid</th>
            <th scope="col">Addrss</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
                {
                    members.map( (member, index) => <MembersShortListDetail member={member} key={member._id} index={index + 1} deleteMember={deleteMember}></MembersShortListDetail>)
                }
        </tbody>
    </table>
    );
};

export default MembersShortLists;