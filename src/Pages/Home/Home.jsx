import React from 'react'
import './Home.css'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Feed from '../../Component/Feed/Feed'
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar thesidebar={sidebar}/>
      <div className={`container ${sidebar?"":"Large-container"}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
