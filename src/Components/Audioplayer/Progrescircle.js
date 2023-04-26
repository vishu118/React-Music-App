import React from 'react'
import "./Progresscircle.css"
const Circle = ({color,percentage,size,strokeWidth})=>{
  const radius = size/2 - 10;
  const circ = ((2*Math.PI * radius) - 20)
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
    <div className="progress-circle flex">
    <svg width={size} height={size}>
    <g>
      <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size}  />
      <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
          />
    </g>

    <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>

    </svg>

    </div>
  )
}

export default Progrescircle