import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiFilter3Line } from "react-icons/ri";

const Filter = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
     
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.8fr)]">
        <label className="relative block">
          <span className="mb-1.5 block text-xs font-medium text-slate-600">
            Search leads
          </span>
          <IoSearchSharp className="pointer-events-none absolute left-3 top-[2.45rem] text-lg text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or company"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-slate-600">
            Status
          </span>
          <select
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="follow-up">Follow-up</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
