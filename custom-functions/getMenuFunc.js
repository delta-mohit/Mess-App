'use server';
import axios from "axios"
export default async function getMenu({day, slot}) {
  day = day.toUpperCase();  
    const requestOptions = {
      headers: {
        "Authorization": "Bearer xyz",
      },
    };
    let res;
    try {
      res = await axios.get(`https://rp-mess-website-backend.vercel.app/api/menu?day=${day}&timeSlot=${slot}`, requestOptions);
    } catch (e) {
      console.log("Failed to fetch menu");
      console.log(e);
      return;
    }
    console.log(res.status);
    if (res.status !== 200) {
      console.log("Failed to fetch menu");
      return;
    }
    const menu = res['data']['data']; 
    return menu;
  }
