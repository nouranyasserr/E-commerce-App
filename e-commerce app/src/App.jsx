import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Notfound from './components/Notfound/Notfound'
import Cart from './components/Cart/Cart'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


let query = new QueryClient();


let router = createBrowserRouter([
  {path:'/',element:<Layout/>, children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'products',element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'productdetails/:id/:category',element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'categories',element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'brands',element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'login',element:<Login/>},
    {path:'register',element:<Register/>},
    {path:'*',element:<Notfound  />},


  ]}
])
function App() {
  const [count, setCount] = useState(0)

  return <QueryClientProvider client={query}>
    <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </UserContextProvider>
  </QueryClientProvider>
  
  
}

export default App
