import React from 'react'
import DashNewsFeed from '../apis/newfeed'
import DashWeather from '../apis/weather'
import StockData from '../apis/stock'

const dashboard = () => {
  return (
    <div>
        <div className="max-w-3xl mx-auto my-8 p-6 bg-gray-100 shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Main Card</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DashNewsFeed/>
      <DashWeather />
      <StockData/>
    </div>
  </div>
    </div>
  )
}

export default dashboard