import React, { useState } from 'react'
import Recent from './Recent';
import Agent from './Agent';

const DesktopLeft = ({right,setRight}) => {
    const [leftBox,setLeftBox]=useState('Agent')
  return (
    <div className='px-3 w-80 border-r h-full dark:bg-slate-950 dark:text-white relative'>
        <div className='flex justify-between text-xl p-4 pt-10 text-gray-300'>
            <button className={leftBox==='Recent'?'text-blue-400 underline underline-offset-8':'hover:underline hover:underline-offset-8 hover:text-blue-400'} onClick={()=>setLeftBox("Recent")}>Recent</button>
            <button className={leftBox==='Agent'?'text-blue-400 underline underline-offset-8':'hover:underline hover:underline-offset-8 hover:text-blue-400'} onClick={()=>setLeftBox("Agent")}>Agent M</button>
        </div>
        <div className='flex flex-col'>
            {leftBox==='Recent'?<Recent />:<Agent right={right} setRight={setRight} />}
        </div>
    </div>
  )
}

export default DesktopLeft