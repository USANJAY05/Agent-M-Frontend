import React, { useState } from 'react'
import DesktopLeft from './DesktopLeft'
import DesktopRight from './DesktopRight'

const Desktop2 = ({name,showToast,setShowToast,input,setInput,search,setSearch}) => {
    const [right,setRight]=useState('Priority Action Items')
  return (
    <section>
        <div className='h-screen flex'>
            <DesktopLeft right={right} setRight={setRight} />
            <DesktopRight name={name} showToast={showToast}  setShowToast={setShowToast} input={input} setInput={setInput} search={search} setSearch={setSearch}/>
        </div>
    </section>
  )
}

export default Desktop2