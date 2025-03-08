"use server";
import {baseURL} from "@/app/constants"
import axios from "axios";
import {
  accessToken,
  refreshToken,
} from "@/custom-functions/getTokenFromCookies";
import updateToken from "./updateTokenWhenExpired";
async function deleteFunc(id) {
  let response;
  try {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    response = await axios.delete(
      `${baseURL}/api/menu?id=${id}`,
      requestOptions
    );
    console.log("Post deleted:", id);
  } catch (e) {
    console.log("Error deleting post:", e);
  }

  return response;
}

export default async function deleteMenu(id) {
  let response;
  try {
    response = await deleteFunc(id);
  } catch (e) {
    console.log("Error in deleting menu");
  }

  if (response.status === 401) {
    updateToken();
    try {
      response = await deleteFunc(id);
    } catch (e) {
      console.log("Error in deleting menu");
    }
  }
}
