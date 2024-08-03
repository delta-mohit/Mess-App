import React from "react";
const Notice = () => {
  return (
    <div
      className="card bg-blue-100 shadow-xl w-[90%] sm:w-[40%] mx-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      <div className="text-center text-2xl font-semibold p-4">Title</div>
      <figure className="px-4 pt-5">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Notice"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center">
        <div className="text-wrap">
          Hey everyone! almost 2022 and we still don know if there is aliens
          living among us, or do we? Maybe the person writing this is an alien.
          You will never know. Hey everyone! almost 2022 and we still don know
          if there is aliens living among us, or do we? Maybe the person writing
          this is an alien. You will a never know.
        </div>
      </div>
    </div>
  );
};

export default Notice;
