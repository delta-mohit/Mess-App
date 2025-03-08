import TempUser from "@/lib/models/tempUser";
import { verifyTempToken } from "@/lib/services/auth";
import User from "@/lib/models/user";
import connect from "@/lib/db";
import {
  ERROR_RESPONSE,
  SUCCESS_RESPONSE,
  UNAUTHORISED_RESPONSE,
} from "@/app/constants";

export async function POST(request: Request): Promise<Response> {
  try {
    /* 
          Sample Request Body {
              "otp": "123456",
          }
    */
    const body = await request.json();
    console.log("Received Request Body:", body); // Debugging

    // Extract token from headers
    const token = request.headers.get("Authorization")?.split(" ")[1];
    console.log("Received Token:", token); // Debugging

    if (!token) {
      return ERROR_RESPONSE("Unauthorized: No token found", 401);
    }

    // Verify token
    let decoded;
    try {
      decoded = verifyTempToken(token).data;
      console.log("Decoded Token Data:", decoded); // Debugging
    } catch (error) {
      console.error("Token Verification Error:", error);
      return UNAUTHORISED_RESPONSE;
    }

    if (!decoded) {
      return UNAUTHORISED_RESPONSE;
    }

    // Safety check for OTP in request body
    if (!body.otp) {
      return ERROR_RESPONSE("Invalid Request Body: OTP is missing", 400);
    }

    // Connect to database
    try {
      await connect();
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Database Connection Error:", error);
      return ERROR_RESPONSE("Database connection failed", 500);
    }

    // Fetch user from TempUser collection
    const user = await TempUser.findOne({ rollNumber: decoded.rollNumber });
    console.log("TempUser Found:", user); // Debugging

    if (!user) {
      return ERROR_RESPONSE("User not found in TempUser", 404);
    }

    // Check if the OTP matches
    console.log("Stored OTP:", user.emailOTP, "Received OTP:", body.otp); // Debugging

    if (String(user.emailOTP) !== String(body.otp)) {
      return ERROR_RESPONSE("Invalid OTP", 400);
    }

    // Save user to Users collection
    const newUser = new User({
      rollNumber: user.rollNumber,
      password: user.password,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    console.log("New User Object Before Save:", newUser); // Debugging

    await newUser.save();
    console.log("User Successfully Saved!"); // Debugging

    // Delete user from TempUser collection
    await TempUser.deleteOne({ rollNumber: decoded.rollNumber });
    console.log("TempUser Entry Deleted!");

    return SUCCESS_RESPONSE("User registered successfully", 200);
  } catch (error:any) {
    console.error("OTP Verification Error:", error);
    return ERROR_RESPONSE(error.message || "Internal Server Error", 500);
  }
}
