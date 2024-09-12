import { cookies } from "next/headers";
// These might be wrong because these tokens are get stored in some variables.
// But We need to update token on every visit or reload. So, using function instead of tokens
// will works without any issue.
const accessToken = cookies().get("accessToken")?.value;
const refreshToken = cookies().get("refreshToken")?.value;
const tempToken = cookies().get("tempToken")?.value;
export { accessToken, refreshToken, tempToken };
