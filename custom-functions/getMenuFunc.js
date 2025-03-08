"use client";
import axios from "axios";
import getAccessToken from "./getAccessTokenFromLocalStorage";
import updateToken from "@/custom-functions/updateTokenWhenExpired"
import { baseURL } from "@/app/constants";

// Helper function to fetch menu data
async function fetchMenuData(day, slot) {
  const accessToken = getAccessToken();
  day = day.toUpperCase();
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  let response;
  try {
    response = await axios.get(
      `${baseURL}/api/menu?day=${day}&timeSlot=${slot}`,
      requestOptions
    );
  } catch (e) {
    console.log("Failed to fetch menu");
  }
  //console.log(response.status);
  return response;
}



//Main function
export default async function getMenu({ day, slot }) {
  let res;
  try {
    res = await fetchMenuData(day, slot);
  } catch (e) {
    console.log("Failed to fetch menu data sub function");
  }
  if (res.status === 401) {
    //call updateToken function so that updated token will be store in cookies
    updateToken();
    //fetching menu after updating the accesstoken using refresh token
    try {
      res = await fetchMenuData(day, slot);
    } catch (e) {
      console.log(
        "Failed to fetch menu data sub function after updating the token using refresh token"
      );
    }
  }
  const menu = res.data.data;
  return menu;
}
