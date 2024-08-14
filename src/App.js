import React from 'react'
import Signup from './components/Signup'
import Main from './components/Main'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Desktop1 from './components/Desktop1'
import Desktop2 from './components/Desktop2'
import Missing from './components/Missing'
// import Output from './components/Output'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/desktop1' element={<Desktop1 />}/>
        <Route path='/desktop2' element={<Desktop2 />}/>
        <Route path='*' element={<Missing />}/>
        {/* <Route path='/' element={<Output />} /> */}
      </Routes>
    </div>
  )
}

export default App