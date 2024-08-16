import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SearchSection = ({rightSearch,setRightSearch,search,setSearch}) => {
  return (
    <div className='h-full w-96 border-l p-3 pt-10 flex flex-col gap-5'>
      
        <div className='relative w-full'>
            <input 
              type="search" 
              className='outline-none border w-full text-lg pl-10 pr-1 py-2 bg-inherit dark:text-white' placeholder='Search by PO number or sup. ' 
              onChange={(e)=>setSearch(e.target.value)} 
              value={search}
            />
            <CiSearch className='text-3xl absolute top-2 left-1 dark:text-white' />
            <MdOutlineKeyboardArrowRight className='text-4xl absolute top-1 right-1 dark:text-white' onClick={()=>setRightSearch(!rightSearch)} />
        </div>

        <p className='text-white'>Opened threads and PO information will be displayed here. 
            Type in the PC number or supplier name on the above
            search bar to view results and select a PO you want to
            see information of
        </p>
    </div>
  )
}

export default SearchSection