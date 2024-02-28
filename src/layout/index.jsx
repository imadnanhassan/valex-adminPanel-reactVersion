import HeaderNavbar from "../components/HeaderNav";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 w-full  bg-[#F7F7F7] min-h-screen transition-all main">
        <HeaderNavbar/>

        <Outlet />
      </main>
    </div>
  );
}
