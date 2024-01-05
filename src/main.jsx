import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import MainRouter from './MainRouter.jsx';
import Home from './Component/Home/Home.jsx';
import Services from './Component/Pages/Services/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/services",
        element: <Services/>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container m-auto'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
