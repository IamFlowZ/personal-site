import React, {useState, useEffect} from 'react';
import './App.css';

import './components/nav/nav.css'
import Contact from './components/contact/contact'
import Carousel, {CarouselItem} from './components/projects/projects'

import aws from "./assets/icons/social/aws.svg"
import wozU from "./assets/icons/social/woz-u.jpg"
import otherSkills from './assets/icons/personal/otherSkills.svg'

const text = "I obtained my Certified Cloud Practioner certification through AWS in Feburary of 2020. I had been working with AWS professionally for around a year and felt that a certification was a good way to solidify my skillset with the provider."

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
        <CarouselItem src={aws} text={text}></CarouselItem>
        <CarouselItem src={wozU} text={text}></CarouselItem>
        <CarouselItem src={otherSkills} text={text}></CarouselItem>
      </Carousel>
      <Carousel id="projects">
        <CarouselItem src={aws} text={text}></CarouselItem>
        <CarouselItem src={wozU} text={text}></CarouselItem>
        <CarouselItem src={otherSkills} text={text}></CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
