import React from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Links from "./Links";
import SidebarCard from "./SidebarCard";
import routes from "../../routes/routes";

function SideNavBar() {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-blue-500 pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      {/* <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span> */}
      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Budget <span className="font-medium">Buddy</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"/>
        {/* Side NavBar Items */}

        <ul className="mb-auto pt-1">
          <Links routes={routes}/>
        </ul>
        {/* Free Horizon Card */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>

      {/* Nav item end */}
      </div>
  );
}

export default SideNavBar;
