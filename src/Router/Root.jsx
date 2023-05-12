import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Categories from '../Pages/Categories/Categories/Categories';
import News from '../Pages/News/news/News';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';
import PrivateRoot from './PrivateRoot';

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
                    path:'/categories/:id',
                    element:<PrivateRoot><Categories/></PrivateRoot>
                },
                {
                    path:'/news/:id',
                    element:<News/>
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