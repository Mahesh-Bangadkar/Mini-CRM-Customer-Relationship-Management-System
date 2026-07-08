import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const DashboardHeader = ({ open, onToggleOpen, onOpenSidebar }) => {
  return (
    <div className="flex items-start justify-between gap-2 px-1.5 py-1.5 sm:px-2">
      <div className="flex items-start gap-3">
        <button
          type="button"
          className="rounded-lg border border-gray-200 p-1.5 text-gray-700 lg:hidden"
          onClick={onOpenSidebar}
          aria-label="Open sidebar"
        >
          <HiOutlineMenuAlt3 className="text-xl" />
        </button>

        <div>
          <h2 className="text-lg font-bold sm:text-xl">Dashboard</h2>
          <p className="text-xs text-gray-500 sm:text-sm">Welcome Back!</p>
        </div>
      </div>

      <div className="flex items-center gap-2 p-0.5 sm:gap-4 sm:p-1">
        <IoMdNotifications className="text-xl" />

        <div className="relative">
          <button onClick={onToggleOpen} className="flex items-center gap-1.5 text-xs sm:text-sm">
            Jimmy Johne
            <FaAngleDown />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 rounded bg-white shadow">
              <button className="block w-full p-1.5 text-left text-sm hover:bg-gray-100">
                Edit Profile
              </button>
              <button className="block w-full p-1.5 text-left text-sm hover:bg-gray-100">
                Settings
              </button>
              <button className="block w-full p-1.5 text-left text-sm text-red-500 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;