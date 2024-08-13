import React from 'react'
import { Link } from 'react-router-dom'

const Left = () => {
  return (
    <section className='w-96 p-3 h-full flex flex-col border rounded-xl'>
      <div className='flex-1 flex justify-around'>
        <Link className='p-3 text-slate-400 font-bold hover:underline underline-offset-8 hover:text-blue-500'>Recents</Link>
        <Link className='p-3 text-slate-400 font-bold hover:underline underline-offset-8 hover:text-blue-500'>Agent M</Link>
      </div>
      <div className='flex-2 h-full flex items-center overflow-auto'>
        <p>No thread found, click below start new thread</p>
      </div>
      <div className='flex-1'>
        <button className='bg-purple-700 text-white w-full py-3 rounded-lg hover:bg-purple-800'>Start a new chat</button>
      </div>
    </section>
  )
}

export default Left