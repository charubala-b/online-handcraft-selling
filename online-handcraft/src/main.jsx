
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Connect from './Components/Connect.jsx'
import Ourstory from './Components/Ourstory.jsx'
import Bangles from './Components/Bangles.jsx'
import Bag from "./Components/Bag.jsx"
import Dress from "./Components/Dress.jsx"
import Statue from "./Components/Statue"
import Pot from "./Components/Pot"
import SeeAll from "./Components/SeeAll.jsx"
import Store from './Components/Store.jsx'
import Addcart from './Components/Addcart.jsx'

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
  },
  {
    path:"/bangles",
    element:<Bangles/>
  },
  {
    path:"/pot",
    element:<Pot/>
  },
  {
    path:"/statue",
    element:<Statue/>
  },
  {
    path:"/bag",
    element:<Bag/>
  },{
    path:"/dress",
    element:<Dress/>
  },
  {
   path:"/seeall",
   element:<SeeAll/>
  },
  {
    path:"/sale",
    element:<Store/>
  },
  {
    path:"/destination",
    element:<Addcart/>
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

