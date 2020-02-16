import React, {useState, useEffect} from 'react';
import './App.css';

import './components/nav/nav.css'
import Contact from './components/contact/contact'
import Thing from './components/projects/projects'

function App() {
  const [firstDot, setFirstDot] = useState(true)
  const [secondDot, setSecondDot] = useState(false)
  const [thirdDot, setThirdDot] = useState(false)
  useEffect(_ => {
    const handleScroll = _ => {
      const position = window.pageYOffset / window.scrollMaxY
      setFirstDot(position < 0.3)
      setSecondDot(position >= 0.3 && position < 0.75)
      setThirdDot(position >= 0.75)
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
        window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return (
    <div className="App" >
      <span className={`navDots${firstDot ? ' selected': ''}`} style={{top: "45%"}}>
        <a href="#"></a>
      </span>
      <span className={`navDots${secondDot ? ' selected': ''}`} style={{top: "50%"}}>
        <a href="#skills"></a>
      </span>
      <span className={`navDots${thirdDot ? ' selected': ''}`} style={{top: "55%"}}>
        <a href="#projects"></a>
      </span>
      <Contact/>
      <Thing id="skills"/>
      <Thing id="projects"/>
    </div>
  );
}

export default App;
