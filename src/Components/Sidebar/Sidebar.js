import React from 'react'
import './Sidebar.css'
import Sidebar_Buttons from './Sidebar_Buttons'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <img src='https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg' className='profile-image' alt='profile'/>
      <div className="sidebarButton">
        <Sidebar_Buttons title = ""  to = "" icon = {''} />
        <Sidebar_Buttons/>
        <Sidebar_Buttons/>
        <Sidebar_Buttons/>
        <Sidebar_Buttons/>
        <Sidebar_Buttons/>
      </div>
      <Sidebar_Buttons/>
    </div>
  )
}

export default Sidebar