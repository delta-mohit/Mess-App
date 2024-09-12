"use server";
import { baseURL } from "@/app/constants";
import axios from "axios";
import { cookies } from "next/headers";
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with leading 0 if necessary
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1 and pad with leading 0
  const year = date.getFullYear(); // Get the full year

  return `${day}-${month}-${year}`;
};

const submitRatingFunc = async (day, ratings) => {
  let token = cookies().get("accessToken")?.value;
  const today = new Date();
  //console.log(day, ratings, today, token); /to check that data is coming in function is correct or not
  let date;
  if (day == "Today") {
    date = formatDate(today);
  } else if (day == "Yesterday") {
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    date = formatDate(yesterday);
  }
  let data = [
    {
      rating: ratings.BREAKFAST,
      timeSlot: "BREAKFAST",
      date: `${date}`,
    },
    {
      rating: ratings.LUNCH,
      timeSlot: "LUNCH",
      date: `${date}`,
    },
    {
      rating: ratings.SNACKS,
      timeSlot: "SNACKS",
      date: `${date}`,
    },
    {
      rating: ratings.DINNER,
      timeSlot: "DINNER",
      date: `${date}`,
    },
  ];
  let response;
  try {
    response = await axios.post(`${baseURL}/api/rating`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data.message); //to print response of success on server console
  } catch (e) {
    console.log(
      "Error caught in submitRating function (fail api while submitting rating data to backend) :- ",
      e.message
    );
  }
};

export default submitRatingFunc;
