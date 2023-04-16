import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-3/4 mt-10">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block  leading-normal " +
                  (openTab === 1
                    ? "bg-violet-600" + color + "-600"
                    : "text-blue" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Ongoing Events
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-" + color + "-600"
                    : "text-blue" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Upcoming Events
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-" + color + "-600"
                    : "text-blue" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Past events
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via plug-and-play networks.
                    Dynamically procrastinate B2C users after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via premier niche markets.
                    Professionally cultivate one-to-one customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for state of the art
                    customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without cross-media value. Quickly
                    maximize timely deliverables for real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions without functional
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between m-24">
        <div class="max-w-md bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex">
              <span class="text-xs font-semibold py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                {" "}
                pink
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-md bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex">
              <span class="text-xs font-semibold py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                {" "}
                pink
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-md bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex">
              <span class="text-xs font-semibold py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                {" "}
                pink
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="pink" />;
    </>
  );
}
