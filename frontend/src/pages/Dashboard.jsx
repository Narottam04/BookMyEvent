import React from "react";
import DashNav from "../components/lvl2components/DashNav";
import DashSearch from "../components/lvl2components/DashSearch";
import TabsRender from "../components/lvl2components/Tabs";


const Dashboard = () => {
  return (
    <>
    <DashNav/>
    <DashSearch/>
    <TabsRender/>
    </>
  );
};

export default Dashboard;
