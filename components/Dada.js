import React from "react";
const Dada = () => {
  const persons = Array.from({ length: 32 });
  const name = 'Dada'
  return (
    <div className="grid grid-cols-4 justify-items-center divide-x-4 divide-y-4 border-t-2 border-solid border-gray-500">
      {persons.map((_, index) => (
        <div className="flex flex-col justify-center items-center" key={index}>
          <img src="/image.png" className="w-3/4 h-auto"></img>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dada;
