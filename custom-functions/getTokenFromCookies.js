import { cookies } from "next/headers";
const accessToken = cookies().get("accessToken")?.value;
const refreshToken = cookies().get("refreshToken")?.value;
export { accessToken, refreshToken };
