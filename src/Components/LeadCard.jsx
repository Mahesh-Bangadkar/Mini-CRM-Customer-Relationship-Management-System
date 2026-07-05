import React from 'react'
import { HiUserGroup } from 'react-icons/hi'

const LeadCard = () => {
  return (
    <div>
      <div className="bg-white w-50 h-25 rounded-xl p-5 flex items-center">
         <HiUserGroup className="text-5xl bg-blue-400 text-white p-1  rounded m-2 " /> 
         <div className='flex flex-col m-2'>
            <h1 className='font-lg text-gray-600'>Total Leads</h1>
         <h1 className='font-semibold text-3xl text-gray-700' >10</h1>
         </div>
      </div>
    </div>
  )
}

export default LeadCard
