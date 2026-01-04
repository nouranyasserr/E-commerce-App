import React, { useEffect, useState } from "react";
import Style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-6 py-10">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  );
}
