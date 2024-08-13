import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import Header from './Header';
import MainRight from './MainRight';
import MainLeft from './MainLeft';

const Main = () => {
  return (
    <main className='h-screen flex flex-col'>
        <Header />
        <section className='flex h-full'>
            <MainLeft />
            <MainRight />
        </section>
        
    </main>
  )
}

export default Main