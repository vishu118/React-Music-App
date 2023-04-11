import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/Library";
import Feeds from "../Feed/Feeds";
import Favorites from "../favorites/Favorites";
import Trending from "../Trending/Trending";
import Player from "../Player/Player";
import './Home.css'
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Auth/Login";

const Home = () => {
  return (
    <Router>
      <div className="MainBody">
      {/* <Sidebar/>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/Feed" element={<Feeds />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes> */}
        <Login/>
      </div>
    </Router>
  );
};

export default Home;
