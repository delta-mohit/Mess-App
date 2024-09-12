"use server";
import axios from "axios";
import { baseURL } from "@/app/constants";
import { cookies } from "next/headers";

const getBoarderInfo = async (roll) => {
  let accessToken = cookies().get("accessToken")?.value;
  let response;
  try {
    response = await axios.get(
      `${baseURL}/api/user/search?rollNumber=${roll}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.data;
  } catch (e) {
    return { name: "User Not Found", rollNumber: "", email: "" };
  }
};
export default getBoarderInfo;
