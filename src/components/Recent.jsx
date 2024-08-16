import React from 'react'
import user from '../assets/images/user.png'

const Recent = () => {
  return (
    <section className='h-full box-border overflow-auto p-2'>
            <div className='flex box-border gap-2 items-center hover:bg-purple-100 p-2 rounded dark:hover:bg-slate-800'>
                <img className='w-6 h-6' src={user} alt="" />
                <div className='leading-5 dark:text-white'>
                    <p>co_M_yo</p>
                    <small className='text-gray-500'>Test Bot2do <mark className='bg-inherit dark:text-white'>: Support user</mark></small>
                </div>
            </div>

            <div className='flex gap-2 items-center hover:bg-purple-100 p-2 rounded dark:hover:bg-slate-800'>
                <img className='w-6 h-6' src={user} alt="" />
                <div className='leading-5 dark:text-white'>
                    <p>co_M_yo</p>
                    <small className='text-gray-500'>Test Bot2do <mark className='bg-inherit dark:text-white'>: Support user</mark></small>
                </div>
            </div>

            <div className='flex gap-2 items-center hover:bg-purple-100 p-2 rounded dark:hover:bg-slate-800'>
                <img className='w-6 h-6' src={user} alt="" />
                <div className='leading-5 dark:text-white'>
                    <p>co_M_yo</p>
                    <small className='text-gray-500'>Test Bot2do <mark className='bg-inherit dark:text-white'>: Support user</mark></small>
                </div>
            </div>   

    </section>
  )
}

export default Recent