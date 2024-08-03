import axios from "axios";
import { baseURL } from "@/app/constants";
export default async function registerUser(name, rollNumber, password) {

  const data = {
    rollNumber: rollNumber,
    password: password,
    name: name,
  };
  let code = 201;
  try {
    const response = await axios.post(`${baseURL}/api/user/register`, data);
    return code;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      code = error.response.status;
      // Return the code from within the catch block
      return code;
    } else {
      // Handle network or other errors
      console.error(error.message);
      code = 500; // Or some other error code
      return code;
    }
  }
}
