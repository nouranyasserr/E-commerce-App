import React, { useContext, useEffect, useState } from 'react'
import Style from './Navbar.module.css'
import Logo from '../../assets/images/shopify.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


export default function Navbar() {
    
    let navigate = useNavigate();
    let {userLogin , setUserLogin} = useContext(UserContext);

    function logOut(){
      localStorage.removeItem('userToken');
      setUserLogin(null);
      navigate('/login');
    }

    
  return <>
  <nav className='bg-neutral-200 static z-50 lg:fixed top-0 left-0 right-0 justify-center text-center'>
    <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-2">
      <div className='flex flex-col lg:flex-row'>
        <div className='container mx-5'>
          <img src={Logo} width={40} alt="logo"   />
        </div>
      
      <ul className='flex flex-col lg:flex-row justify-between m-0 items-center'>
        {
          userLogin !== null? <>
          <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/cart'}>Cart</NavLink></li>
        <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/categories'}>Categories</NavLink></li>
        <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/brands'}>Brands</NavLink></li>
        <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/products'}>Products</NavLink></li>


          </>:null
        }
        
      </ul>
    </div>
    <div>
      <ul className='flex flex-col lg:flex-row justify-between m-0  items-center'>
        {
          userLogin == null? <>
          <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/login'}>Login</NavLink></li>
        <li className='text-md mx-4 py-2 text-slate-900 font-normal'><NavLink to={'/register'}>Register</NavLink></li>
        
          </>:<li onClick={logOut} className='text-md mx-4 py-2 text-slate-900 font-normal'><span className='cursor-pointer'>Logout</span></li>
        }
      <li className='text-md mx-4 py-2 text-slate-900 font-normal flex justify-between items-center'>
          <i className='fab fa-facebook mx-2 fa-sm'></i>
          <i className='fab fa-twitter mx-2 fa-sm'></i>
          <i className='fab fa-instagram mx-2 fa-sm'></i>
          <i className='fab fa-youtube mx-2 fa-sm'></i>

        </li>
        

      </ul>
    </div>

    </div>
    
  </nav>
  </>
}
