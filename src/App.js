import React, {useState, useEffect} from 'react';
import './App.css';

import './components/nav/nav.css'
import Contact from './components/contact/contact'
import Carousel, {CarouselItem} from './components/projects/projects'

import awsLogo from "./assets/icons/social/aws.svg"
import wozULogo from "./assets/icons/social/woz-u.jpg"
import otherSkillsLogo from './assets/icons/personal/otherSkills.svg'

import awsText from './assets/markdown/skills/aws'
import schoolText from './assets/markdown/skills/web-dev'
import otherText from './assets/markdown/skills/other'

import dicewareText from './assets/markdown/projects/diceware'
import dndText from './assets/markdown/projects/dnd-graphql'
import shortcutText from './assets/markdown/projects/shortcut'
import personalText from './assets/markdown/projects/personal-site'

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
      <Carousel id="skills">
        <CarouselItem src={awsLogo} text={awsText}></CarouselItem>
        <CarouselItem src={wozULogo} text={schoolText}></CarouselItem>
        <CarouselItem src={otherSkillsLogo} text={otherText}></CarouselItem>
      </Carousel>
      <Carousel id="projects">
        <CarouselItem src={awsLogo} text={dicewareText}></CarouselItem>
        <CarouselItem src={wozULogo} text={dndText}></CarouselItem>
        <CarouselItem src={otherSkillsLogo} text={shortcutText}></CarouselItem>
        <CarouselItem src={otherSkillsLogo} text={personalText}></CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
