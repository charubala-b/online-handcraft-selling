import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Connect from './Components/Connect.jsx'
import Ourstory from './Components/Ourstory.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/connect",
    element:<Connect/>
  },
  {
    path:"/ourstory",
    element:<Ourstory/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
