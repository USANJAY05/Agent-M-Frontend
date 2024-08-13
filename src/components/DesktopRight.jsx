import React, { useState } from 'react'
import AgentMRight from './AgentMRight'
import SearchSection from './SearchSection'
import { CiSearch } from "react-icons/ci";
import Desktop1 from './Desktop1';


const DesktopRight = () => {
    const [rightSearch,setRightSearch]=useState(false)
  return (
    <section className=' w-full dark:bg-slate-950 flex'>
        <div className={!rightSearch?'px-2 py-1 absolute top-10 right-0 border rounded-l-xl':'hidden'} onClick={()=>setRightSearch(!rightSearch)}>
            <CiSearch className='text-xl dark:text-white' />
        </div>
        {/* <AgentMRight /> */}
        <Desktop1 />
        {rightSearch?<SearchSection rightSearch={rightSearch} setRightSearch={setRightSearch} />:""}
    </section>
  )
}

export default DesktopRight