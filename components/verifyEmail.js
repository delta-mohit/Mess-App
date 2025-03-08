"use client"
import React, { useEffect, useState } from "react";
import Otp from "@/components/otpInput";
import {getTempUserDetails} from "@/custom-functions/getTempUserDetails"
const EmailVerification =  () => {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  useEffect(() => {
    async function fetchUserDetails() {
      const details = await getTempUserDetails();
      setUserDetails(details);
    }
    fetchUserDetails();
  }, []);
 
  return (
    <section className="max-w-2xl mx-auto bg-white border-2 border-blue-500">
      <div className="h-[200px] bg-[#365CCE] w-full text-white flex items-center justify-center flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-[1px] bg-white"></div>
          <EmailIcon />
          <div className="w-10 h-[1px] bg-white"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
            THANKS FOR SIGNING UP!
          </div>
          <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
            Verify your E-mail Address
          </div>
        </div>
      </div>
      <main className="mt-8 px-5 sm:px-10">
        <h2 className="text-gray-700 ">
          Hello <span className="font-bold">{userDetails.name}</span>,
        </h2>
        <p className="mt-2 leading-loose text-gray-600 ">
          Please enter the OTP which you received on{" "}
          <span className="italic">
            &quot;{userDetails.email}
            &quot;
          </span>
        </p>
        <Otp></Otp>

        <p className="mt-4 leading-loose text-gray-600">
          This passcode will only be valid for the next
          <span className="font-bold"> one hour</span>
        </p>
        <p className="mt-4 text-gray-600">
          Thank you, <br />
          RP Mess Website Team
        </p>
      </main>
      <footer className="mt-2">
        <div className="bg-gray-300/60 h-[150px] flex flex-col gap-3 justify-center items-center">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-[#365CCE] font-semibold tracking-wide text-lg">
              If you&apos;re facing any issues,
            </h1>
            <h1 className="text-[#365CCE] font-semibold tracking-wide text-lg">
              Contact Us
            </h1>
            <p className="text-gray-500"> Mohit Saini - 8209052781</p>
            <p className="text-gray-500"> Divyam Pandey - 9654780617</p>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default EmailVerification;
const EmailIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
    </svg>
  );
};
