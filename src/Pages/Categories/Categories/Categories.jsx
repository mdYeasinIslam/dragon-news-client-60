import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useLoaderData } from 'react-router-dom';
import NewsByCategory from '../NewsByCategory/NewsByCategory';

const Categories = () => {
    const {user} = useContext(AuthContext)
    const categoryData = useLoaderData()
    return (
        <div>
            {
                categoryData.map(category => <NewsByCategory key={category._id} category={category}/>)
            }
        </div>
    );
};

export default Categories;