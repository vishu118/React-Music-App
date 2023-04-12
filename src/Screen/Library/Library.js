import React, { useEffect, useState } from 'react'
import APIKit from "../../Spotify"

const Library = () => {
const [playlist , setPlaylist] = useState(null)

useEffect(()=>{
  APIKit.get("me/playlists").then((res)=>{
    setPlaylist(res.data.items)
  })
}, [])

  return (
    <div className='screen-container'>
      {
        playlist?.map((playlist)=>
          <div>{playlist.name}</div>
        )
      }
    </div>
  )
}

export default Library