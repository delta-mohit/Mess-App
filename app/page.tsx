import Image from "next/image";

import LoginForm from '../components/loginForm';
export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden flex-col items-center justify-center bg-gray-200">
      <div className="bg-white px-6 py-2 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-center text-3xl font-bold my-2 text-purple-600">
          RP Hall MESS
        </h1>
        <div className="flex justify-center mb-2">
          <Image
            src="/rphall.jpg"
            alt="RP Hall"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        
        <LoginForm/>
      </div>
    </main>
  );
}
