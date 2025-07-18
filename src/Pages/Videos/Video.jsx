import React from 'react'
import './Video.css'
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recommendate from '../../Component/Recommended/Recommended.jsx'
const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recommendate />
    </div>
  )
}

export default Video
