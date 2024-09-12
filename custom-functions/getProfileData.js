"use server";
import axios from "axios";
import { baseURL } from "@/app/constants";
import { cookies } from "next/headers";

const getProfileData = async () => {
  let accessToken = cookies().get("accessToken")?.value;
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
