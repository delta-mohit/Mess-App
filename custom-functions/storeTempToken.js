"use server";
import { cookies } from "next/headers";

export default async function storeTempToken(StoreTokenRequest) {
  const isProduction = process.env.NODE_ENV === "production";
  cookies().set({
    name: "tempToken",
    value: StoreTokenRequest.accessToken,
    httpOnly: true,
    sameSite: "strict",
    secure: isProduction,
    path: "/",
  });
  console.log(
    "Temp token cookies me set ho gaya hai. And temp token hai :- ",
    StoreTokenRequest.accessToken
  );
}
