import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const tabItems = ["Offline", "Virtual", "Hybrid"];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="px-4 md:px-8">
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
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <Link to="/app/event/1">
            <img
              class="rounded-t-lg"
              src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              alt=""
            />
          </Link>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div className="flex">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
              >
                Virtual
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
              >
                Starts at 01/01/2023
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <div className="flex">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
              >
                Virtual
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2"
              >
                Starts at 01/01/2023
              </button>
            </div>
          </div>
        </div>

        {/* card */}
      </div>
    </div>
  );
};
