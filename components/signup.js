"use client";
import React from "react";
import { FaLock, FaIdBadge, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter, useState } from "next/navigation";
import registerUser from "@/custom-functions/registerTheUser";
import toast, { Toaster } from "react-hot-toast";
import sendEmail from "@/custom-functions/sendEmail";
const SignupForm = ({ loading, setloading }) => {
  console.log(loading);
  const router = useRouter();
  const handleEnteredInfo = async (e) => {
    setloading(true);
    e.preventDefault();
    let name = e.target[0].value;
    let rollNumber = e.target[1].value;
    let password = e.target[2].value;
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    const status = await registerUser(name, rollNumber, password);
    if (status === 201) {
      //user is allow to register so redirect to verify email page
      console.log(
        "redirecting to verify email page from signup page because user clicked on signup button"
      );
      let toastID = toast.loading("Sending Email for Verification");
      await sendEmail();
      toast.dismiss(toastID);
      router.push("/verifyEmail");
    } else {
      setloading(false);
      console.log(status);
      if (status == 409) {
        //user already registered
        toast.error("You are already registered, please Login instead");
      } else if (status == 404) {
        //user is from outside the organisation
        toast.error(
          "This Roll Number is not allowed to access RP Mess Services"
        );
      } else {
        toast.error("Unknown Error Occured, Try again later");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto lg:py-0 w-full">
      <div className="w-full bg-white dark:bg-white">
        <div className="p-2 space-y-8 mt-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center mx-auto">
            Create an account here
          </h1>
          <form className="space-y-8" onSubmit={(e) => handleEnteredInfo(e)}>
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 dark:bg-white rounded-lg p-2.5 border border-gray-300 dark:border-gray-600">
                <FaRegUser className="text-gray-400 dark:text-gray-400 mr-2" />
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-transparent outline-none flex-1 text-purple-600 dark:text-purple-600"
                  placeholder="Enter your Name"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="roll"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-black"
              >
                Roll No <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center bg-gray-50 dark:bg-white rounded-lg p-2.5 border border-gray-300 dark:border-gray-600">
                <FaIdBadge className="text-gray-400 dark:text-gray-400 mr-2" />
                <input
                  type="roll"
                  name="roll"
                  id="roll"
                  className="bg-transparent outline-none flex-1 text-purple-600 dark:text-purple-600"
                  placeholder="21YY1000XX"
                  autoComplete="off"
                  required
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
                "Create Account"
              )}
            </button>
          </form>
          <p className="text-sm font-light text-black dark:text-black">
            Already have an Account??{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Click Here to Log In
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

export default SignupForm;
