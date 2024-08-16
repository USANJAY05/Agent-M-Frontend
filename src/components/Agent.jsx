import React from 'react'
import Priority from '../assets/icons/toDo.svg'
const Agent = ({right,setRight}) => {
  return (
    <div className='h-full flex flex-col overflow-auto'>
        <div className='flex flex-col overflow-auto px-3 h-full'>
            
            <div className={right==='Priority Action Items'?'bg-blue-500 flex p-2 justify-between rounded-md':'p-2 flex justify-between hover:bg-blue-500 border-inherit rounded-md'}>
                <button>Priority Action Items</button>
                <img src={Priority} alt="" />
            </div>
            <div className={right==='Substract'?'bg-blue-500 flex p-2 justify-between rounded-md':'p-2 flex justify-between hover:bg-blue-500 border-inherit rounded-md'}>
                <button>Substract</button>
            </div>
            <div className='p-2 flex justify-between hover:bg-blue-500 rounded-md'>
                <button>Today's edit checking</button>
            </div>
            <div className='p-2 flex justify-between hover:bg-blue-500 rounded-md'>
                <button>Next week's task</button>
            </div>
            <div className='p-2 flex justify-between hover:bg-blue-500 rounded-md'>
                <button>Today's Exception Handling</button>
            </div>
            <div className='p-2 flex justify-between hover:bg-blue-500 rounded-md'>
                <button>Pending documents</button>
            </div>
            {/* <div className='p-2 flex justify-between hover:bg-blue-500 rounded-md'>
                <button>Pending documents</button>
            </div>
            <div className='p-2 flex justify-between hover:bg-blue-500 rounded-md'>
                <button>Pending documents</button>
            </div> */}
        </div>
        <div className=' w-full text-center p-4'>
            <button className='bg-blue-500 py-3 rounded w-full hover:bg-blue-600'>Start a New Chart</button>
        </div>

    </div>
  )
}

export default Agent