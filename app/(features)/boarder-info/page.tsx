import React from "react";
import Navbar from "@/components/Navbar";
import { FaSearch } from "react-icons/fa";
const Info = () => {
  const details = {
    name: "",
    message: "Boarder's Information",
  };
  const name = "Mohit Saini",
    roll = "21HS10028",
    room = "C-142";
  let imgUrl = "";
  return (
    <div>
      <Navbar details={details} />

      <div className="mt-10">
        <div className="w-4/5 sm:w-1/2 mx-auto">
          <div className="relative rounded-lg border-2 border-purple-600">
            <input
              type="text"
              className="block w-full py-2 px-4 text-2xl font-medium placeholder-gray-400 focus:outline-none text-center bg-transparent"
              placeholder="Input Roll No."
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-purple-600 text-white p-3">
              <FaSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-lg shadow-slate-600 mx-auto mt-10">
        <figure className="px-10 pt-10">
          <img
            src="/static/images/image.png"
            alt="Boarder Photo"
            className="w-full h-64 object-cover rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className="text-2xl  text-black font-semibold uppercase">{name}</p>
          <p className="text-2xl font-semibold text-black uppercase">{roll}</p>
          <p className="text-2xl font-semibold text-black uppercase">{room}</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="w-96 sm:w-auto mx-auto text-center text-xl font-bold text-gray-700">
          I am the proud Boarder of Rajendra Prasad Hall of Residence.
        </p>
      </div>
    </div>
  );
};

export default Info;
