import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div style={{ paddingLeft: ' 50%', paddingTop: '10%' }}>
            <Spinner animation='border' variant='primary' />
        </div>
    }
    if (!user) {
        return <Navigate to='/login' ></Navigate>
    }
    return children;
};

export default PrivateRoute;