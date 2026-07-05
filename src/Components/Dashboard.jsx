import React from 'react'
import Leadform from './Leadform'
import LeadCard from './LeadCard'

const Dashboard = () => {
  return (
    <div className='flex w-full p-2 m-1 max-w-auto  ṃin-h-screen bg-green-400' >
     <div id='Dashboard' className='w-full bg-white rounded-xl shadow-lg p-6'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Dashboard</h2>
      <div id='leadrow' className='grid grid-cols-5 gap-10  w-full   bg-red-200 rounded-lg p-1'>
        <LeadCard/>
        <LeadCard/>
        <LeadCard/>
        <LeadCard/>
        <LeadCard/>
        

      </div>
     <div className='flex gap-2  '>
         <div id='leadrow' className='grid grid-cols-3 gap-4 w-3/4 min-h-screen  bg-red-200 rounded-lg p-4 mt-4'>
        
      </div>
      <div id='leadform' className='shadow w-1/4 rounded-lg  mt-4'>
      <Leadform/></div>
    
    </div>
     </div>
    </div>
  )
}

export default Dashboard
