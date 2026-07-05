import React from "react";
import Leadform from "./Leadform";
import LeadCard from "./LeadCard";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full p-1 m-1 max-w-auto  ṃin-h-screen bg-green-400">
      <div id="Dashboard" className="w-full bg-white rounded-xl shadow-lg p-2">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-1 p-2 mb-1 ">
            <h2 className="text-2xl font-bold text-gray-800 ">Dashboard</h2>
            <p className="text-gray-500 text-sm">
              {" "}
              Welcome Back! Here's What's happening with your leads today
            </p>
          </div>
          <div className="w-3/12 flex justify-space-between space-x-11 gap-2 shadow rounded-lg p-2 items-center ">
            <div className="bg-white justify-around flex items-center w-8 shadow h-8 gap-2 rounded-full p-1">
              <IoMdNotifications className="text-xl " />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div className="bg-white justify-around flex items-center gap-2 w-8 h-8 rounded-full border-1 border-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover overflow-hidden zoom-effect position-relative"
                />
              </div>
              <button className="flex gap-2 items-center justify-center">
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-sm font-semibold text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]">
                    Jimmy johne
                  </h1>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>

                <div className="relative inline-block">
                  {/*Dropdown Button */}
                  <FaAngleDown
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setOpen(!open)}
                  />

                  {/* Dropdown Menu */}
                  {open && (
                    <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border z-50 overflow-hidden">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        Edit Profile
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                        Settings
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          id="leadrow"
          className="grid grid-cols-5 gap-2 w-full   bg-red-200 rounded-lg p-1"
        >
          <LeadCard />
          <LeadCard />
          <LeadCard />
          <LeadCard />
          <LeadCard />
        </div>
        <div className="flex gap-2  ">
          <div
            id="leadrow"
            className="grid grid-cols-3 gap-4 w-3/4 min-h-screen  bg-red-200 rounded-lg p-4 mt-4"
          ></div>
          <div id="leadform" className="shadow w-1/4 rounded-lg  mt-4">
            <Leadform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
