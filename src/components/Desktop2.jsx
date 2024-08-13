import React, { useState } from 'react'
import DesktopLeft from './DesktopLeft'
import DesktopRight from './DesktopRight'

const Desktop2 = () => {
    const [right,setRight]=useState('Priority Action Items')
  return (
    <section>
        <div className='h-screen flex'>
            <DesktopLeft right={right} setRight={setRight} />
            <DesktopRight />
        </div>
    </section>
  )
}

export default Desktop2