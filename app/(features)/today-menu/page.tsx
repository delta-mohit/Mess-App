import Navbar from '@/components/Navbar'
import React from 'react'
import Menu from "@/components/menu"
const page = () => {
  const details = {
      name : "userName",
      message : "Welcome,"
  };
  const today = new Date();
  const dayNumber = today.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[dayNumber];
  return (
    <>
    <Navbar details = {details}/>
    <div className='mt-10'>
      <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">
        BREAKFAST
      </h2>
      <Menu day={dayName} timeSlot={"BREAKFAST"}/>
    </div>

    <div className='mt-10'>
      <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">
        LUNCH
      </h2>
      <Menu day={dayName} timeSlot={"LUNCH"}/>
    </div>

    <div className='mt-10'>
      <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">
        SNACKS
      </h2>
      <Menu day={dayName} timeSlot={"SNACKS"}/>
    </div>


    <div className='mt-10'>
      <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">
        DINNER
      </h2>
      <Menu day={dayName} timeSlot={"DINNER"}/>
    </div>
    </>
  )
}

export default page;