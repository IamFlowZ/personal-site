import React, {useState, useEffect} from 'react';
import './App.css';

import NavDot from './components/navDot/navDot'

import Contact from './components/contact/contact'
import Carousel, {CarouselItem} from './components/project/project'

import ReactMarkdown from 'react-markdown'
import Gallery from 'react-grid-gallery'

import awsLogo from "./assets/icons/social/aws.svg"
import wozULogo from "./assets/icons/social/woz-u.jpg"
import otherSkillsLogo from './assets/icons/personal/otherSkills.svg'

import dicewareCap from './assets/images/diceware.png'
import dndCap from './assets/images/dnd_graphql.png'
import shortcutCap from './assets/images/shortcut.png'
import personalSite from './assets/images/personalSite.png'

import awsText from './assets/markdown/skills/aws'
import schoolText from './assets/markdown/skills/web-dev'
import otherText from './assets/markdown/skills/other'

import dicewareText from './assets/markdown/projects/diceware'
import dndText from './assets/markdown/projects/dnd-graphql'
import shortcutText from './assets/markdown/projects/shortcut'
import personalText from './assets/markdown/projects/personal-site'

const images = [
  {
    src: dicewareCap,
    thumbnail: dicewareCap,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption:<ReactMarkdown source={dicewareText} />
  },
  {
    src: dndCap,
    thumbnail: dndCap,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption:"TEST"
  },
  {
    src: shortcutCap,
    thumbnail: shortcutCap,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption:"TEST"
  },
  {
    src: personalSite,
    thumbnail: personalSite,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption:"TEST"
  }
]

function App() {
  const [contactHidden, hideContact] = useState(false)
  useEffect(_ => {
    const target = document.querySelector("#Contact")
    const handleScroll = _ => {
      target.getBoundingClientRect().y === 0 ? console.log("yes") : console.log("no")
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className="App" >
      <div style={{height:"15vh", width: "100%"}} className="sticky_sentinel--top"></div>
      <Contact/>
      <Gallery images={images} enableImageSelection={false}></Gallery>
    </div>
  );
}

export default App;
