import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
const Leadform = ({ leads, setLeads }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState({ name: "" })
  const [source, setSource] = useState("")
  const [status, setStatus] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLead = {
        id: Date.now(),
        name,
        email,
        phone,
        company,
        source,
        status,
        notes,
    };

    setLeads([...leads, newLead]);

    setName("");
    setEmail("");
    setPhone("");
    setCompany({ name: "" });
    setSource("");
    setStatus("");
    setNotes("");
};

  return (
    <div className="w-full max-w-auto bg-white rounded-lg  min-h-full shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Lead
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lead Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter lead name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lead Source <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <option value="">Select Source</option>
            <option>Website</option>
            <option>Referral</option>
            <option>LinkedIn</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Cold Call</option>
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
            <option>Qualified</option>
            <option>Proposal Sent</option>
            <option>Won</option>
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 justify-center flex items-center text-white  rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
        >
          <IoIosAddCircle className="inline-block m-2 text-2xl" />
        <h1 >  Add Lead</h1>
        </button>
      </form>
    </div>
  );
};

export default Leadform;