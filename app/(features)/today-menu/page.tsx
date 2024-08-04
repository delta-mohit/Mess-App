import Navbar from '@/components/Navbar'
import React from 'react'
import Carousel from "@/components/Carousel";
const Menu = () => {
  const details = {
      name : "userName",
      message : "Welcome,"
  };
  return (
    <>
    <Navbar details = {details}/>
    <div className="flex flex-col justify-center items-center space-y-20 mt-5">
        <Carousel meal={"BREAKFAST"}/>
        {/* <Carousel meal={"LUNCH"}/>
        <Carousel meal={"SNACKS"}/>
        <Carousel meal={"DINNER"}/> */}
      </div>
    </>
  )
}

export default Menu;