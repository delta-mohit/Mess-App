"use server";
import { baseURL } from "@/app/constants";
import axios from "axios";
import { cookies } from "next/headers";
const submitFeedbackFunc = async (feedback) => {
  let token = cookies().get("accessToken")?.value;
  let data = {
    subject: "Feedback",
    body: feedback,
  };
  try {
    let response = await axios.post(`${baseURL}/api/feedback`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(
      response.data.success == true
        ? "Feedback Added successfully"
        : "Fail to Submit Feedback"
    );
  } catch (e) {
    console.log(
      "Error caught in submit Feedback function (fail api while submitting feedback data to backend) :- ",
      e.message
    );
  }
};
export default submitFeedbackFunc;
