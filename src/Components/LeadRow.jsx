
import { FaUserCircle, FaPen, FaTrash,} from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";

export default function LeadRow({ leads, handleDelete,handleEdit }) {
  
  return (
    <div className="mt-2 overflow-hidden rounded-xl bg-white shadow">

      <div className="space-y-2.5 md:hidden">
        {leads.map((lead) => (
          <div key={lead.id} className="rounded-xl border border-gray-200 p-3 shadow-sm">
            <div className="flex items-start justify-between gap-2.5">
              <div>
                <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                <p className="mt-1 text-xs text-gray-500">{lead.company?.name || lead.company || ""}</p>
              </div>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                {lead.status || "New"}
              </span>
            </div>

            <div className="mt-2.5 space-y-1.5 text-sm text-gray-600">
              <p className="break-all">{lead.email}</p>
              <p>{lead.phone}</p>
              <p>{lead.source || "Website"}</p>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-600"
                onClick={() => handleEdit(lead)}
              >
                <HiMiniPencilSquare className="text-base" />
                Edit
              </button>

              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600"
                onClick={() => handleDelete(lead.id)}
              >
                <RiDeleteBinLine className="text-base" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="hidden grid-cols-8 items-center border-b border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-600 md:grid">
        <p className="items-center justify-center text-justify flex-col flex">Lead Name</p>
        <p className="items-center justify-center text-justify flex-col flex">Email</p>
        <p className="items-center justify-center text-justify flex-col flex">Phone</p>
        <p className="items-center justify-center text-justify flex-col flex">Company</p>
        <p className="items-center justify-center text-justify flex-col flex">Source</p>
        <p className="items-center justify-center text-justify flex-col flex">Status</p>
        <p className="items-center justify-center text-justify flex-col flex w-40 ">Actions</p>
      </div>

      {/* Rows */}
      <div className="hidden md:block">
      {leads.map((lead) => (
        <div
          key={lead.id}
          className="grid grid-cols-8 items-center border-b border-gray-200 px-2 py-3 transition hover:bg-gray-50"
        >
          {/* Profile */}
          <div className="flex items-center p-2">
            {/* <FaUserCircle className="text-4xl text-gray-400" /> */}
            <span className="text-sm font-semibold">{lead.name}</span>
          </div>

          <p className="flex items-center justify-center text-justify text-xs text-gray-600 flex-col wrap-anywhere">
            {lead.email}
          </p>

          <p className="mx-1 flex flex-col justify-center text-center text-xs text-gray-600 wrap-anywhere">{lead.phone}</p>

          <p className="flex flex-col justify-center p-1.5 text-center text-xs text-gray-600 wrap-anywhere">{lead.company?.name || lead.company || ""}</p>

          <span
            className={`mx-2 flex w-fit justify-center rounded-full px-2.5 py-1 text-[11px] font-medium text-center `}
          >
        {lead.source || "Website"}
          </span>
          

          <span
            className={`mx-2 flex w-20 justify-center rounded-full px-2.5 py-1 text-[11px] font-medium text-center  `}
          >
        {lead.status || "New"}
          </span>

          <div className="col-span-2 flex justify-center gap-3 text-sm">
            <button className="flex items-center justify-center text-blue-500 hover:text-blue-700"
            onClick={()=>{
              handleEdit(lead)
            }}
            >
              <HiMiniPencilSquare className="text-base" />
              Edit
            </button>
            <button className= "flex items-center justify-center text-red-600 hover:text-red-700"  onClick={()=>{
                handleDelete(lead.id)
              }}>
              <RiDeleteBinLine className="text-base"/> Delete
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}