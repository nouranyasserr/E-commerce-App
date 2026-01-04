import React, { useEffect, useState } from "react";
import Style from "./RecentProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RecentProducts() {
  const [recentProducts, setRecentProducts] = useState([]);

  function getRecentProducts() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        setRecentProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getRecentProducts();
  }, []);
  return (
    <>
      <div className="row">
        {recentProducts.map((product)=><div key={product.id} className="w-1/6 px-4">
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
  );
}
