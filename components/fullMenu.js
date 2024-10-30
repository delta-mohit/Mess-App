"use client";
import React, { useRef, useState } from "react";
import {
  FaUtensils,
  FaHamburger,
  FaCoffee,
  FaPizzaSlice,
} from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import getMenu from "@/custom-functions/getMenuFunc";
import { FiChevronDown } from "react-icons/fi";
const Fullmenu = () => {
  const [menu, setMenu] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let noDaySelected = "Select the Day";
  const [selectedDay, setSelectedDay] = useState(noDaySelected);
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
    setMenu([]);
    console.clear();
  };
  let fetchedMenu = [];
  const getData = async (timeSlot) => {
    openModal();
    try {
      const day = selectedDay;
      fetchedMenu = await getMenu({ day: day, slot: timeSlot.toUpperCase() });
      setMenu(fetchedMenu);
    } catch (e) {
      console.log("Error in getting menu array from backend");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex justify-center items-center h-[20%]">
        <details className="dropdown w-3/4" ref={detailsRef}>
          <summary className="btn m-1 w-full bg-purple-500 text-white text-sm flex justify-center items-center space-x-2 cursor-pointer relative">
            <div className="w-[80%]">{selectedDay}</div>
            <FiChevronDown className="h-8 w-8 absolute right-4" />
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-full p-2 shadow-2xl bg-indigo-400 text-white">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <li key={day} className="group">
                <a
                  className="block py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform group-hover:bg-purple-700 group-hover:scale-105"
                  onClick={() => handleDaySelection(day)}
                >
                  {day}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div className="flex flex-1 flex-col justify-center space-y-2 p-4 h-auto">
        <button
          href="/fullMenu"
          className="flex-1 flex justify-between items-center bg-orange-400 rounded-lg p-4 text-white hover:bg-orange-500"
          onClick={() => getData("BREAKFAST")}
        >
          <FaCoffee className="mr-2 h-20 w-12" />
          <span className="flex-grow text-center text-3xl">BREAKFAST</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
        <button
          href="/fullMenu"
          className="flex-1 flex justify-between items-center bg-pink-400 rounded-lg p-4 text-white hover:bg-pink-500"
          onClick={() => getData("LUNCH")}
        >
          <FaUtensils className="mr-2 h-20 w-10" />
          <span className="flex-grow text-center text-3xl">LUNCH</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
        <button
          href="/fullMenu"
          className="flex-1 flex justify-between items-center bg-blue-400 rounded-lg p-4 text-white hover:bg-blue-500"
          onClick={() => getData("SNACKS")}
        >
          <FaHamburger className="mr-2 h-20 w-10" />
          <span className="flex-grow text-center text-3xl">SNACK</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
        <button
          href="/fullMenu"
          className="flex-1 flex justify-between items-center bg-green-400 rounded-lg p-4 text-white hover:bg-green-500"
          onClick={() => getData("DINNER")}
        >
          <FaPizzaSlice className="mr-2 h-20 w-10" />
          <span className="flex-grow text-center text-3xl">DINNER</span>
          <FaCircleChevronRight className="ml-2 h-20 w-10" />
        </button>
      </div>

      {/* Open Modal Logic */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex items-center justify-center z-50">
          <div className="h-1/2 w-full bg-white p-6 mx-4 rounded-lg shadow-lg sm:h-3/4 sm:w-1/2 overflow-auto flex flex-col relative">
            {(() => {
              if (selectedDay == noDaySelected) {
                return (
                  <span className="text-center text-lg">
                    Please Choose an Day from dropdown to see the Menu
                  </span>
                );
              } else if (menu.length == 0) {
                return (
                  <span className="loading loading-spinner loading-lg mx-auto h-40"></span>
                );
              } else {
                return (
                  <>
                    <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
                      {menu.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  </>
                );
              }
            })()}
            <button
              className="p-2 rounded-lg hover:bg-purple-700 mt-6 bg-purple-500 text-white text-lg w-3/4 absolute bottom-4 left-1/2 -translate-x-1/2 "
              onClick={closeModal}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fullmenu;
