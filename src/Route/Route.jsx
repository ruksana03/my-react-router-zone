import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';

const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: 'about',
                element: <div>about</div>
            },
            {
                path: 'dashboard',
                element: <div>Dashboard</div>
            },
        ]
    }
])

export default myCreateRouter;