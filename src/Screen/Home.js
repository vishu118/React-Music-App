import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Library from './Library'
import Feeds from './Feeds'
import Favorites from './Favorites'
import Trending from './Trending'
import Player from './Player'

const Home = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element = {<Library/>}/>
            <Route path='/Feed' element = {<Feeds/>}/>
            <Route path='/Trending' element = {<Trending/>}/>
            <Route path='/Player' element = {<Player/>}/>
            <Route path='/Favorites' element = {<Favorites/>}/>
        </Routes>
    </Router>
  )
}

export default Home