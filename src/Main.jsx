import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

const Main = () => {
  return (
    <main className='w-full h-screen p-16 flex flex-col items-center  bg-slate-950 text-white flex flex-col justify-between'>

        <section className='p-6 px-11 overflow-auto'>
            <section className='flex flex-col leading-loose'>
                <h3 className='font-bold flex wrap items-center gap-2'><img className='w-6' src="https://imgs.search.brave.com/FlXynuyZEqoioqvkFHJUTERg914x6sm9BB5K64Q7nbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2MwNTEu/cG5n" alt="" />Agent M <small className='text-gray-600 text-xs'> Just now</small></h3>
                <p>
                <ul className='text-gray-300 leading-loose text px-6'>
                    <li> Hi Test Bot2do! I'm Agent M, your new procurement assistant.</li>
                    <li>I'll be helping you stay on top of all your active purchase orders from suppliers.</li>                            
                    <li>Let's kick things off by confirming a few purchase orders together.</li>
                </ul>
                </p>
                <div>
                    <button className='text-blue-400 px-6'>Start Confirming→</button>
                </div>
            </section>
        </section>
        
        <section className='sticky fixed top-12 w-2/4 '>
            <input className='w-full bg-slate-950 border border-gray-400 rounded p-2 px-4 outline-none' type="text" placeholder='Your message here' id="" />
            <RiSendPlaneFill className='absolute top-2 text-gray-400 text-2xl right-6' tabIndex={1} />
        </section>
        
    </main>
  )
}

export default Main