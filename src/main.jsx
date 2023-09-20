import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import myCreateRouter from './Route/Route'

// const myCreateRouter = createBrowserRouter([

//   {
//     path: "/",
//     element: <div>hi</div>
//   },
//   {
//     path: "/products",
//     element: <div>hii</div>
//   },
//   {
//     path: "/about",
//     element: <div>hii</div>
//   }
// ])

// const myCreateRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layouts></Layouts>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/products",
//         element: <Products></Products>
//       },
//       {
//         path: "/about",
//         element: <div>children3</div>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter}></RouterProvider>

  </React.StrictMode>,
)
