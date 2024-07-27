import React from 'react';
import {FaLock, FaIdBadge } from "react-icons/fa";
const LoginForm = () => {
  return (

        <div className="flex flex-col items-center justify-center mx-auto lg:py-0 w-full">
          <div className="w-full bg-white dark:bg-white">
            <div className="p-2 space-y-8 mt-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center mx-auto">
                Log in to your account
              </h1>
              <form className="space-y-8" action="#">
                <div>
                  <label htmlFor="roll" className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Your Roll No <span className='text-red-500'>*</span></label>
                  <div className="flex items-center bg-gray-50 dark:bg-white rounded-lg p-2.5 border border-gray-300 dark:border-gray-600">
                    <FaIdBadge className="text-gray-400 dark:text-gray-400 mr-2" />
                    <input
                      type="roll"
                      name="roll"
                      id="roll"
                      className="bg-transparent outline-none flex-1 text-purple-600 dark:text-purple-600"
                      placeholder="21YY1000XX"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-black">Password<span className='text-red-500'>*</span></label>
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border-2 rounded border-gray-300 bg-gray-700 accent-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:accent-purple-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-black">Remember Me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-black hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full dark:text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                  Sign in
                </button>
                <p className="text-sm font-light text-black dark:text-black">
                  Don&apos;t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">Sign up Here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
  );
};

export default LoginForm;
