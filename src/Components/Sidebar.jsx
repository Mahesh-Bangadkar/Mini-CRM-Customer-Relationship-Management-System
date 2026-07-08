import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar overlay"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 -translate-x-full transform bg-gray-800 text-white shadow-2xl shadow-blue-900/30 transition-transform duration-300 ease-out lg:static lg:z-auto lg:w-48 lg:max-w-48 lg:translate-x-0 ${isOpen ? "translate-x-0" : ""}`}
      >
      <div className="flex flex-col items-center justify-center border-b border-white/10 px-3 py-3 lg:items-stretch">
        <div className="flex items-center justify-between gap-3 py-2 lg:justify-start">
          <BsPeopleFill
            style={{
              fontSize: "1.5rem",
              color: "white",
              backgroundColor: "blue",
              borderRadius: "20%",
              padding: "4px",
            }}
          />
          <h1 className="text-lg font-bold lg:text-base">MINI CRM</h1>

          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-1 text-sm lg:hidden"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      <nav className="px-2 py-2 lg:px-0">
        <ul className="flex flex-col gap-1.5 lg:gap-2.5">
        <li className="list-none">
        <button type="button" onClick={onClose} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-700 lg:rounded-none lg:py-2">
          <MdDashboard className="text-lg" /> <span>Dashboard</span>
        </button>
        </li>
        <li className="list-none">
        <button type="button" onClick={onClose} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-700 lg:rounded-none lg:py-2">
          <HiUserGroup className="text-lg" /> <span>Leads</span>
        </button>
        </li>
        <li className="list-none">
        <button type="button" onClick={onClose} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-700 lg:rounded-none lg:py-2">
          <TiContacts className="text-lg" /> <span>Contact</span>
        </button>
        </li>
        <li className="list-none">
        <button type="button" onClick={onClose} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-700 lg:rounded-none lg:py-2">
          <HiOutlineDocumentReport className="text-lg" /> <span>Reports</span>
        </button>
        </li>
        <li className="list-none">
        <button type="button" onClick={onClose} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-700 lg:rounded-none lg:py-2">
          <IoMdSettings className="text-lg" /> <span>Settings</span>
        </button>
        </li>
        </ul>
      </nav>
      </aside>
    </>
  );
};

export default Sidebar;
