import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wrapper from './layout/Wrapper'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Wrapper/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App