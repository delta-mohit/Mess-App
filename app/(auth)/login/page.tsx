import React from "react";
import Image from "next/image";
import LoginForm from "@/components/loginForm";
const Login = () => {
  return (
      <div className="w-full sm:w-1/2 mx-auto">
        <p className="mt-14 mb-2 font-medium text-center text-2xl text-black">Welcome to</p>
        <p className="text-center text-4xl font-bold mb-10 text-purple-600">
          RP Hall MESS
        </p>
        <div className="flex flex-col justify-center mb-2 w-4/5 mx-auto">
          <Image
            src="/rphall.jpg"
            alt="RP Hall"
            width={400}
            height={400}
            className="rounded-lg mx-auto"
          />
          <LoginForm/>
        </div>
      </div>
  );
};

export default Login;
