import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/Library";
import Feeds from "../Feed/Feeds";
import Favorites from "../favorites/Favorites";
import Trending from "../Trending/Trending";
import Player from "../Player/Player";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Auth/Login";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
    } else {
      setToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="MainBody">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/Feed" element={<Feeds />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
