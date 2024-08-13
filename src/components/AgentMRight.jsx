import React from 'react'
import agentPo from '../assets/icons/agent_po_headshot.png'

const RecentRight = () => {
  return (
    <>
        <div className='flex flex-col gap-4 items-center p-12'>
            <div className='flex gap-5'>
                <img src={agentPo} className='w-8 h-8' alt="" />
                <div className='leading-7'>
                    <h2 className='text-xl font-bold dark:text-white'>Agent Po</h2>
                    <p className='dark:text-white'>Hi Test Bot2do, here's a summary of the action items I need your help with today. Which category would you like to get started with?</p>
                </div>
            </div>

            <div className='w-full flex justify-evenly'>
                <div className='w-1/4 px-3 py-5 border rounded-xl flex flex-col gap-1 border-red-600'>
                    <div className='flex justify-between'>
                        <hr className='w-8 border-2 rounded border-red-600' />
                        <p className='text-red-600'>-&gt;</p>
                    </div>
                    <div className='font-bold dark:text-white'>0</div>
                    <div>
                        <p className='dark:text-gray-200'>Priority tasks</p>
                    </div>
                </div>

                <div className='w-1/4 px-3 py-5 border rounded-xl flex flex-col gap-1 border-yellow-400'>
                    <div className='flex justify-between'>
                        <hr className='w-8 border-2 rounded border-yellow-400' />
                        <p className='text-yellow-400'>-&gt;</p>
                    </div>
                    <div className='font-bold dark:text-white'>0</div>
                    <div>
                        <p className='dark:text-gray-200'>Priority tasks</p>
                    </div>
                </div>

                <div className='w-1/4 px-3 py-5 border rounded-xl flex flex-col gap-1 border-green-600'>
                    <div className='flex justify-between'>
                        <hr className='w-8 border-2 rounded border-green-600' />
                        <p className='text-green-600'>-&gt;</p>
                    </div>
                    <div className='font-bold dark:text-white'>0</div>
                    <div>
                        <p className='dark:text-gray-200'>Priority tasks</p>
                    </div>
                </div>

            </div>



        </div>
    </>
  )
}

export default RecentRight