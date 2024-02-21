import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'

const Body = () => {
  return (
    <div className='h-[100vh] p-4 flex border-2 border-slate-950'>
        <SideBar/>
        <VideoContainer/>
    </div>
  )
}

export default Body
