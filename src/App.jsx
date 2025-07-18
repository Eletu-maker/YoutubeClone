import React, { useState } from 'react'
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Videos from './Pages/Videos/Video'

function App() {

  const [sidebarClick,setSidebarClick]= useState(true)

  return (
    <div>
       <Navbar setSidebar={setSidebarClick}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebarClick}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Videos/>} />
      </Routes>
      
     </div>
  )
}

export default App
