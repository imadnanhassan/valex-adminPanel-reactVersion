import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
