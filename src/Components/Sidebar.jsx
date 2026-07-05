import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-50 max-w-50 bg-gray-800 text-white  shadow-2xl shadow-blue-900/30 ">
      <div className="flex item-center flex-col justify-center ">
        <div className="flex items-center justify-center py-4">
          <BsPeopleFill
            style={{
              fontSize: "2rem",
              color: "white",
              backgroundColor: "blue",
              borderRadius: "20%",
              padding: "5px",
            }}
          />
          <h1 className="text-xl font-bold pl-3">MINI CRM</h1>
        </div>
        {/* <p className='text-sm text-gray-400 text-left pl-7'>Customer Relationship Management System</p> */}
      </div>

      <li className="list-none flex flex-col gap-4 mt-4">
        <button className="w-full text-left py-2 px-4 flex items-center gap-2 hover:bg-blue-700">
          <MdDashboard className="text-xl" /> <span>Dashboard</span>
        </button>
        <button className="w-full text-left py-2 px-4 flex items-center gap-2 hover:bg-blue-700">
          <HiUserGroup className="text-xl" /> <span>Leads</span>
        </button>
        <button className="w-full text-left py-2 px-4 flex items-center gap-2 hover:bg-blue-700">
          <TiContacts className="text-xl" /> <span>Contact</span>
        </button>
        <button className="w-full text-left py-2 px-4 flex items-center gap-2 hover:bg-blue-700">
          <HiOutlineDocumentReport className="text-xl" /> <span>Reports</span>
        </button>
        <button className="w-full text-left py-2 px-4 flex items-center gap-2 hover:bg-blue-700">
          <IoMdSettings className="text-xl" /> <span>Settings</span>
        </button>
      </li>
    </div>
  );
};

export default Sidebar;
