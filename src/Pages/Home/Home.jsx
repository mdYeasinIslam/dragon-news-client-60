import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user } = useContext(AuthContext)
    return (
        <div>
       <h1>This is home section</h1>
       <img className='w-25 h-25' src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;