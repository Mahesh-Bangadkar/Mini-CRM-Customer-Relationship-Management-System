import { useState, useMemo } from "react";
import React from 'react'
import Filter from './Filter'
import LeadRow from './LeadRow'

const Leads = ({ leads, handleDelete ,handleEdit}) => {


const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("");
  const filteredLeads = useMemo(() => {

    return leads.filter((lead) => {
    const companyName = typeof lead.company === "string" ? lead.company : lead.company?.name || "";

        const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      companyName.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "" ||
            lead.status.toLowerCase() === statusFilter.toLowerCase();

        return (
            matchesSearch &&
      matchesStatus
        );

    });

}, [leads, search, statusFilter]);
  return (
    <div className='w-full min-h-full rounded-lg bg-white p-2.5 shadow-lg sm:p-3'>
      <h2 className="text-lg font-semibold text-gray-800 mb-2 sm:text-xl">Leads</h2>
      <Filter
  search={search}
  setSearch={setSearch}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
/>
      <LeadRow leads={filteredLeads} handleDelete={handleDelete}  handleEdit={handleEdit}/>
    </div>
  )
}

export default Leads
