import React from "react";
import { Link } from "react-router-dom";

import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineBusinessCenter, MdOutlineWatchLater, MdTravelExplore } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineSearch,
  AiFillQuestionCircle
} from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { useAuth } from "../../context/AuthContext";

import logo from "/logo-black.png";
import Logout from "../lvl0components/Logout";

const Sidebar = ({ openSidebar, active }) => {
  // const { currentUser } = useAuth();

  return (
    <aside
      className={`sidebar w-64 md:shadow transform ${
        openSidebar ? "translate-x-0" : "-translate-x-full "
      }   lg:translate-x-0 transition-transform duration-150 ease-in fixed top-0 left-0 h-[100vh] border-r-2 border-white`}
    >
      <div className="sidebar-header flex items-center ">
        <Link to="/app" className="inline-flex flex-row items-center">
          <img src={logo} alt="cryptocademy logo" />
        </Link>
      </div>
      <div className="sidebar-content px-4 ">
        <ul className="flex flex-col w-full">
          <li>
            <Link
              className={`block ${
                active === "search" ? "bg-blue-800 text-white" : ""
              } text-gray-600 lg:hover:bg-gray-50 lg:p-2.5`}
              to="/"
            >
              Participants
            </Link>
          </li>
          <li>
            <Link
              className={`block ${
                active === "search" ? "bg-blue-800 text-white" : ""
              } text-gray-600 lg:hover:bg-gray-50 lg:p-2.5`}
              to="/app/events"
            >
              Events
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
