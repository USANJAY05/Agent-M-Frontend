import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='grid grid-cols-2 h-screen'>
        <section className='flex items-center justify-center bg-gray-200'>
            <img src="./a.svg" alt=""/>
        </section>
        <form className='bg-slate-950 flex flex-col items-center gap-16 pt-20  dark:text-white'>
            <h1 className='text-3xl'>Agent-M</h1>
            <div className='w-96 p-8 border border-slate-800 rounded flex flex-col gap-10'>
                <h2 className='text-2xl text-center'>Login</h2>
                <div className='w-full flex flex-col gap-6'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input className='px-2 p-1 rounded border border-slate-800 outline-none dark:bg-slate-950' placeholder='abc@example.com' id='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password">Password</label>
                        <input className='px-2 p-1 rounded border border-slate-800 outline-none dark:bg-slate-950' placeholder='password' id='password' />
                    </div>
                    
                    <input className='p-1 bg-blue-500 rounded hover:bg-blue-600' type="submit" value="Login" />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-4'><hr className='w-full border-slate-700' /> or <hr className='w-full border-slate-700' /></div>
                    <div className='flex justify-center gap-8'>
                        <a href=""><img className='w-8' src="https://imgs.search.brave.com/Nv4129r-xJgP8ve9P-rlAy7BHaff8OoRyN1D5jdCcVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9nb29nbGUt/aWNvbi0yNTZ4MjU2/LWhxeGh1N2o3LnBu/Zw" alt="" /></a>
                        <a href=""> <img className='w-8' src="https://imgs.search.brave.com/lZtSHU0xcSaZfNN6zHo9A4aLmiNBnFIEpmjesp6VYeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWljcm9zb2Z0/L21pY3Jvc29mdF9Q/TkcxMy5wbmc" alt="" /></a>
                    </div>
                    <small className='text-center'>Already have an account? <Link to={'/'} className='underline' href="">Sign Up</Link></small>
                </div>
            </div>
        </form>

    </section>
  )
}

export default Login