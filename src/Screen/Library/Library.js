import React, { useEffect, useState } from 'react'
import APIKit from "../../Spotify"
import "./Library.css"
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const Library = () => {
const [playlist , setPlaylist] = useState(null)


useEffect(()=>{
  APIKit.get("me/playlists").then((res)=>{
    setPlaylist(res.data.items)
    console.log(res.data.items.images[0].url)
  })
}, [])

const navigate = useNavigate();

 const playPlayList = (id)=>{
  navigate("../Player", {state:{id:id}})
 }


  return (
    <div className="screen-container">
      <div className="library-body">
        {playlist?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick = {() => playPlayList(playlist.id)}
  
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <div className='info'>
            <div className='title'>
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
            </div>
           
            <div className="play-icon">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library