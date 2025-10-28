import React, { useRef } from 'react'
import './videoplayer.css'
import frezer2 from '../../assets/frezer2.mp4'
const VideoPlayer = ({playState,setPlayState}) => {
  
  const player = useRef(null)
  const closePlayer = (e)=>{
    if(e.target === player.current)
      setPlayState(false)
  }
  return (
    <div className= {`video-player ${playState ? "": "hide"}`}
    ref={player} onClick={closePlayer}
    >
        <video src ={frezer2} autoplay muted controls></video>
    </div>
  )
}

export default VideoPlayer