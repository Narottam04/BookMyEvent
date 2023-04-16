import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
import ongoingevent from "../Utils/ongoingevents";

const EventDetails = () => {
  const [showButton, setShowButton] = useState(false);
  const { state } = useLocation();
  const { id } = useParams();

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
      <div
        className={`w-full  bg-[url('.${ongoingevent[id]?.poster}')] bg-center bg-cover h-[32rem] mt-4`}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              {ongoingevent[id]?.title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`${showButton ? "block" : "hidden"} md:hidden`}>
        <button className="fixed bottom-2 w-full px-3 py-2 text-center text-md font-medium text-white uppercase transition-colors duration-200 transform bg-green-600 rounded-md lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-blue-500">
          Book now
        </button>
      </div>

      {/* <div className=" sticky top-32 z-50 flex border-b border-gray-900  bg-gray-200  overflow-y-scroll md-overflow-hidden">
        <div className="flex">
          <Link to="/">
            <h1 className="h-10 px-4 py-2 -mb-px text-md text-center hover:text-purple-700 border-b-2 border-gray-500 sm:text-base  whitespace-nowrap focus:outline-none">
              Home
            </h1>
          </Link>
          <MdArrowForwardIos className="mt-3" />
        </div>
        <div className="flex">
          <Link to="/upcomingtreks">
            <h1 className="h-10 px-4 py-2 -mb-px text-md text-center hover:text-purple-700 border-b-2 border-gray-500 sm:text-base  whitespace-nowrap focus:outline-none">
              Upcoming treks
            </h1>
          </Link>
          <MdArrowForwardIos className="mt-3" />
        </div>
        <div className="flex">
          <h1 className="h-10 px-4 py-2 -mb-px text-md text-center hover:text-purple-700 border-b-2 border-gray-500 sm:text-base  whitespace-nowrap focus:outline-none">
            Igatpuri
          </h1>
        </div>
      </div> */}

      <div className="md:flex mt-4">
        <div className="sticky top-44 max-w-lg mx-auto h-1/2  border rounded-lg hidden md:flex md:mx-14 ">
          <div className="p-4">
            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl ">
              {ongoingevent[id]?.title}
            </h1>
            <p className=" text-gray-500 mt-4">{ongoingevent[id]?.description}</p>
            {/* <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl ">Rs 999 </h2> */}
            {/* <ul className="mt-4 flex-1 space-y-4">
              <li className="text-gray-500 ">Best Price Gurantee</li>
              <li className="text-gray-500 ">100+ Happy Customers</li>
              <li className="text-gray-500 ">Instant Confirmation</li>
            </ul> */}
            <div className="pt-4 pb-6 mb-6  flex">
              <AiFillClockCircle className="pl-1 w-7 h-7 text-purple-500" />
              <h1 className="pr-2 text-lg px-2"> 2 Hours</h1>
              <AiOutlineCalendar className="pl-1 w-7 h-7 text-purple-500" />
              <h1 className="pr-2 text-lg px-2">{ongoingevent[id]?.start}</h1>
              <GoLocation className="pl-1 w-6 h-6 text-purple-500" />
              <h1 className="pr-2 text-lg">{ongoingevent[id]?.type}</h1>
            </div>
            <button className="w-full justify-end text-center h-14 px-3 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Register Now
            </button>
          </div>
        </div>
        <div className="w-[22rem]  mx-auto  mb-10 text-left md:w-4/5 lg:w-1/2">
          <div className="mx-2 pb-6 mb-6 border-b border-gray-900">
            <h1 className="headingFont mb-3 text-2xl font-bold text-purple-800 md:leading-tight md:text-5xl">
              {ongoingevent[id]?.title}
            </h1>
            <p className=" text-purple-600 text-2xl font-bold mb-4">
              {ongoingevent[id]?.type} | Open | {ongoingevent[id]?.seats}
            </p>
            {/* <div className="pt-4 pb-6 mb-6 border-b border-gray-900 flex">
              <AiFillClockCircle className="pl-1 w-7 h-7 text-purple-500" />
              <h1 className="pr-2 text-lg px-2"> 2 Hours</h1>
              <AiOutlineCalendar className="pl-1 w-7 h-7 text-purple-500" />
              <h1 className="pr-2 text-lg px-2">01-01-2023</h1>
              <GoLocation className="pl-1 w-6 h-6 text-purple-500" />
              <h1 className="pr-2 text-lg">Mumbai</h1>
            </div> */}
            <p className="text-xl">
              {ongoingevent[id]?.description}
              <br />
              <br />
              Join us for an exciting web event! Our upcoming virtual gathering promises to be
              informative and engaging. Tune in to hear from industry experts and thought leaders on
              the latest trends and developments in the field. Don't miss out on this opportunity to
              connect with like-minded individuals and expand your knowledge. Register now to secure
              your spot and be a part of this dynamic online community!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
