import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
const createLeadState = (lead) => ({
  name: lead?.name || "",
  email: lead?.email || "",
  phone: lead?.phone || "",
  company:
    typeof lead?.company === "string"
      ? { name: lead.company }
      : lead?.company || { name: "" },
  source: lead?.source || "",
  status: lead?.status || "",
  notes: lead?.notes || "",
});

const Leadform = ({ leads, setLeads, selectedLead, setIsEditOpen, setSelectedLead, isModal = false }) => {
  const [name, setName] = useState(() => createLeadState(selectedLead).name)
  const [email, setEmail] = useState(() => createLeadState(selectedLead).email)
  const [phone, setPhone] = useState(() => createLeadState(selectedLead).phone)
  const [company, setCompany] = useState(() => createLeadState(selectedLead).company)
  const [source, setSource] = useState(() => createLeadState(selectedLead).source)
  const [status, setStatus] = useState(() => createLeadState(selectedLead).status)
  const [notes, setNotes] = useState(() => createLeadState(selectedLead).notes)




  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    const leadData = {
      name,
      email,
      phone,
      company: { name: company.name.trim() },
      source,
      status,
      notes,
    };

    const updatedLeads = selectedLead
      ? leads.map((lead) =>
          lead.id === selectedLead.id
            ? { ...lead, ...leadData }
            : lead
        )
      : [...leads, { id: Date.now(), ...leadData }];

    setLeads(updatedLeads);
    localStorage.setItem("Leads", JSON.stringify(updatedLeads));

    if (selectedLead) {
      setSelectedLead?.(null);
      setIsEditOpen?.(false);
    }


    setName("");
    setEmail("");
    setPhone("");
    setCompany({ name: "" });
    setSource("");
    setStatus("");
    setNotes("");
};

  const isEditing = Boolean(selectedLead);

  return (
    <div className={isModal ? "w-full bg-white p-3 sm:p-4" : "w-full max-w-auto rounded-lg bg-white p-4 shadow-lg sm:p-5"}>
      <h2 className="mb-1 text-xl font-bold text-gray-800">
        {isEditing ? "Edit Lead" : "Add New Lead"}
      </h2>

      <p className="mb-4 text-xs text-gray-500 sm:text-sm">
        {isEditing
          ? "Update the lead information below and save the changes."
          : "Fill in the details below to create a new lead."}
      </p>

      <form className="space-y-3" onSubmit={handleSubmit}>
      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lead Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter lead name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            value={company.name}
            onChange={(e) => setCompany({ ...company, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lead Source <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <option value="">Select Source</option>
            <option>Website</option>
            <option>Referral</option>
            <option>LinkedIn</option>
            <option>Other</option>
          </select>
        </div>

    
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lead Status <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Follow-up</option>
            <option>Converted</option>
            <option>Lost</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes <span className="text-gray-400">(Optional)</span>
          </label>
          <textarea
            rows="2"
            placeholder="Enter notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800"
        >
          <IoIosAddCircle className="text-xl" />
          <span className="font-semibold">{selectedLead ? "Update Lead" : "Add Lead"}</span>
        </button>
      </form>
    </div>
  );
};

export default Leadform;