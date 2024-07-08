import Image from "next/image";

import LoginForm from '../components/loginForm';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-center text-3xl font-bold mb-4">
          <span className="text-purple-600">RP Hall MESS</span>
        </h1>
        <div className="flex justify-center mb-6">
          <Image
            src="/rphall.jpg"
            alt="RP Hall"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        {/* <form className="space-y-4">
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <FaEnvelope className="text-gray-400 mx-2" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <FaEnvelope className="text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Roll Number"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-2 rounded-lg">
            <FaLock className="text-gray-400 mx-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form> */}


          <LoginForm/>

        {/*-------------------------------------------
        <p className="text-center text-sm mt-4">
          Already Have an Account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login Here
          </a>
        </p>
        */}
      </div>
    </main>
  );
}
