import { useState } from "react";
import { Link } from "react-router-dom";
import ongoingevent from "../../Utils/ongoingevents";

export default () => {
  const tabItems = ["Offline", "Virtual", "Hybrid"];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="relative px-4 md:px-8">
      <div
        className="absolute z-[-100] inset-0 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"
        }}
      ></div>
      <ul
        role="tablist"
        className="max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm mt-12"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem == idx
                ? "border-indigo-600 text-indigo-600"
                : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem == idx ? true : false}
              aria-controls={`tabpanel-${idx + 1}`}
              className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="max-w-screen-xl mx-auto border-b flex items-center justify-center gap-x-3 overflow-x-auto text-sm mt-12 flex-wrap gap-y-12">
        {ongoingevent.map((items, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <Link to={`/app/event/${index}`} state={{ some: "value" }}>
              <img className="rounded-t-lg" src={items.poster} alt="" />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {items.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 line-clamp-3">{items.description}</p>
              <div className="flex">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
                >
                  {items.type}
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
                >
                  {items.start}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div className="flex">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
              >
                Virtual
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
              >
                Starts at 01/01/2023
              </button>
            </div>
          </div>
        </div> */}

        {/* card */}
      </div>
    </div>
  );
};
