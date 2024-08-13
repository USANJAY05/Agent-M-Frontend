import React from 'react'
import agentPO from '../assets/icons/agent_po_headshot.png'
import ChatSendIcon from '../assets/icons/chat-send-icon.jsx'

const MainRight = () => {
  return (
    <section className='p-4 h-full border border-2xl border-rounded w-full flex flex-col rounded-xl'>
        <div className='h-full flex flex-col items-center gap-8 overflow-auto'>
            <div className='flex flex-col items-center gap-4 mt-12'>
                <h2 className='font-bold text-gray-400 text-xl'>Looking for answers? Ask Agent PO</h2>
                <img src={agentPO} className='w-12' alt="" />
                <h3 className='font-bold text-sm text-gray-400'>Purchase Orders</h3>
            </div>
            <div>
                <ul className='flex flex-col gap-4'>
                    <li className='border rounded-lg px-2 py-1'>What do i need to do today?</li>
                    <li className='border rounded-lg px-2 py-1'>Which orders will arive in next week?</li>
                    <li className='border rounded-lg px-2 py-1'>Which documents are pending?</li>
                </ul>
            </div>

        </div>
        <form className='relative'>
            <input type="text" className='w-full text-lg px-6 py-3 rounded-lg border outline-none' placeholder='Your message here' />
            <button className="absolute top-3 right-5">
                <ChatSendIcon />
            </button>
        </form>

    </section>
  )
}

export default MainRight