"use client"
import React, { useRef, useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import {FaUtensils, FaHamburger,FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import axios from "axios";
import {MY_HEADERS} from '@/constant'

const Fullmenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Click Here to Choose the Day');
  const detailsRef = useRef(null);
  const handleDaySelection = (day) => {
        setSelectedDay(day);
        if (detailsRef.current) {
      detailsRef.current.open = false; // Close the dropdown
    }
    };
    
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getData = ()=>{
    openModal();
  }

  // GET the MENU through API wala Code ------------------
  const client = axios.create({
    baseURL: "https://rp-mess-website-backend.vercel.app/"
  });

  React.useEffect(() => {
  async function getMenu() {
    try {
      const response = await client.get("api/menu?day=MONDAY&timeSlot=BREAKFAST", {
        headers: {
          'Authorization': 'Bearer xyz',
          ...MY_HEADERS 
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }
  getMenu();
}, []);

  // GET the MENU code KHATAM
  return (
    <div className="h-screen flex flex-col">
      <div className="w-full flex flex-row p-4 bg-white shadow-md">
        <div className="font-sans basis-1/2 flex flex-col justify-center items-start space-y-2 p-4">
          <p className="text-lg text-gray-600">Hello User,</p>
          <p className="text-4xl font-bold text-gray-800">See Full MENU</p>
        </div>
        <div className="basis-1/2 flex justify-center items-center p-4">
          <img
            className="rounded-lg w-full h-full shadow-md"
            src="/food.jpg"
            alt="food image"
          />
        </div>
      </div>

      <div className="h-52 flex justify-center items-center">
        <details className="dropdown w-3/4" ref={detailsRef}>
          <summary className="btn m-1 w-full bg-purple-500 text-white font-bold flex justify-center items-center space-x-2 cursor-pointer">
            <RxDropdownMenu className="h-5 w-5" />
            <span>{selectedDay}</span>
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-full p-2 shadow-2xl bg-indigo-400 text-white">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
              <li key={day} className="group">
                <a className="block py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform group-hover:bg-purple-700 group-hover:scale-105"
                onClick={() => handleDaySelection(day)}
                >
                  {day}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>


      <div className="flex-1 flex flex-col justify-center items-stretch space-y-2 p-4">
        <button href="/fullMenu" className="flex-1 flex justify-between items-center bg-orange-400 rounded-lg p-4 text-white hover:bg-orange-500" onClick = {getData}>
          <FaCoffee  className="mr-2 h-20 w-12" />
          <span className="flex-grow text-center text-3xl">BREAKFAST</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
        <button href="/fullMenu" className="flex-1 flex justify-between items-center bg-pink-400 rounded-lg p-4 text-white hover:bg-pink-500" onClick = {getData}>
          <FaUtensils className="mr-2 h-20 w-10" />
          <span className="flex-grow text-center text-3xl">LUNCH</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
        <button href="/fullMenu" className="flex-1 flex justify-between items-center bg-blue-400 rounded-lg p-4 text-white hover:bg-blue-500" onClick = {getData}>
          <FaHamburger className="mr-2 h-20 w-10" />
          <span className="flex-grow text-center text-3xl">SNACK</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
        <button href="/fullMenu" className="flex-1 flex justify-between items-center bg-green-400 rounded-lg p-4 text-white hover:bg-green-500" onClick = {getData}>
          <FaPizzaSlice className="mr-2 h-20 w-10" />
          <span className="flex-grow text-center text-3xl">DINNER</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
      </div>

      {/* Open Modal Logic */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex items-center justify-center z-50">
          <div className="h-1/2 w-full bg-white p-6 mx-4 rounded-lg shadow-lg sm:h-3/4 sm:w-1/2">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button above to close</p>
            <button className="btn" onClick={closeModal}>Close Menu</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fullmenu;
