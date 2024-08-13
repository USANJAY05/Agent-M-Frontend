import React from 'react'
import agent from '../assets/icons/agent_po_headshot.png'
import sendBtn from '../assets/icons/sendBtn.svg'

const Desktop1 = () => {
  return (
    <section className='p-12 h-screen w-full flex flex-col items-center dark:bg-slate-950'>
        <div className='h-full'>
            <div className='flex gap-2'>
                <img src={agent} className='w-6 h-6' alt="" />
                <div className='leading-9'>
                    <h2 className='font-bold text-black text-xl dark:text-white'>Agent-M <mark className='text-gray-300 bg-inherit text-sm font-medium'>Just now</mark></h2>
                    <div className='dark:text-white'>
                        <p>Hi Test Bot2do! I'm Agent M, your new procurement assistant.</p>
                        <p>I'll be helping you stay on top of all your active purchase orders from suppliers.</p>
                        <p>Let's kick things off by confirming a few purchase orders together.</p>
                        <a className='text-lg text-blue-500 font-bold' href="">Start Confirming →</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full relative'>
            <input className='border w-full outline-none text-lg px-6 py-3 rounded dark:bg-inherit dark:text-white' placeholder='Your message here' type="text" />
            <button>
                <img src={sendBtn} alt="" className='absolute right-6 top-4' />
            </button>
        </div>
    </section>
  )
}

export default Desktop1