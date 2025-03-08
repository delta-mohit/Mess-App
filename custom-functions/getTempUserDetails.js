"use client"
import axios from "axios";
import { baseURL } from "@/app/constants";
// import { cookies } from "next/headers";
// import { tempToken } from "./getTokenFromCookies";

const getTempToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("tempToken");
  }
  return null;
};

export async function getTempUserDetails() {
  // let tempToken = cookies().get("tempToken");
  let name, email;
  const tempToken = getTempToken();

  try {
    let response = await axios.get(`${baseURL}/api/verification/user`, {
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    });
    name = response.data.data.name;
    email = response.data.data.email;
  } catch (error) {
    console.log(error);
    name = "error";
    email = "error";
  }
  return { name, email };
}

