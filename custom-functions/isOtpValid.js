"use client";
import axios from "axios";
import { baseURL } from "@/app/constants";

const getTempToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("tempToken");
  }
  return null;
};

export default async function isOtpValid(otp) {
  const token = getTempToken();
  console.log("tempToken: " + token);
  if (token == null) {
    console.log("tempToken is not found so signup again");
    return false;
  }
  const data = JSON.stringify({
    otp: otp,
  });
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  let code;
  try {
    let response = await axios.post(`${baseURL}/api/verification/otp`, data, {
      headers: headers,
    });
    code = 200;
  } catch (error) {
    console.log(error);
    code = error.response.status;
  }
  return code;
}
