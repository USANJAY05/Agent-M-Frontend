import React, { useState } from 'react'
import AgentMRight from './AgentMRight'
import SearchSection from './SearchSection'
import { CiSearch } from "react-icons/ci";
import Desktop1 from './Desktop1';
import Toast from './Toast';


const DesktopRight = ({name,showToast,setShowToast,input,setInput,search,setSearch}) => {
    const [rightSearch,setRightSearch]=useState(false)
    setTimeout(() => setShowToast(false), 5000); // Hide the toast after 5 seconds

  return (
    <section className=' w-full dark:bg-slate-950 flex'>
        <div className={!rightSearch?'px-2 py-1 absolute top-10 right-0 border rounded-l-xl':'hidden'} onClick={()=>setRightSearch(!rightSearch)}>
            <CiSearch className='text-xl dark:text-white' />
        </div>
        {/* <AgentMRight /> */}
        <Desktop1 input={input} setInput={setInput} />
        {rightSearch?<SearchSection rightSearch={rightSearch} setRightSearch={setRightSearch} search={search} setSearch={setSearch} />:""}
        {showToast && <Toast message={`Hi ${name}!`} />} 
        
    </section>
  )
}

export default DesktopRight