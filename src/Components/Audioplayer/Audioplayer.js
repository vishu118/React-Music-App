import React from 'react'
import "./Audioplayer.css"
import Progrescircle from './Progrescircle'

const Audioplayer = () => {
  return (
    <div className='player-body'>
        <div className="playerLeft-body">
          <Progrescircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"

            />
        </div>
        <div className="playerRight-body"></div>
    </div>
  )
}

export default Audioplayer