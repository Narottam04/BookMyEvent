import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router";

import Sidebar from "../lvl1components/Sidebar";

import { Suspense } from "react";

import TabNavigation from "../lvl1components/TabNavigation";
import Loader from "../lvl0components/Loader";

const SidebarLayout = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <div className=" ">
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen  text-gray-800 md:overflow-x-hidden">
        <Sidebar active={currentLocation?.slice(5) === "" ? `home` : currentLocation?.slice(5)} />
        {/* page transitions */}
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 "
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default SidebarLayout;
