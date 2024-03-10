import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'
import Watchpage from './WatchPage,'

const Body = () => {
  return (
    <div className='h-[100vh] p-4 flex '>
        <SideBar/>
        {/* <VideoContainer/>
        <Watchpage/> */}
        <Outlet/>
    </div>
  )
}

export default Body
