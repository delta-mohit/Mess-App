"use server";
import axios from "axios";
import {
  accessToken,
  refreshToken,
} from "@/custom-functions/getTokenFromCookies";
async function add(item, day, time) {
  let response;
  try {
    response = await axios.post(
      "https://rp-mess-website-backend.vercel.app/api/menu",
      {
        day: day.toString().toUpperCase(),
        timeSlot: time.toString().toUpperCase(),
        name: item,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (e) {
    console.error("Error posting menu:", e.message); // Log the error message
  }
  return response;
}
export default async function addMenu(item, day, time) {
  let response;
  try {
    response = await add(item, day, time);
  } catch (e) {
    console.log("Error coming");
  }
  if (response.status === 401) {
    //call updateToken function so that updated token will be store in cookies
    updateToken();
    //adding menu item after updating the accesstoken using refresh token
    try {
      response = await add(item, day, time);
    } catch (e) {
      console.log("Error coming");
    }
  }
}
