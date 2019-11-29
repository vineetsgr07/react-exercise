import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default LandingPage;