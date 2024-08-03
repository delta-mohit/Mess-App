import React from "react";

const Person = ({name, contact}) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-xl shadow-slate-500 p-4">
      <img src="/static/images/image.png" className="w-3/4 h-auto"></img>
      <p className='text-center text-xl font-medium mb-4'>{name}</p>
      <p>{contact}</p>
    </div>
  );
};

export default Person;
