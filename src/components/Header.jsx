import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiExportFill } from "react-icons/pi";



const Header = () => {
  return (
    <header className='flex py-4 px-2 justify-between items-center border border-solid'>
        <h1 className='text-2xl font-bold'>Agent-M</h1>
        <ul className='flex gap-5'>
            <li><Link className='flex items-center gap-1 hover:text-purple-500'> <AiFillThunderbolt />Set up automation</Link></li>
            <li><Link className='flex items-center gap-1 hover:text-purple-500'><FaPhoneAlt /> Book a call</Link></li>
            <li><Link className='flex items-center gap-1 hover:text-purple-500'><PiExportFill /> Export data</Link></li>
        </ul>
    </header>
  )
}

export default Header