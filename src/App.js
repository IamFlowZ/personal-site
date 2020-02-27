import React, {useState, useEffect} from 'react';
import './App.css';

import NavDot from './components/navDot/navDot'

import Contact from './components/contact/contact'
import Carousel, {CarouselItem} from './components/project/project'

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
      <ol style={{listStyleType:"none", visibility: window.innerWidth < 500 ? "hidden": "visible"}}>
        <li><NavDot state={firstDot} title="Contact" top="45%"/></li>
        <li><NavDot state={secondDot} title="Skills" top="50%"/></li>
        <li><NavDot state={thirdDot} title="Projects" top="55%"/></li>
      </ol>
      <Contact/>
      <Carousel id="Skills" title="Certifications & Skills">
        <CarouselItem src={awsLogo} text={awsText}></CarouselItem>
        <CarouselItem src={wozULogo} text={schoolText}></CarouselItem>
        <CarouselItem src={otherSkillsLogo} text={otherText}></CarouselItem>
      </Carousel>
      <Carousel id="Projects" title="Projects">
        <CarouselItem text={dicewareText}></CarouselItem>
        <CarouselItem text={dndText}></CarouselItem>
        <CarouselItem text={shortcutText}></CarouselItem>
        <CarouselItem text={personalText}></CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
