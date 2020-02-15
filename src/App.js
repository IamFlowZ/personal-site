import React, {useState, useEffect} from 'react';
import './App.css';

import './components/nav/nav.css'
import Contact from './components/contact/contact'
import Thing from './components/projects/projects'

const scrollFunc = () => {
  console.log('i scrolled')
}

function App() {
  const [firstDot, setFirstDot] = useState(true)
  const [secondDot, setSecondDot] = useState(false)
  const [thirdDot, setThirdDot] = useState(false)
  useEffect(_ => {
      const handleScroll = _ => {
          setFirstDot(window.pageYOffset === 0)
          setThirdDot(window.scrollMaxY === window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)
      return _ => {
          window.removeEventListener('scroll', handleScroll)
      }
  })
  
  return (
    <div className="App" >
      <span className={`navDots${firstDot ? ' selected': ''}`} style={{top: "45%"}}>
        <a href="#" style={{display:"inline-block", height:"15px", width: "15px"}}></a>
      </span>
      <span className={`navDots${secondDot ? ' selected': ''}`} style={{top: "50%"}}>
        <a href="#skills" style={{display:"inline-block", height:"15px", width: "15px"}}></a>
      </span>
      <span className={`navDots${thirdDot ? ' selected': ''}`} style={{top: "55%"}}>
        <a href="#projects" style={{display:"inline-block", height:"15px", width: "15px"}}></a>
      </span>
      <Contact/>
      <Thing id="skills"/>
      <Thing id="projects"/>
    </div>
  );
}

export default App;
