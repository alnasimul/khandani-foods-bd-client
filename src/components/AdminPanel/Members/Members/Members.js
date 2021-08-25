import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MembersAccordion from '../MembersAccordion/MembersAccordion';
import MembersTable from '../MembersTable/MembersTable';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    useEffect(() => {
        fetch(`https://www.webserver.khandanifoodsbd.com/members?email=${userInfo.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                setMembers(data)
                setLoading(false);
            })

    }, [])

    const deleteMember = id => {
        fetch(`https://www.webserver.khandanifoodsbd.com/deleteMember/${id}?email=${userInfo.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                alert('Member profile successfully deleted from database.. ')
                window.location.reload();
            })
    }
    return (
        <div className='row' style={{}}>
            <Sidebar></Sidebar>
            <MembersTable members={members} loading={loading} deleteMember={deleteMember}></MembersTable>
            <MembersAccordion members={members} loading={loading} deleteMember={deleteMember}></MembersAccordion>
        </div>
    );
};

export default Members;