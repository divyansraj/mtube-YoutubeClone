import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'
import { POPULAR_VIDEOS_API } from '../utils/constant';

function VideoContainer() {
  const [popVideos,setPopVideos] = useState([])

  useEffect(() => {
    getVideos();
  }, [] ) 

  const getVideos = async () => {
    const data = await fetch(POPULAR_VIDEOS_API);
    const json = await data.json();
    console.log(json.items)
    setPopVideos(json.items)
  } 
  return (
    <>
    {/* <ButtonList/> */}
    <div className='flex flex-row flex-wrap  '>
            
            {
              popVideos.map((video) => 
              <VideoCard 
              key={video.id} 
              url={video.id} 
              thumbnail={video?.snippet?.thumbnails?.maxres?.url}
              duration={video?.contentDetails?.duration}
              channelTitle={video?.snippet?.channelTitle}
              channelLink={video?.snippet?.channelId}
              descTitle={video?.snippet?.localized?.title}
              views={video?.statistics?.viewCount}
              likes={video?.statistics?.likeCount}
              publish={video?.snippet?.publishedAt}
              >
                
              </VideoCard>)
            }
            

    </div>
    </>
  )
}

export default VideoContainer
