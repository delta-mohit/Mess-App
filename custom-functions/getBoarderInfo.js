"use client";
import axios from "axios";
import { baseURL } from "@/app/constants";
import getAccessToken from "./getAccessTokenFromLocalStorage";
const getBoarderInfo = async (roll) => {
  let accessToken = getAccessToken();
  let response;
  try {
    response = await axios.get(
      `${baseURL}/api/user/search?rollNumber=${roll}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    return response.data.data;
  } catch (e) {
    return { name: "User Not Found", rollNumber: "", email: "" };
  }
};
export default getBoarderInfo;
