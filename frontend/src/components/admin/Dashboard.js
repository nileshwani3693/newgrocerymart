import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Home from './Adminhome';
import './Dashboard.css'

function Dashboard() {
    return (
        <div >
            <div className="d-flex">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}

export default Dashboard;