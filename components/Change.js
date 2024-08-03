"use client";
import Navbar from "@/components/Navbar";
import React, { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Menutable from "@/components/Menutable";
import getMenu from "@/custom-functions/getMenuFunc";
import deleteMenu from "@/custom-functions/deleteMenuFunc";
import addMenu from "@/custom-functions/addMenuFunc";
const Change = () => {
  //{For day selection}
  const [selectedDay, setSelectedDay] = useState("Choose Day");
  const detailsRef = useRef(null);
  
  
  const handleDaySelection = (day) => {
    setSelectedDay(day);
    if (detailsRef.current) {
      detailsRef.current.open = false; // Close the dropdown
    }
  };

  // {For meal selection}
  const [selectedMeal, setSelectedMeal] = useState("Choose Meal");
  const mealDetailsRef = useRef(null);
  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
    if (mealDetailsRef.current) {
      mealDetailsRef.current.open = false; // Close the dropdown
    }
  };

  //For displaying the menu items in table and deleting it.
  const [menu, setMenu] = useState([]);
  const [displayLoader, setdisplayLoader] = useState(false);
  const getData = async () => {
    setdisplayLoader(true);
    try {
      let fetchedMenu = await getMenu({
        day: selectedDay,
        slot: selectedMeal.toUpperCase(),
      });
      setMenu(fetchedMenu);
    } catch (e) {
      console.log("Error in getting menu array from backend");
    }
    setdisplayLoader(false);
  };

  const deleteItem = (id)=>{
    deleteMenu(id);
    getData();
  }
  const inputValue = (e)=>{
    e.preventDefault();
    let fooditem = e.target.elements.inputField.value;
    e.target.elements.inputField.value = "";
    addMenu(fooditem,selectedDay,selectedMeal);
    getData();
    //console.log("Input value is" + e.target.elements.inputField.value);
  }
  return (
    <>
      <Navbar details={{ name: "", message: "Edit Menu" }}></Navbar>

      <div className="space-y-12 mt-6">
        {/* {This is the dropdown for day} */}
        <div className="flex justify-center items-center h-[20%]">
          <details className="dropdown w-2/3" ref={detailsRef}>
            <summary className="btn m-1 w-full bg-purple-500 text-white text-sm flex justify-center items-center space-x-2 cursor-pointer">
              <div className="w-[80%] text-lg">{selectedDay}</div>
              <FiChevronDown className="h-8 w-8" />
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

        {/* This is the dropdown for meal */}
        <div className="flex justify-center items-center h-[20%]">
          <details className="dropdown w-2/3" ref={mealDetailsRef}>
            <summary className="btn m-1 w-full bg-purple-500 text-white text-sm flex justify-center items-center space-x-2 cursor-pointer">
              <div className="w-[80%] text-lg">{selectedMeal}</div>
              <FiChevronDown className="h-8 w-8" />
            </summary>
            <ul className="menu dropdown-content rounded-box z-[1] w-full p-2 shadow-2xl bg-indigo-400 text-white">
              {["Breakfast", "Lunch", "Snacks", "Dinner"].map((meal) => (
                <li key={meal} className="group">
                  <a
                    className="block py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform group-hover:bg-purple-700 group-hover:scale-105"
                    onClick={() => handleMealSelection(meal)}
                  >
                    {meal}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-info text-slate-200 text-lg" onClick={()=>getData()}>Display Menu</button>
        </div>

        {/* Add an new item */}
        <form onSubmit={inputValue} className="flex justify-evenly w-[90%] mx-auto">
          <input
            type="text"
            name="inputField"
            placeholder="Enter Item"
            className="input input-bordered w-2/3 max-w-xs"
            autoComplete="off" 
          />
          <button className="btn btn-active btn-accent text-white">
            ADD ITEM
          </button>
        </form>
        {/* Here Menu will display in table form */}
        
        {(() => {
          if(displayLoader){
            return <div className="w-1/2 mx-auto flex justify-center"><span className="loading loading-spinner loading-lg h-40"></span></div>
          }
          else if (menu.length == 0) {
            return (
              <div className="w-3/4 lg:w-1/2 mx-auto text-xl italic text-sky-600">
                Menu Items will display here when you select the day and time slot.
                <br/>
                If still menu is not showing then no items found. Please add items.
              </div>
            );
          } else {
            return <Menutable menu={menu} deleteItem ={deleteItem}></Menutable>;
          }
        })()}
      </div>
    </>
  );
};

export default Change;
