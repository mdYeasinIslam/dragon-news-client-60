/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { AuthContext, ModalContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoot = ({ children }) => {
    const { setShow } = useContext(ModalContext)
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    useEffect(() => {
        if (!user) { 
            setShow(true)
        }
    }, [user])

    if (loader) {
        return   <Spinner animation="border" variant="warning" />
    }
    if (!user) {

        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children

};

export default PrivateRoot;