import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineFiberNew } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import LeadCard from "./LeadCard";

const DashboardStats = ({ leads }) => {
  const totalLeads = leads.length;
  const newLeads = leads.filter((lead) => (lead.status || "New").toLowerCase() === "new").length;
  const contactedLeads = leads.filter((lead) => (lead.status || "").toLowerCase() === "contacted").length;
  const followUpLeads = leads.filter((lead) => (lead.status || "").toLowerCase() === "follow-up").length;
  const convertedLeads = leads.filter((lead) => (lead.status || "").toLowerCase() === "converted").length;
  const lostLeads = leads.filter((lead) => (lead.status || "").toLowerCase() === "lost").length;

  const cards = [
    { title: "Total Leads", value: totalLeads, Icon: HiUserGroup, iconClassName: "bg-blue-400 text-white" },
    { title: "New Leads", value: newLeads, Icon: MdOutlineFiberNew, iconClassName: "bg-emerald-500 text-white" },
    { title: "Contacted", value: contactedLeads, Icon: IoChatbubblesOutline, iconClassName: "bg-amber-500 text-white" },
    { title: "Follow-up", value: followUpLeads, Icon: FiTrendingUp, iconClassName: "bg-violet-500 text-white" },
    { title: "Converted", value: convertedLeads, Icon: FiTrendingUp, iconClassName: "bg-cyan-500 text-white" },
    { title: "Lost", value: lostLeads, Icon: RiCloseCircleLine, iconClassName: "bg-rose-500 text-white" },
  ];

  return (
    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-6">
      {cards.map((card) => (
        <LeadCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default DashboardStats;