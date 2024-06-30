import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Dashboard from './dashboard'

const Showcase = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='flex'>
        <Sidebar sidebarToggle={sidebarToggle} />
        <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    </div>
  )
}

export default Showcase