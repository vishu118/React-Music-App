import React, { useEffect, useState } from 'react'
import "./Players.css"
import { useLocation } from 'react-router-dom'
import apiClient from "../../Spotify"


const Player = () => {
const location = useLocation();
const [ tracks,setTracks ] =useState('')
const [ currentTracks,setcurrentTracks ] =useState({})
const [ currentIndex,setcurrentIndex ] =useState(0);



useEffect(()=>{
if(location.state){
apiClient.get("playlists/" + location.state?.id+"/tracks")
.then(res=>{
  setTracks(res.data.items)
  setcurrentTracks(res.data.items[0].track)
}
  )
}
}, [location.state])
  return (
    <div className='screen-container'>
      <div className="left-playerbody">

      </div>
      <div className="right-playerbody">
        <SongCard/>
        <Queue/>
      </div>
    </div>
  )
}

export default Player