import React from 'react'
import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import './home.css'

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="body">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
