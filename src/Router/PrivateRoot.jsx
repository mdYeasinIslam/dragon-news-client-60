import React, { useContext } from 'react';
import { AuthContext, ModalContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoot = ({ children }) => {
    const { setShow } = useContext(ModalContext)
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    const handleShow = () =>{
         setShow(true)
        };
    if (loader) {
        return <div>loading...</div>
    }
    if (!user) {
        handleShow()
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children

};

export default PrivateRoot;