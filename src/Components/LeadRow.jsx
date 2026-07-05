import { FaUserCircle, FaPen, FaTrash,} from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";



const leads = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    phone: "(555) 123-4567",
    company: "TechNova Inc.",
    source: "Website",
    status: "New",
  },
  {
    id: 2,
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    phone: "(555) 987-6543",
    company: "Bright Solutions",
    source: "Referral",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Kristin Watson",
    email: "kristin@example.com",
    phone: "(555) 456-7890",
    company: "Innovatech",
    source: "LinkedIn",
    status: "Follow-up",
  },
];

const statusColor = {
  New: "bg-blue-100 text-blue-600",
  Contacted: "bg-yellow-100 text-yellow-700",
  "Follow-up": "bg-orange-100 text-orange-600",
  Converted: "bg-green-100 text-green-600",
  Lost: "bg-red-100 text-red-600",
};

const sourceColor = {
  Website: "bg-blue-100 text-blue-600",
  Referral: "bg-green-100 text-green-600",
  LinkedIn: "bg-purple-100 text-purple-600",
};

export default function LeadRow() {
  return (
    <div className="bg-white rounded-xl mt-2 shadow overflow-hidden ">

      {/* Header */}
      <div className="grid grid-cols-8 items-center px-2 py-2 bg-white justify-between flex-2  font-semibold text-gray-600 border-b-1 border-gray-200">
        <p className="items-center justify-center text-justify flex-col flex">Lead Name</p>
        <p className="items-center justify-center text-justify flex-col flex">Email</p>
        <p className="items-center justify-center text-justify flex-col flex">Phone</p>
        <p className="items-center justify-center text-justify flex-col flex">Company</p>
        <p className="items-center justify-center text-justify flex-col flex">Source</p>
        <p className="items-center justify-center text-justify flex-col flex">Status</p>
        <p className="items-center justify-center text-justify flex-col flex w-40 ">Actions</p>
      </div>

      {/* Rows */}
      {leads.map((lead) => (
        <div
          key={lead.id}
          className="grid grid-cols-8 items-center px-2 py-4 border-b-1 border-gray-200 hover:bg-gray-50 transition"
        >
          {/* Profile */}
          <div className="flex items-center p-2">
            {/* <FaUserCircle className="text-4xl text-gray-400" /> */}
            <span className="font-semibold text-sm">{lead.name}</span>
          </div>

          <p className="text-gray-600 text-xs flex items-center justify-center text-justify flex-col  wrap-anywhere">
            {lead.email}
          </p>

          <p className="text-gray-600 text-xs justify-center  flex-col  wrap-anywhere flex mx-1 text-center   ">{lead.phone}</p>

          <p className="text-gray-600 text-xs p-2 text-center justify-center flex-col  wrap-anywhere flex ">{lead.company}</p>

          <span
            className={`w-fit px-3 py-1 text-xs  rounded-full text-center flex justify-center mx-3 font-medium ${
              sourceColor[lead.source]
            }`}
          >
            {lead.source}
          </span>

          <span
            className={`w-20 px-3 py-1 text-xs  rounded-full text-center flex justify-center mx-3 font-medium ${
              statusColor[lead.status]
            }`}
          >
            {lead.status}
          </span>

          <div className="col-span-2 flex justify-center gap-5">
            <button className="text-blue-500 hover:text-blue-700 flex justify-center items-center">
              <HiMiniPencilSquare className="text-lg" />
              Edit
            </button>
            <button className= "flex  justify-center items-center text-red-600 hover:text-red-700">
              <RiDeleteBinLine className="text-lg" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}