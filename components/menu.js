import React from "react";
import axios from "axios";
import { baseURL } from "@/app/constants";
import Image from "next/image";
import { accessToken } from "@/custom-functions/getTokenFromCookies";

const Menu = async ({ day, timeSlot }) => {
  let res;
  let items = [];
  try {
    res = await axios.get(
      `${baseURL}/api/menu?day=${day}&timeSlot=${timeSlot}&category=MAIN_COURSE`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (e) {
    console.error("Failed to fetch menu items", e);
  }
  items = res?.data.data;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mt-8 mb-8 w-[95%] mx-auto">
      {items.map((item, index) => (
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
      ))}
    </div>
  );
};

export default Menu;
