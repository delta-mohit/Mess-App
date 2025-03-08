"use client";
import axios from "axios";
import { baseURL } from "@/app/constants";
import getAccessToken from "./getAccessTokenFromLocalStorage";
const getProfileData = async () => {
  let accessToken = getAccessToken();
  let response;
  try {
    response = await axios.get(`${baseURL}/api/user/details`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
  } catch (e) {
    console.log(
      "There is some error in getting User details to show on  Student Info page"
    );
  }
  return response.data.data;
};
export default getProfileData;
