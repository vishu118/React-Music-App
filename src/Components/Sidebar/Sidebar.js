import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarButtons from "./SidebarButtons";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../Spotify";

const Sidebar = () => {
  const [userImage, setUserImage] = useState(
    "https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
  );
  useEffect(() => {
    apiClient.get('me').then(response => setUserImage(response.data.images[0].url))
  }, []);
  return (
    <div className="sidebar-container">
      <img src={userImage} className="profile-image" alt="profile" />
      <div className="sidebarButton">
        <SidebarButtons title="feed" to="/Feed" icon={<MdSpaceDashboard />} />
        <SidebarButtons title="trending" to="/Trending" icon={<FaGripfire />} />
        <SidebarButtons title="player" to="/Player" icon={<FaPlay />} />
        <SidebarButtons
          title="favorites"
          to="/Favorites"
          icon={<MdFavorite />}
        />
        <SidebarButtons title="library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButtons title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
