import React, { useContext, useEffect, useState } from 'react'
import Style from './Login.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { UserContext } from '../../Context/UserContext';



export default function Login() {

  let navigate=useNavigate();

  let {setUserLogin}=useContext(UserContext);

  const [isLoading ,setisLoading ] = useState(false);
  const [apiError ,setApiError ] = useState('');

  let validationSchema= Yup.object().shape({
   
    email:Yup.string().email('Invalid email').required('Email is required'),
    
    password:Yup.string().matches(/^(?=.*[^A-Za-z0-9])[A-Z][0-9a-z!@#$%^&*()_\-+=<>?]{5,15}$/,'Password must start with an uppercase letter and include at least one special character').required('Password is required')
    
})
  


   async function handleLogin(formValues){

    setisLoading(true);
    
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formValues)
    .then((apiResponse)=>{
      if(apiResponse?.data?.message === 'success')
      {
        localStorage.setItem('userToken',apiResponse.data.token);
        setUserLogin(apiResponse.data.token);
        navigate('/');
        setisLoading(false);
        console.log(x);
      }
      
    })
    .catch((apiResponse)=>{
      setisLoading(false);
      setApiError(apiResponse?.response?.data?.message)
    })
   
  } 

  let formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:validationSchema,
    onSubmit:handleLogin
  })


    
    useEffect(()=>{

    },[]);
  return <>
  <div className="py-6 mx-auto max-w-xl">
    {apiError? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
   {apiError}
</div> : null}

  <h1 className="text-3xl mb-5 font-bold text-green-600 text-left">Login Now</h1>

  <form onSubmit={formik.handleSubmit}>
    
    <div className="relative z-0 w-full mb-8 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
      <label htmlFor="email" className="absolute top-3 left-0 origin-[0] text-sm text-gray-500 transform duration-300 scale-75 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600">Enter Your Email</label>
    </div>
    {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
   {formik.errors.email}
</div> : null}


    

    <div className="relative z-0 w-full mb-8 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
      <label htmlFor="password" className="absolute top-3 left-0 origin-[0] text-sm text-gray-500 transform duration-300 scale-75 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600">Enter Your Password</label>
    </div>
    {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
   {formik.errors.password}
</div> : null}


    
    <div className="text-left flex items-center">
      <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300">
        {isLoading?<i className='fas fa-spinner fa-spin'></i>:'Login'}
      </button>
      <p className='pl-4'>Don't have an account? <span className='font-semibold'><Link to={'/register'}>Register Now</Link></span></p>
    </div>
  </form>
</div>


  
  </>
}
