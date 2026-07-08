import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='relative flex min-h-screen overflow-x-hidden bg-slate-100 lg:flex-row'>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Dashboard
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />
    </div>
  )
}

export default App
