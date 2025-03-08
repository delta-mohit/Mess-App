"use client";
import { baseURL } from "@/app/constants";
import axios from "axios";
// import { cookies } from "next/headers";

const getTempToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("tempToken");
  }
  return null;
};


const sendEmail = async () => {
  console.log("send email file me aa gaya hu");
  try {
    // Extract the temporary token from cookies
    // const tempToken = cookies().get("tempToken");
    const tempToken = getTempToken();
    
    // Make the API request
    
    const response = await axios.get(`${baseURL}/api/verification/mail`, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });

    // Handle the response
    if (response.status === 200) {
      // return {
      //   success: true,
      //   message: response.data.data,
      // };
      //console.log(response.data.data);
      console.log("email chala gaya hai");
    }
  } catch (error) {
    // Handle different error responses
    console.log(error.toString());
    if (error.response) {
      if (error.response.status === 401) {
        // return {
        //   success: false,
        //   error: "Unauthorized",
        // };
        console.log(error.response.data.error + ", while sending mail");
      } else if (error.response.status === 500) {
        // return {
        //   success: false,
        //   error: "Error sending email",
        // };
        console.log(error.response.data.error);
      }
    }
  }
};

export default sendEmail;
