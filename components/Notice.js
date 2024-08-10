import React from "react";
const Notice = ({ item }) => {
  return (
    <div
      className="card bg-blue-100 shadow-xl w-[90%] sm:w-[40%] mx-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/static/images/bg-image.jpg')" }}
    >
      <div className="text-center text-2xl font-semibold p-4">{item.title}</div>
      <figure className="px-4 pt-5">
        <img src={item.imgUrl} alt="Notice" className="rounded-xl" />
      </figure>
      <div className="card-body items-center">
        <div className="text-wrap">{item.body}</div>
      </div>
    </div>
  );
};

export default Notice;
