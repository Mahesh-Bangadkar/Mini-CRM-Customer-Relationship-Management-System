import React from 'react'
import Filter from './Filter'
import LeadRow from './LeadRow'

const Leads = ({ leads }) => {
  return (
    <div className='w-full bg-white rounded-lg gap-2  min-h-full shadow-lg p-3'>
      <h2 className="text-xl font-semibold text-gray-800 ">Leads</h2>
      <Filter />
      <LeadRow leads={leads}/>
    </div>
  )
}

export default Leads
