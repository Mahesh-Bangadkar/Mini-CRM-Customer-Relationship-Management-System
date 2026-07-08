import React, { useEffect, useState } from "react";
import axios from "axios";
import Leadform from "./Leadform";
import Leads from "./Leads";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import EditLeadModal from "./EditLeadModal";

const normalizeLead = (lead) => ({
  ...lead,
  company:
    typeof lead.company === "string"
      ? { name: lead.company }
      : lead.company || { name: "" },
});

const getStoredLeads = () => {
  try {
    const savedLeads = localStorage.getItem("Leads");

    return savedLeads ? JSON.parse(savedLeads).map(normalizeLead) : [];
  } catch {
    return [];
  }
};

const Dashboard = ({ onOpenSidebar }) => {
 

  const [leads, setLeads] = useState(getStoredLeads);
  const [open, setOpen] = useState(false);

  // Edit Modal
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  // =======================
  // FETCH DATA
  // =======================

  const fetchLeads = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const formattedData = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: { name: user.company.name },
        source: "Website",
        status: "New",
        notes: "",
      }));

      setLeads(formattedData);

      localStorage.setItem(
        "Leads",
        JSON.stringify(formattedData)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("Leads") === null) {
      const timerId = window.setTimeout(() => {
        void fetchLeads();
      }, 0);

      return () => window.clearTimeout(timerId);
    }
  }, []);

  // =======================
  // DELETE
  // =======================

  const handleDelete = (id) => {
    const updatedLeads = leads.filter(
      (lead) => lead.id !== id
    );

    setLeads(updatedLeads);

    localStorage.setItem(
      "Leads",
      JSON.stringify(updatedLeads)
    );
  };

  // =======================
  // EDIT
  // =======================

  const handleEdit = (lead) => {
    setSelectedLead(lead);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className="w-full p-2 sm:p-3 lg:flex-1">
      <div className="w-full rounded-xl bg-white p-2.5 shadow-lg sm:p-3">
        <DashboardHeader
          open={open}
          onToggleOpen={() => setOpen(!open)}
          onOpenSidebar={onOpenSidebar}
        />

        <DashboardStats leads={leads} />

        {/* Table + Form */}

        <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_300px]">

          <div className="min-w-0">

            <Leads
              leads={leads}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />

          </div>

          <div className="min-w-0 xl:sticky xl:top-3 xl:self-start">

            <Leadform
              leads={leads}
              setLeads={setLeads}
            />

          </div>

        </div>

        {/* ===================== */}
        {/* EDIT MODAL */}
        {/* ===================== */}

        <EditLeadModal isOpen={isEditOpen} onClose={handleCloseEdit}>
          <Leadform
            key={selectedLead?.id ?? "edit-lead"}
            leads={leads}
            setLeads={setLeads}
            selectedLead={selectedLead}
            setIsEditOpen={setIsEditOpen}
            setSelectedLead={setSelectedLead}
            isModal
          />
        </EditLeadModal>

      </div>
    </div>
  );
};

export default Dashboard;