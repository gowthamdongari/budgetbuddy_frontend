import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideNavBar from "../components/sidenavbar/SideNavBar";
import Footer from "../components/common/Footer";
import TopNavBar from "../components/topnavbar/TopNavBar";
import AddTransactionModal from "../components/Transaction/AddTransactionModal";

const Home = () => {
  const [openExpense, setOpenExpense] = useState(false);
  const handleExpenseState = () => {
    setOpenExpense((prev) => !prev);
  };
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
            <TopNavBar 
              handleExpenseState={handleExpenseState}
            />
            <div className="pt-5s mx-auto bg-navy-800/10 mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Outlet />
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
      <AddTransactionModal
        openExpense={openExpense}
        handleExpenseState={handleExpenseState}
      />
    </div>
  );
};

export default Home;
