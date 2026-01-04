import React, { useEffect, useState } from 'react'
import Style from './MainSlider.module.css'
import mainSlider from '../../assets/slider-image-3.jpg'
import Slider1 from '../../assets/slider-image-2.png'
import Slider2 from '../../assets/slider-image-1.jpg'



export default function MainSlider() {
    const [counter,setCounter] = useState(0);
    useEffect(()=>{

    },[]);
  return <>
  <div className="row">
    <div className="w-3/4">
    <img src={mainSlider} className='w-full h-[400px]'/>
    </div>
    <div className="w-1/4">
    <img src={Slider1} className='w-full h-[200px]'/>
    <img src={Slider2} className='w-full h-[200px]'/>
    </div>
  </div>
  </>
}
