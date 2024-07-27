import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
const Profile = () => {
  const details = {
    name: "",
    message: "My Profile",
  };
  return (
    <>
      <Navbar details={details} />
      <div>
        <div className="mt-4">
          <img src="/rphall.jpg" alt="Profile Picture" className="h-52 w-52 mx-auto object-cover rounded-full"/>
        </div>
        <div className="w-full space-y-8 mt-10">
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Name</p>
            <p className="text-2xl font-bold ml-4">Mohit Saini </p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Roll No.</p>
            <p className="text-2xl font-bold ml-4">21HS10028 </p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">E-Mail</p>
            <p className="text-2xl font-bold ml-4">johndoe@gmail.com </p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Room No.</p>
            <p className="text-2xl font-bold ml-4">C-142</p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Graduation Year</p>
            <p className="text-2xl font-bold ml-4">2026</p>
          </div>
        </div>
        <div className="mt-6 w-full flex justify-around">
          <button className="btn bg-purple-500 hover:bg-purple-800 text-white text-lg">EDIT</button>
         <button className="btn bg-purple-500 hover:bg-purple-800 text-white text-lg">LOG OUT</button> 
        </div>
      </div>
    </>
  );
};

export default Profile;
