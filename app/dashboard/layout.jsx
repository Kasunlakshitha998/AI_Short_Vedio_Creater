import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="hidden md:block fixed bg-white mt-[70px] h-screen">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-72 p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
