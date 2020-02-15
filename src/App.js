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
      <span className={`navDots ${firstDot ? 'selected': null}`} style={{top: "45%"}}></span>
      <span className={`navDots ${secondDot ? 'selected': null}`} style={{top: "50%"}}></span>
      <span className={`navDots ${thirdDot ? 'selected': null}`} style={{top: "55%"}}></span>
      <Contact/>
      <Thing />
    </div>
  );
}

export default App;
