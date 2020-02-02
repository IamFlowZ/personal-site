import React, {useState, useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import './components/nav/nav.css'
import Post from './components/post/post'
import Contact from './components/contact/contact'

const scrollFunc = () => {
  console.log('i scrolled')
}

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [show, setShow] = useState(true)
  useEffect(_ => {
      const handleScroll = _ => {
          (window.pageYOffset > scrollY) ?
              setShow(false):
              setShow(true)
          setScrollY(window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)
      return _ => {
          window.removeEventListener('scroll', handleScroll)
      }
  })
  return (
    <div className="App" >
      <Router>
          <ul id="navbar" style={{listStyleType:"none", top: show ? "0": "-50px"}} onScroll={scrollFunc}>
              <li className="navItem">
                  <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                  <Link to="/">Posts</Link>
              </li>
              <li className="navItem">
                  <Link to="/contact">Contact</Link>
              </li>
              <input type="text"></input>
              <li className="navItem">
                  <Link to="/">Search</Link>
              </li>
          </ul>
          <Switch>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/">
                <Post />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
