"use client";
import { React, useRef, useState } from "react";
import { FaLock, FaIdBadge } from "react-icons/fa";
import getUserInfo from "@/custom-functions/getUserInfo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const rollNumber = useRef();
  const password = useRef();
  const handleEnteredInfo = (e) => {
    e.preventDefault();
    isUserValid(rollNumber.current.value, password.current.value);
    rollNumber.current.value = "";
    password.current.value = "";
   
  };
  const [loading, setloading] = useState(false);
  const isUserValid = async (r, p) => {
    setloading(true);// to show loader on the Sign In button because getUserInfor and checking will take time
    const check = await getUserInfo(r, p);
    if (check==200) { //store token getUserInfo me ho gaya hoga so user ko aage bhej dete hai
      router.push("/today-menu");
    } else if(check==404){
      console.log("User not found");
      toast.error("User Not Found. First Signup then Login again");
      setloading(false);
    }
    else if(check==401){
      console.log("User Crediantials are wrong. Please enter again");
      toast.error("Wrong Crediantials, Try Again");
      setloading(false);
    }else if(check==400){
      console.log("Invalid Request Body. Required fields: rollNumber, password");
      toast.error("Something is missing in input, try again");
      setloading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto lg:py-0 w-full">
      <div className="w-full bg-white dark:bg-white">
        <div className="p-2 space-y-8 mt-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center mx-auto">
            Log in to your account
          </h1>
          <form
            className="space-y-8"
            onSubmit={(e) => {
              handleEnteredInfo(e);
            }}
          >
            <div>
              <label
                htmlFor="roll"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
              >
                Your Roll No <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 dark:bg-white rounded-lg p-2.5 border border-gray-300 dark:border-gray-600">
                <FaIdBadge className="text-gray-400 dark:text-gray-400 mr-2" />
                <input
                  type="roll"
                  name="roll"
                  id="roll"
                  className="bg-transparent outline-none flex-1 text-purple-600 dark:text-purple-600"
                  placeholder="Roll Number"
                  required
                  autoComplete="off"
                  ref={rollNumber}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 dark:bg-white rounded-lg p-2.5 border border-gray-300 dark:border-gray-600">
                <FaLock className="text-gray-400 dark:text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-transparent outline-none flex-1 text-purple-600 dark:text-purple-600"
                  placeholder="••••••••"
                  required
                  ref={password}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full dark:text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Log In"
              )}
            </button>
          </form>
          <p className="text-sm font-light text-black dark:text-black">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
            Click Here to Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Toaster
        toastOptions={{
          // Define default options
          duration: 5000,
        }}
      />
    </div>
  );
};

export default LoginForm;
