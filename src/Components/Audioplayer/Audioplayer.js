import React from 'react'
import "./Audioplayer.css"
import Progrescircle from './Progrescircle'

const Audioplayer = ({currentTracks}) => {
  return (
    <div className='player-body flex'>
        <div className="playerLeft-body">
          <Progrescircle
          percentage={75}
          isPlaying={true}
          image={currentTracks?.album?.images[0]?.url}
          size={300}
          color="#C96850"

            />
        </div>
        <div className="playerRight-body"></div>
    </div>
  )
}

export default Audioplayer