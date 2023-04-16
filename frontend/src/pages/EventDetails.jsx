import React, { useEffect, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const EventDetails = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* <div class="w-full bg-[url('https://vl-prod-static.b-cdn.net/system/images/000/445/270/adddec2b88cd2035c66a1d450e4d091c/original/ighatpuri_watersports____Camping.jpg?1615446854')] bg-center bg-cover h-[32rem] mt-4">
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Harishchandragad Trek
            </h1>
          </div>
        </div>
      </div> */}

      <div className={`${showButton ? "block" : "hidden"} md:hidden`}>
        <button class="fixed bottom-2 w-full px-3 py-2 text-center text-md font-medium text-white uppercase transition-colors duration-200 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-blue-500">
          Book now
        </button>
      </div>

      {/* <div class=" sticky top-32 z-50 flex border-b border-gray-900  bg-gray-200  overflow-y-scroll md-overflow-hidden">
        <div className="flex">
          <Link to="/">
            <h1 class="h-10 px-4 py-2 -mb-px text-md text-center hover:text-purple-700 border-b-2 border-gray-500 sm:text-base  whitespace-nowrap focus:outline-none">
              Home
            </h1>
          </Link>
          <MdArrowForwardIos className="mt-3" />
        </div>
        <div className="flex">
          <Link to="/upcomingtreks">
            <h1 class="h-10 px-4 py-2 -mb-px text-md text-center hover:text-purple-700 border-b-2 border-gray-500 sm:text-base  whitespace-nowrap focus:outline-none">
              Upcoming treks
            </h1>
          </Link>
          <MdArrowForwardIos className="mt-3" />
        </div>
        <div className="flex">
          <h1 class="h-10 px-4 py-2 -mb-px text-md text-center hover:text-purple-700 border-b-2 border-gray-500 sm:text-base  whitespace-nowrap focus:outline-none">
            Igatpuri
          </h1>
        </div>
      </div> */}

      <div className="md:flex mt-4">
        <div class="sticky top-44 max-w-lg mx-auto h-1/2  border rounded-lg hidden md:flex md:mx-14 ">
          <div class="p-4">
            <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-3xl ">
              Wanderrlost Presents,
            </h1>
            <p class=" text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
            </p>
            <h2 class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl ">Rs 999 </h2>
            <ul class="mt-4 flex-1 space-y-4">
              <li class="text-gray-500 ">Best Price Gurantee</li>
              <li class="text-gray-500 ">100+ Happy Customers</li>
              <li class="text-gray-500 ">Instant Confirmation</li>
            </ul>
            <button class="w-full justify-end text-center h-14 px-3 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Book Now
            </button>
          </div>
        </div>
        <div class="w-[22rem]  mx-auto  mb-10 text-left md:w-4/5 lg:w-1/2">
          <div class="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 class="headingFont mb-3 text-2xl font-bold text-purple-800 md:leading-tight md:text-5xl">
              Overview of Trek
            </h1>
            <p class="text-md text-gray-900">Grade | Easy | Beginner</p>
            <div class="pt-4 pb-6 mb-6 border-b border-gray-900 flex">
              <AiFillClockCircle className="pl-1 w-7 h-7 text-purple-500" />
              <h1 class="pr-2 text-lg">6 Hours</h1>
              <AiOutlineCalendar className="pl-1 w-7 h-7 text-purple-500" />
              <h1 class="pr-2 text-lg">California</h1>
              <GoLocation className="pl-1 w-6 h-6 text-purple-500" />
              <h1 class="pr-2 text-lg">Maharashtra</h1>
            </div>
            <p>
              Malshej ghat is a spectacle throughout the year. Before the road was constructed,
              walking up and down the hill was the only mode of transport for the villagers. Hence,
              this route is considered ancient. It has a carving of Lord Ganesha, water cisterns and
              occasional rock cut steps. Most of the route is covered in a canopy of green. This
              route also has a few historical references during the time of war with the Portuguese.
              At the end of this route, we move to another trail, one that moves alongside a gushing
              Kalu river, fiercely meandering through during the monsoons. We walk as close to the
              waterfall as possible, generally possible only to a distance of 1.5 kms away from the
              base because of the massive flow of the river which is an impediment for crossing the
              river. Besides the Kalu Waterfall, you'll also get to see an unknown waterfall to the
              right, hidden in a gorge, nonetheless spectacular.
            </p>
          </div>
          <div class="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
              Cost of Trek
            </h1>
            <p class="text-lg text-bold text-gray-800">Rs 900</p>
            <h3 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
              Includes
            </h3>
            <ul class="list-disc ">
              <li>Travelling from Mumbai to Mumbai By AC Bus, </li>
              <li>Meals as mentioned below.</li>
              <li>Trekking expertise charges.</li>
            </ul>
            <p class="text-base text-gray-500">
              (Pickup: Borivali, Kandivali, Malad, Goregaon, Andheri, Khar, Bandra, Sion Ghatkopar
              Thane, Kalyan Bhiwandi Bypass)
            </p>
          </div>
          <div class="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
              Dates
            </h1>
            <ul class="list-disc">
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-2xl">
                  09-10 July 2022 (Leaving by Sat Night) (Sold Out)
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-2xl">
                  09-10 July 2022 (Leaving by Sat Night) (Sold Out)
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-2xl">
                  09-10 July 2022 (Leaving by Sat Night) (Sold Out)
                </h3>
              </li>
            </ul>
          </div>
          <div class="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
              Itenary
            </h1>
            <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-2xl">Day 01</h3>
            <ul class="list-disc">
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.00 pm - SGNP Borivali
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.30 pm - Oberoi Mall, Goregaon
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
            </ul>
          </div>
          <div class="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
              Things to Carry
            </h1>
            <ul class="list-disc">
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.00 pm - SGNP Borivali
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.30 pm - Oberoi Mall, Goregaon
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  10.40 pm - Andheri Hanuman Road
                </h3>
              </li>
            </ul>
          </div>
          <div class="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
              Cancellation Policy
            </h1>
            <ul class="list-disc">
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  75% refund if notified via phone conversation 8 or more days prior to the event
                  date.
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  50 % refund if notified via phone conversation 4 to 7 days prior to the event
                  date.
                </h3>
              </li>
              <li>
                {" "}
                <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                  No refund if the cancellation requested is less than 3 days prior to the event
                  date
                </h3>
              </li>
            </ul>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div class="mx-2 border-b border-gray-900">
              <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
                What we provide
              </h1>
              <ul class="list-disc">
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Transport by Private AC Bus from SGNP to SGNP Borivali
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Bf/Tea (Poha and Tea)
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Lunch (Basic village Daal, Rice, Bhakari, Sabji)
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Equipment and safety gears + Basic first aid kit
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Guide and Expertise Charges
                  </h3>
                </li>
              </ul>
            </div>
            <div class="mx-2 border-b border-gray-900">
              <h1 class="mb-3 text-3xl font-bold text-purple-800 md:leading-tight md:text-4xl">
                What we dont provide
              </h1>
              <ul class="list-disc">
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Personal Expenses any-kind
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Medical & Insurance
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Travel till pickup point
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Personal safety gears (Mask / Sanitizer / Tissues )
                  </h3>
                </li>
                <li>
                  {" "}
                  <h3 class="mb-3 text-xl  text-gray-900 md:leading-tight md:text-lg">
                    Anything which is not mentioned in inclusion
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
