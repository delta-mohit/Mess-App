"use client"
import React, { useState } from "react";
import Image from "next/image";
import rphallImage from "@/public/static/images/rphall.jpg"
import SignupForm from '@/components/signup'
const Signup = () => {
  const [loading, setloading] = useState(false);
  return (
      <div className="w-full sm:w-1/2 mx-auto">
        <p className="mt-14 mb-2 font-medium text-center text-2xl text-black">Welcome to</p>
        <p className="text-center text-4xl font-bold mb-10 text-purple-600">
          RP Hall MESS
        </p>
        <div className="flex flex-col justify-center mb-2 w-4/5 mx-auto">
          <Image
            src={rphallImage}
            alt="RP Hall"
            width={400}
            height={400}
            className="rounded-lg mx-auto"
          />
          <SignupForm loading={loading} setloading={(e:any)=>setloading(e)}/>
        </div>
      </div>
  );
};

export default Signup;
