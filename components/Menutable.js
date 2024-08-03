import React from "react";

const Menutable = (props) => {

  return (
    <div className="relative shadow-md rounded-lg w-[90%] mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 w-3/4">
              Menu Item
            </th>
            <th scope="col" className="px-6 py-3 w-auto">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {props.menu.map((item,index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-3/4"
              >
                {item.name}
              </th>
              <td className="px-6 py-4 w-auto">
                <button id={item._id} className="btn btn-error text-gray-950" onClick={(e)=>props.deleteItem(e.target.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menutable;
