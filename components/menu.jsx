"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import getMenu from "@/custom-functions/menu/callGetMenuAPI";
const Menu = ({ day, timeSlot }) => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      const fetchedItems = await getMenu(day, timeSlot);
      setItems(fetchedItems);
    };
    fetchData(); // Call the async function
  }, []); // Empty dependency array → Runs only once on mount

  if (items.length == 0) {
    return <div>Loading...</div>; // Show loading screen while data is being fetched
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mt-8 mb-8 w-[95%] mx-auto">
      {items.length > 0 ? (
        items?.map((item, index) => (
          <div key={index} className="text-center">
            <Image
              src={item.imgURL}
              alt={item.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "80%", objectFit: "cover" }}
              className="rounded"
            />
            <h3 className="mt-1 text-md font-medium">{item.name}</h3>
          </div>
        ))
      ) : (
        <div className="text-center">No Items Available!</div>
      )}
    </div>
  );
};

export default Menu;
