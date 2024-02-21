import React from 'react'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'

function VideoContainer() {
  return (
    <div className='border-2 border-slate-950 relative'>
        <h1>VideoContainer</h1>
            <ButtonList/>
            <VideoCard/>

    </div>
  )
}

export default VideoContainer
