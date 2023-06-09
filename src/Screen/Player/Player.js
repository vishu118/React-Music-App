import React, { useEffect, useState } from 'react'
import "./Players.css"
import { useLocation } from 'react-router-dom'
import apiClient from "../../Spotify"
import Queue from '../../Components/Queue/Queue'
import SongCard from '../../Components/SongCard/SongCard'
import Audioplayer from '../../Components/Audioplayer/Audioplayer'




const Player = () => {
const location = useLocation();
const [ tracks,setTracks ] =useState('')
const [ currentTracks,setcurrentTracks ] =useState({})
const [ currentIndex,setcurrentIndex ] =useState(0);



useEffect(()=>{
if (location.state) {
apiClient
.get("playlists/" + location.state?.id+"/tracks")
.then(res=>{
  setTracks(res.data.items)
  setcurrentTracks(res.data.items[0].track)
}
  )
}
}, [location.state])

useEffect(() => {
  setcurrentTracks(tracks[currentIndex]?.track);
}, [currentIndex, tracks]);

  return (
    <div className='screen-container flex'>
      <div className="left-playerbody">
        <Audioplayer currentTracks={currentTracks}/>
      </div>
      <div className="right-playerbody">
        <SongCard Album={currentTracks?.album}/>
        <Queue tracks={tracks} setcurrentIndex={setcurrentIndex}/>
      </div>
    </div>
  )
}

export default Player