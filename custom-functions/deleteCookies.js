"use server";
import { cookies } from "next/headers";
export default async function deleteCookies(token) {
  if (token == "tempToken") {
    cookies().delete(token);
  } else if (token == "accessToken") {
    cookies().delete(token);
  } else if (token == "refreshToken") {
    cookies().delete(token);
  }
}
