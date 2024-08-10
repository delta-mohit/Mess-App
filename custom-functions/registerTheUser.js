"use server";
import axios from "axios";
import { baseURL } from "@/app/constants";
import storeTempToken from "@/custom-functions/storeTempToken";
export default async function registerUser(name, rollNumber, password) {
  const data = {
    rollNumber: rollNumber,
    password: password,
    name: name,
  };
  let code;
  try {
    const response = await axios.post(`${baseURL}/api/user/register`, data);
    //console.log("API response:", response.data);
    console.log(
      "temp user ban gaya hai and uska token hai :- ",
      response.data.data.token
    );
    storeTempToken(response.data.data.token);
    code = response.status;
    return code;
  } catch (error) {
    console.log("Error message is :- ", error.response.data.error);
    if (error.response) {
      console.log(error.response.status);
      code = error.response.status;
      // Return the code from within the catch block
      return code;
    } else {
      // Handle network or other errors
      console.error(error.message);
      code = 500; // Or some other error code
      return code;
    }
  }
}
