import React from 'react';
import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
            <Sidebar></Sidebar>
        </div>
    );
};

export default Dashboard;