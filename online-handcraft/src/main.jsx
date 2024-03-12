import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Connect from './Components/Connect.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/connect",
    element:<Connect/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
