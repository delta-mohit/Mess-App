"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  FaUtensils,
  FaHamburger,
  FaCoffee,
  FaPizzaSlice,
} from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import getMenu from "@/custom-functions/getMenuFunc";
import { FiChevronDown } from "react-icons/fi";

const daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FullMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Select the Day");
  const [timeSlot, setTimeSlot] = useState(null);
  const detailsRef = useRef(null);

  const handleDaySelection = (day) => {
    setSelectedDay(day);
    setMenu([]); // Clear menu when day is changed
    if (detailsRef.current) {
      detailsRef.current.open = false; // Close the dropdown
    }
  };

  const openModal = (slot) => {
    setTimeSlot(slot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMenu([]);
  };

  const fetchData = useCallback(async () => {
    if (!selectedDay || selectedDay === "Select the Day" || !timeSlot) return;

    try {
      const fetchedMenu = await getMenu({
        day: selectedDay,
        slot: timeSlot.toUpperCase(),
      });
      setMenu(fetchedMenu || []);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }, [selectedDay, timeSlot]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const menuButtons = [
    {
      label: "BREAKFAST",
      icon: <FaCoffee className="mr-2 h-20 w-12" />,
      bgColor: "bg-orange-400",
      hoverColor: "hover:bg-orange-500",
    },
    {
      label: "LUNCH",
      icon: <FaUtensils className="mr-2 h-20 w-10" />,
      bgColor: "bg-pink-400",
      hoverColor: "hover:bg-pink-500",
    },
    {
      label: "SNACKS",
      icon: <FaHamburger className="mr-2 h-20 w-10" />,
      bgColor: "bg-blue-400",
      hoverColor: "hover:bg-blue-500",
    },
    {
      label: "DINNER",
      icon: <FaPizzaSlice className="mr-2 h-20 w-10" />,
      bgColor: "bg-green-400",
      hoverColor: "hover:bg-green-500",
    },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Day Selection Dropdown */}
      <div className="flex justify-center items-center h-[20%]">
        <details className="dropdown w-3/4" ref={detailsRef}>
          <summary className="btn m-1 w-full bg-purple-500 text-white text-sm flex justify-center items-center space-x-2 cursor-pointer relative">
            <div className="w-[80%]">{selectedDay}</div>
            <FiChevronDown className="h-8 w-8 absolute right-4" />
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-full p-2 shadow-2xl bg-indigo-400 text-white">
            {daysList.map((day) => (
              <li key={day}>
                <a
                  className="block py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:bg-purple-700 hover:scale-105"
                  onClick={() => handleDaySelection(day)}
                >
                  {day}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* Meal Selection Buttons */}
      <div className="flex flex-1 flex-col justify-center space-y-2 p-4 h-auto">
        {menuButtons.map(({ label, icon, bgColor, hoverColor }) => (
          <button
            key={label}
            className={`flex-1 flex justify-between items-center ${bgColor} rounded-lg p-4 text-white ${hoverColor}`}
            onClick={() => openModal(label)}
          >
            {icon}
            <span className="flex-grow text-center text-3xl">{label}</span>
            <FaCircleChevronRight className="ml-2 h-20 w-10" />
          </button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex items-center justify-center z-50">
          <div className="h-1/2 w-full bg-white p-6 mx-4 rounded-lg shadow-lg sm:h-3/4 sm:w-1/2 overflow-auto flex flex-col">
            {selectedDay === "Select the Day" ? (
              <span className="text-center text-lg">
                Please Choose a Day from dropdown to see the Menu
              </span>
            ) : menu.length === 0 ? (
              <span className="loading loading-spinner loading-lg mx-auto h-40"></span>
            ) : (
              <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
                {menu.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            )}
            <button
              className="btn mt-6 bg-purple-500 text-white text-lg w-1/2 mx-auto"
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

export default FullMenu;
