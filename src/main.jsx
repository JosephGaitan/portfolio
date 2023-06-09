import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
//pages
import Start from './pages/Start'
import Home from './pages/Home'
//components

const router =  createBrowserRouter([
  {
    path:'/',
    element: <Start />
  },
  {
    path:'/home',
    element: <Home/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
