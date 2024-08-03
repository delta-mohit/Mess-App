import react from "react";
import {
  FaUtensils,
  FaHamburger,
  FaCoffee,
  FaPizzaSlice,
} from "react-icons/fa";
const Suggest = () => {
  const icons = [
    { component: FaCoffee, label: "Breakfast" },
    { component: FaUtensils, label: "Lunch" },
    { component: FaHamburger, label: "Snacks" },
    { component: FaPizzaSlice, label: "Dinner" },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center mt-12 text-3xl text-purple-700 font-bold">
          Suggest an food Item
        </div>
        <div className="flex flex-row my-24 items-center justify-evenly">
          {icons.map((icon, index) => {
            return (
              <div className="flex flex-col shadow-2xl p-1" key={index}>
                <icon.component className="mx-auto h-20 w-12" />
                <div>{icon.label}</div>
              </div>
            );
          })}
        </div>
        <div className="w-80 mx-auto">
          <textarea
            placeholder="Suggest an item..."
            className="textarea textarea-bordered w-80 h-40 p-4 mx-auto text-lg border-purple-500 rounded-lg focus:outline-none focus:border-purple-700"
            style={{ resize: "none" }}
          ></textarea>
          <button className="btn btn-primary bg-purple-600 text-white hover:bg-purple-800">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Suggest;
