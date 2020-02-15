import React, {useState, useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import favicon from './assets/personal/favicon.ico'

import './components/nav/nav.css'
import Post from './components/post/post'
import Contact from './components/contact/contact'
import Thing from './components/projects/projects'

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
  const selected = false
  return (
    <div className="App" >
      <span className={`navDots ${selected ? null: 'selected'}`} style={{top: "45%"}}></span>
      <span className="navDots" style={{top: "50%"}}></span>
      <span className="navDots" style={{top: "75%"}}></span>
      <Contact/>
      <Thing />
    </div>
  );
}

export default App;
