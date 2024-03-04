import { useState } from "react";
import HeaderNavbar from "../components/HeaderNav";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <SideBar isOpen={isSidebarOpen} />
      <main
        className={`flex-1 w-full bg-[#F7F7F7] min-h-screen transition-all ${
          isSidebarOpen ? "ml-64" : ""
        }`}
      >
        <HeaderNavbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </main>
    </div>
  );
}
