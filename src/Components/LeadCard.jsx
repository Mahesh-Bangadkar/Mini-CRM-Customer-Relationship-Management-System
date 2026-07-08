import React from 'react'

const LeadCard = ({ title, value, Icon, iconClassName = "bg-blue-400 text-white" }) => {
  const IconComponent = Icon;

  return (
    <div className="rounded-xl bg-white p-3 shadow">
      <div className="flex items-center gap-3">
        <IconComponent className={`rounded p-1.5 text-3xl ${iconClassName}`} /> 
        <div className='flex flex-col'>
          <h1 className='text-sm font-medium text-gray-600'>{title}</h1>
          <h1 className='text-2xl font-semibold text-gray-700'>{value}</h1>
        </div>
      </div>
    </div>
  )
}

export default LeadCard
