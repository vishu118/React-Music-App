import React, { useEffect, useState } from 'react'
import APIKit from "../../Spotify"
import "./Library.css"

const Library = () => {
const [playlist , setPlaylist] = useState(null)

useEffect(()=>{
  APIKit.get("me/playlists").then((res)=>{
    setPlaylist(res.data.items)
    console.log(res.data.items.images[0].url)
  })
}, [])

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlist?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
  
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library