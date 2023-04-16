import React, { useState } from "react";
import About from "../components/lvl2components/About";
import Contact from "../components/lvl2components/Contact";
import EventTypes from "../components/lvl2components/EventTypes";
import Footer from "../components/lvl2components/Footer";
import Navbar from "../components/lvl2components/Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <EventTypes />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
