import React from 'react'
import "./SongCard.css"

const SongCard = () => {
  return (
    <div className='songCard-body flex'>
         <AlbumImage url={album?.images[0]?.url} />
         <AlbumInfo album={album} />
    </div>
  )
}

export default SongCard