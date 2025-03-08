"use client";
import axios from "axios";
import { baseURL } from "@/app/constants";
import getAccessToken from "@/custom-functions/getAccessTokenFromLocalStorage"
export default async function getMenu(day, timeSlot) {
  let res;
  if (typeof window === "undefined") return []; // Prevent server-side execution

  let items = [];
  let accessToken = getAccessToken(); // Access localStorage safely

  if (!accessToken) {
    console.error("Access token not found");
    return [];
  }
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
    console.error(
      "Failed to fetch menu items due to getting some error :- ",
      e.message
    );
  }
  items = res?.data.data;
  return items;
}
