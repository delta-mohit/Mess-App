"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import isOtpValid from "@/custom-functions/isOtpValid";
import deleteCookies from "@/custom-functions/deleteCookies";
function Otp() {
  const [timer, setTimer] = useState(60);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const otp = useRef("");
  const router = useRouter();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsButtonVisible(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(60); // reset timer to 30 seconds
    setIsButtonVisible(false);
    // Handle the resend action here
  };

  const handleSubmit = async () => {
    setloading(true);
    let x = otp.current.value;
    otp.current.value = "";
    console.log(x);
    let code = await isOtpValid(x);
    if (code == 200) {
      //user verified so show popup and send to login page
      toast.success("Email Verified Successfully! Now Please Log In", {
        duration: 6000,
      });
      await deleteCookies("tempToken"); //deleting temp token because hum register ho chuke hai so uski zarurat nahi hai
      router.push("/login");
    } else {
      if (code == 400) {
        toast.error("Invalid OTP Code!");
      } else {
        toast.error("Something went wrong, please try again!");
      }
      //console.log("OTP is not getting validated");
      setloading(false);
      return;
    }
  };

  return (
    <>
      <div className="my-4 flex flex-col sm:flex-row justify-between items-center">
        <input
          type="text"
          ref={otp}
          placeholder="One Time Password"
          className="input input-bordered input-info w-full max-w-xs text-blue-700 text-xl font-medium"
        />
        <div className="flex justify-center items-center mt-4 sm:mt-0">
          {isButtonVisible ? (
            <button
              className="p-2 sm:px-4 sm:py-3  bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleResend}
            >
              Resend OTP
            </button>
          ) : (
            <div className="text-md font-semibold text-blue-600">
              Resend OTP in <span>{timer}</span> sec
            </div>
          )}
        </div>
      </div>
      <button
        className="px-6 py-2 mt-2 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
        onClick={() => {
          handleSubmit();
        }}
      >
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          "Verify OTP"
        )}
      </button>
      <Toaster />
    </>
  );
}
export default Otp;
