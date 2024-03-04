import { IoIosNotifications } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

import { GoScreenFull } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const HeaderNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button
        type="button"
        className="text-lg text-gray-900 font-semibold sidebar-toggle "
      >
        <FaBarsStaggered onClick={toggleSidebar} />
      </button>
      <div className="bg-[#ffffff] border border-[#F94563] rounded-md flex items-center justify-between ml-6">
        <input
          type="search"
          className="py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search"
        />
        <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      <button className="py-2 px-5 bg-[#F94563] rounded ml-4 text-white">
        <a href="./pos.html">POS</a>
      </button>

      <ul className="ml-auto flex items-center">
        <button>
          <IoIosNotifications />
        </button>
        <button>
          <GoScreenFull />
        </button>
        <li className="dropdown ml-3">
          <button type="button" className="dropdown-toggle flex items-center">
            <div className="flex-shrink-0 w-10 h-10 relative">
              <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                  alt=""
                />
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping" />
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full" />
              </div>
            </div>
            <div className="p-2 md:block text-left">
              <h2 className="text-sm font-semibold text-gray-800">
                Adnan Hassan
              </h2>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </button>
          <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
            <li>
              <a
                href="#"
                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
              >
                Settings
              </a>
            </li>
            <li>
              <form>
                <a className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer">
                  Log Out
                </a>
              </form>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
