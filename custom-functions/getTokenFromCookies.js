import { cookies } from "next/headers";
const accessToken = cookies().get("accessToken")?.value;
const refreshToken = cookies().get("refreshToken")?.value;
const tempToken = cookies().get("tempToken")?.value;
export { accessToken, refreshToken, tempToken };
