import React,{useState} from 'react'
import DashNewsFeed from '../apis/newfeed'
import DashWeather from '../apis/weather'
import StockData from '../apis/stock'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navbar 
      sidebarToggle={sidebarToggle} 
      setSidebarToggle={setSidebarToggle} />
      {/* <Sidebar sidebarToggle={sidebarToggle}/>
      <Navbar/> */}
      {/* <DashNewsFeed/>
      <DashWeather />
      <StockData/> */}
    </div>
  )
}

export default Dashboard