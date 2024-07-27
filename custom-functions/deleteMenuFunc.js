"use server";
import axios from "axios"
export default async function deleteMenu(id) {
  try {
    const requestOptions = {
      headers: {
        Authorization: "Bearer xyz",
      },
    };
    await axios.delete(
      `https://rp-mess-website-backend.vercel.app/api/menu?id=${id}`,
      requestOptions
    );
    console.log("Post deleted:", id);
  } catch (e) {
    console.log("Error deleting post:", e);
  }
}
