import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Filter = () => {
  return (
    <div className='w-full rounded-lg h-15 shadow-lg p-3 items-center flex gap-2 justify-between'>
      <input type="text" placeholder="Search leads..." className='border-1 border-gray-500 p-2 w-60 rounded-xl'/>
      <select className='border-1 border-gray-500 p-2 w-60 rounded-xl'>
        <option value="">Filter by status</option>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="qualified">Qualified</option>
        <option value="lost">Lost</option>
      </select>
      <select className='border border-gray-500 p-2   w-40 rounded-xl'> 
        <option value="" className='text-gray-500'>Filter by source</option>
        <option value="website">Website</option>
        <option value="referral">Referral</option>
        <option value="social_media">Social Media</option>

      </select>
    <button className='bg-blue-500 text-white p-2 rounded-xl flex gap-2 items-center'>
        <IoSearchSharp />Search      </button>    

    </div>
  )
}

export default Filter
