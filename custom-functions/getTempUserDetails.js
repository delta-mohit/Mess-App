import axios from "axios";
import { baseURL } from "@/app/constants";
import { cookies } from "next/headers";

export default async function getTempUserDetails() {
  let tempToken = cookies().get("tempToken");
  let name, email;
  try {
    let response = await axios.get(`${baseURL}/api/verification/user`, {
      headers: {
        Authorization: `Bearer ${tempToken.value}`,
      },
    });
    name = response.data.data.name;
    email = response.data.data.email;
  } catch (error) {
    console.log(error);
    name = "error";
    email = "error";
  }
  return { name, email };
}
