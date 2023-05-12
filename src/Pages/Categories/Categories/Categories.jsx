import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';

const Categories = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>{user?.email}</h2>
        </div>
    );
};

export default Categories;