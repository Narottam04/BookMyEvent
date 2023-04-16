import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
// import SidebarLayout from "./lvl2components/SidebarLayout";
import MainPage from "../pages/MainPage";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence mode={"wait"}>
      <Routes location={location} key={location.pathname}>
       <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
