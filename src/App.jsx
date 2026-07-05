import React from 'react'
import Sidebar from './Components/Sidebar'
import Leadform from './Components/Leadform'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <div className='flex justify-between'>
      <Sidebar/>
      <Dashboard/>
      {/* <Leadform/> */}
    </div>
  )
}

export default App
