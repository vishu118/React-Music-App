import React from 'react'
import "./SongCard.css"
import AlbumInfo from './AlbumInfo'
import AlbumImage from './AlbumImage'

const SongCard = ({Album}) => {
    
  return (
    <div className='songCard-body flex'>
         <AlbumImage url={Album?.images[0]?.url} />
         <AlbumInfo Album={Album} />
    </div>
  )
}

export default SongCard