import React from 'react'
import "./Progresscircle.css"
const Circle = ({color,percentage,size,strokeWidth})=>{
  const radius = size/2 - 10;
  const circ = ((2*Math.PI * r) - 20)
  const strokePct = ((100 - Math.round(percentage) * circ))/100;
  return (
    <Circle 
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    />
  )
}

const Progrescircle = ({percentage,isPlaying,size,color,image}) => {

  return (
    <div>

    </div>
  )
}

export default Progrescircle