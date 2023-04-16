import React from "react";
import DashNav from "../components/lvl2components/DashNav";
import DashSearch from "../components/lvl2components/DashSearch";
import TabsRender from "../components/lvl2components/Tabs";
import Logout from "../components/lvl0components/Logout";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <Logout />
      <DashSearch />
      <TabsRender />
    </>
  );
};

export default Dashboard;
