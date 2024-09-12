"use server";
import { cookies } from "next/headers";

export default async function storeToken(StoreTokenRequest) {
  const isProduction = process.env.NODE_ENV === "production";
  console.log(isProduction);
  cookies().set({
    name: "accessToken",
    value: StoreTokenRequest.accessToken,
    httpOnly: true,
    sameSite: "strict",
    secure: isProduction,
    path: "/",
    maxAge: 30 * 24 * 60 * 60, //30 days in seconds
  });

  cookies().set({
    name: "refreshToken",
    value: StoreTokenRequest.refreshToken,
    httpOnly: true,
    sameSite: "strict",
    secure: isProduction,
    path: "/",
    maxAge: 30 * 24 * 60 * 60, //30 days in seconds
  });
}
