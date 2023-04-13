import React, { useEffect } from 'react'
import "./Players.css"
import { useLocation } from 'react-router-dom'


const Player = () => {
const location = useLocation();
console.log(location)

useEffect(()=>{
if(location.state){
apiClient.get('play')
}
}, [])
  return (
    <div className='screen-container'>
      <div className="left-playerbody"></div>
      <div className="right-playerbody"></div>
    </div>
  )
}

export default Player