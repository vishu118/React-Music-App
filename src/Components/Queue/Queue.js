import React from 'react'
import "./Queue.css"

const Queue = ({tracks,setcurrentIndex}) => {
  console.log(tracks)
  return (
    <div className="queue-container flex">
    <div className="queue flex">
      <p className="upNext">Up Next</p>
      <div className="queue-list">
      
      {
        tracks?(
          tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setcurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))
        ): console.log("NO")
      }
      </div>
    </div>
  </div>
  )
}

export default Queue