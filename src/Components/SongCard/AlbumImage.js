import React from 'react'
import "./AlbumImage.css"

const AlbumImage = ({url}) => {
  return (
    <div className="albumImage flex">
    <img src={url} alt="album art" className="albumImage-art" />
    
  </div>
  )
}

export default AlbumImage