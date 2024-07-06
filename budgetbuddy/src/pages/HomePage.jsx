import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideNavBar from "../components/common/SideNavBar";
import Footer from "../components/common/Footer";
import TopNavBar from "../components/common/TopNavBar";

const Home = () => {
  return (
    <div className="flex h-full w-full">
      {/* Side Navbar */}
      <SideNavBar />
      <div className="h-full w-full">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          <div className="h-full">
            {/* TopNavBar */}
            <TopNavBar />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Outlet />
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
