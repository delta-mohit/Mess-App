"use server";
import axios from "axios";
export default async function addMenu(item, day, time) {

  console.log(item + ": " + day + ": " + time);
  try {
    const response = await axios.post(
      "https://rp-mess-website-backend.vercel.app/api/menu",
      {
        day: day.toString().toUpperCase(),
        timeSlot: time.toString().toUpperCase(),
        name: item,
      },
      {
        headers: {
          Authorization: "Bearer xyz",
        },
      }
    );
    console.log(response.data); // Log the entire response data
  } catch (e) {
    console.error("Error posting menu:", e.message); // Log the error message
    return;
  }
}
