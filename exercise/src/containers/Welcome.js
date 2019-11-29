import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage = () => {
    return (
        <div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>Welcome</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Link to="/user-list" className="btn btn-info">User List</Link>
            </div>

        </div>
    )
}

export default LandingPage;