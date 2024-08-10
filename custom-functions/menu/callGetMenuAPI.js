"use server";
import axios from "axios";
import { baseURL } from "@/app/constants";
import { cookies } from "next/headers";
export default async function getMenu(day, timeSlot) {
  let res;
  let items = [];
  //let accessToken = getAccessToken()?.value;
  let accessToken = cookies().get("accessToken")?.value;
  try {
    res = await axios.get(
      `${baseURL}/api/menu?day=${day}&timeSlot=${timeSlot}&category=MAIN_COURSE`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (e) {
    console.error(
      "Failed to fetch menu items due to getting some error :- ",
      e.message
    );
  }
  items = res?.data.data;
  return items;
}
