import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Profile from './Profile'

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? " hidden " : " block "}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div>
            <h1 className="text-2x text-white font-bold">My Dashboard</h1>
        </div>
        <hr/>
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                    Home
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to={"/profile"} className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                Profile
             </Link>
             {/* <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link> */}
            </li>
            {/* <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href='' className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                    Logout
                </a>
            </li> */}
        </ul>
    </div>   
  )
}

export default Sidebar