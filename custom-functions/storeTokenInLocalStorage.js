export default function storeTokenInLocalStorage(type, token){
    if (typeof window !== "undefined") {
        if (type == "tempToken") localStorage.setItem("tempToken", token.accessToken);
        else if (type == "accessAndRefreshToken") {
          localStorage.setItem("accessToken", token.accessToken);
          localStorage.setItem("refreshToken", token.refreshToken);
        }
    }
}