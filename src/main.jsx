import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container m-auto'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
