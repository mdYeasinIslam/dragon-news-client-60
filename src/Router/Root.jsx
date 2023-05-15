import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Categories from '../Pages/Categories/Categories/Categories';
import News from '../Pages/News/news/News';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';
import PrivateRoot from './PrivateRoot';
import TermsAndCondition from '../Pages/TermsAndCondition/TermsAndCondition';
import UserProfile from '../Pages/UserProfile/UserProfile';

const Root = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<PrivateRoot><Categories/></PrivateRoot>,
                    loader : ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
                },
                {
                    path:'/news/:id',
                    element:<PrivateRoot><News/> </PrivateRoot>,
                    loader:({params}) =>fetch(`http://localhost:5000/news/${params.id}`)
                
                },
                {
                    path:'/terms',
                    element:<TermsAndCondition/>
                },
                {
                    path:'/profile',
                    element:<PrivateRoot><UserProfile/></PrivateRoot>
                },
                {
                    path:'/login',
                    element:<LogIn/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Root;