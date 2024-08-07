"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { baseURL } from "@/app/constants";
export default async function isOtpValid(otp) {
  const token = cookies().get("tempToken");
  console.log("tempToken: " + token.value);
  if (token == null) {
    console.log("tempToken is not found so signup again");
    return false;
  }
  const data = JSON.stringify({
    otp: otp,
  });
  const headers = {
    Authorization: `Bearer ${token.value}`,
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
