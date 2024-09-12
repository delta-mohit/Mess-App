"use client"
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import getProfileData from "@/custom-functions/getProfileData"
const Profile = () => {
  const details = {
    name: "",
    message: "My Profile",
  };
  // State to store user data
  const [userData, setUserData] = useState({
    name: "",
    rollNo: "",
    email: "",
    roomNo: "",
    graduationYear: "",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API call
        const data = await getProfileData(); // Example API
        // Update state with fetched data
        setUserData({
          name: data.name || "Not Found",
          rollNo: data.rollNumber || "Not Found",
          email: data.email || "Not Found",
          roomNo: data.roomNumber || "Not Found",
          graduationYear: data.graduationYear || "Not Found",
        });

      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once after initial render
  return (
    <>
      <Navbar details={details} />
      <div>
        <div className="mt-4">
          <img src="/static/images/image.png" alt="Profile Picture" className="h-52 w-52 mx-auto object-cover rounded-full"/>
        </div>
        <div className="w-full space-y-8 mt-10">
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Name</p>
            <p className="text-xl font-bold ml-4">{userData.name}</p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Roll No.</p>
            <p className="text-xl font-bold ml-4">{userData.rollNo}</p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2 overflow-scroll">
            <p className="text-md ml-4 mt-1">E-Mail</p>
            <p className="text-xl font-bold ml-4">{userData.email}</p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Room No.</p>
            <p className="text-xl font-bold ml-4">{userData.roomNo}</p>
          </div>
          <div className="w-3/4 mx-auto shadow-xl p-2">
            <p className="text-md ml-4 mt-1">Graduation Year</p>
            <p className="text-xl font-bold ml-4">{userData.graduationYear}</p>
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
