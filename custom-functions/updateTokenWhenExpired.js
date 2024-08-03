import {
  accessToken,
  refreshToken,
} from "@/custom-functions/getTokenFromCookies";
import storeToken from "@/custom-functions/storeToken";
import { baseURL } from "@/app/constants";

export default async function updateToken() {
  const response = await axios.post(`${baseURL}/api/user/refresh`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  storeToken(response.data.data);
}
