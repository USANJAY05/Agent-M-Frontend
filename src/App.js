import React from 'react'
import Signup from './components/Signup'
import Main from './components/Main'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Desktop1 from './components/Desktop1'
import Desktop2 from './components/Desktop2'
import Missing from './components/Missing'
import { useState } from 'react'

const App = () => {
  const [input,setInput]=useState('')
  const [email,setEmail]=useState('')
  const [name,setName]=useState()
  const [picture,setPicture]=useState('')
  const [search,setSearch]=useState('')
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup name={name} email={email} setEmail={setEmail} setName={setName} setShowToast={setShowToast} setPicture={setPicture} />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/desktop1' element={<Desktop1 input={input} setInput={setInput} />}/>
        <Route path='/desktop2' element={<Desktop2 name={name} showToast={showToast} setShowToast={setShowToast} input={input} setInput={setInput} search={search} setSearch={setSearch} />}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
    </div>
  )
}

export default App