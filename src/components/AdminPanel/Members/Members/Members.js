import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MembersTable from '../MembersTable/MembersTable';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://khandanifoodsbd.com:443/members')
        .then( res => res.json() )
        .then( data => {
            alert('Data loaded successfully from database')
            setMembers(data)
            setLoading(false);
        })

    },[])

    const deleteMember = id => {
        fetch(`http://khandanifoodsbd.com:443/deleteMember/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('Member profile successfully deleted from database.. ')
                window.location.reload();
            })
    }
    return (
        <div className='row' style={{ backgroundColor: "rgb(2,1,3, 0.1)", height: '100vh'}}>
            <Sidebar></Sidebar>
            <MembersTable members={members} loading={loading} deleteMember={deleteMember}></MembersTable>
        </div>
    );
};

export default Members;