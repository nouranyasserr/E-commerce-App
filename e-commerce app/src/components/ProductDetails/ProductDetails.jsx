import React, { useEffect, useState } from 'react'
import Style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";

export default function ProductDetails() {

  let {id , category}=useParams();
  const [productDetails,setProductDetails] = useState(null);
  const [relatedProducts,setRelatedProducts] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  function getProductDetails(id)
  {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(({data})=>{
      setProductDetails(data.data);
    })
    .catch((error)=>{

    })
  }

  function getRelatedProducts(category)
  {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(({data})=>{
      let allProducts=data.data;
      let related = allProducts.filter((product)=>product.category.name == category);
      setRelatedProducts(related);
    })
    .catch((error)=>{

    })
  }
    
    useEffect(()=>{
      getProductDetails(id);
      getRelatedProducts(category);
    },[id , category]);
  return <>
  <div className="row">
    <div className="w-1/4">
    <Slider {...settings}>
      {productDetails?.images.map((src)=><img className='w-full' src={src} alt={productDetails?.title}/>)}
    </Slider>
      
    </div>
    <div className="w-3/4 p-6">
      <h1 className='text-lg font-normal text-gray-950'>{productDetails?.title}</h1>
      <p className='font-light text-gray-600 mt-4'>{productDetails?.description}</p>
      <div className="flex justify-between item-center my-4">
              <span>{productDetails?.price} EGP</span>
              <span>{productDetails?.ratingsAverage} <i className="fas fa-star text-yellow-400"></i></span>
            </div>
            <button className="btn">Add to cart</button>
  </div>
    </div>

    <h3 className="text-3xl mb-5 font-bold text-green-600 text-left">Related Products</h3>

    <div className="row">
      {relatedProducts.map((product)=><div key={product.id} className="w-1/6 px-4">
          <div className="product py-4">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
            <img className="w-full" src={product.imageCover} alt={product.title}/>
            <span className="block font-light mt-2 text-green-600">{product.category.name}</span>
            <h3 className="text-lg font-normal mb-4 text-gray-800">{product.title.split(' ').splice(0,2).join(' ')}</h3>

            <div className="flex justify-between item-center">
              <span>{product.price} EGP</span>
              <span>{product.ratingsAverage} <i className="fas fa-star text-yellow-400"></i></span>
            </div>
            <button className="btn">Add to cart</button>
            </Link>
          </div>
        </div>)}
        
    </div>
    
  </>
}
