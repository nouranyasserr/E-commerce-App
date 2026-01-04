import React, { useEffect, useState } from 'react'
import Style from './About.module.css'

export default function About() {
    const [counter,setCounter] = useState(0);
    useEffect(()=>{

    },[]);
  return <>
  <h1>About</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis in fuga consequatur minus, dolorum aperiam odit dolorem cum autem nostrum exercitationem debitis, porro inventore assumenda libero provident perspiciatis eius.</p>
  </>
}
