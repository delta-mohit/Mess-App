import React from "react";
import Image from "next/image";
import getMenu from "@/custom-functions/menu/callGetMenuAPI";
const Menu = async ({ day, timeSlot }) => {
  let items = await getMenu(day, timeSlot);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center mt-8 mb-8 w-[95%] mx-auto">
      {items?.map((item, index) => (
        <div key={index} className="text-center">
          <Image
            src={item.imgURL}
            alt={item.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "80%", objectFit: "cover" }}
            className="rounded"
          />
          <h3 className="mt-1 text-md font-medium">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Menu;
