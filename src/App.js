import React, {useState, useEffect} from 'react';
import './App.css';

import Carousel, { Modal, ModalGateway } from 'react-images';

import Contact from './components/contact/contact'
// import Carousel, {CarouselItem} from './components/project/project'

import ReactMarkdown from 'react-markdown'

// import awsLogo from "./assets/icons/social/aws.svg"
// import wozULogo from "./assets/icons/social/woz-u.jpg"
// import otherSkillsLogo from './assets/icons/personal/otherSkills.svg'

import dicewareCap from './assets/images/diceware.png'
import dndCap from './assets/images/dnd_graphql.png'
import shortcutCap from './assets/images/shortcut.png'
import personalSite from './assets/images/personalSite.png'

// import awsText from './assets/markdown/skills/aws'
// import schoolText from './assets/markdown/skills/web-dev'
// import otherText from './assets/markdown/skills/other'

import dicewareText from './assets/markdown/projects/diceware'
import dndText from './assets/markdown/projects/dnd-graphql'
import shortcutText from './assets/markdown/projects/shortcut'
import personalText from './assets/markdown/projects/personal-site'

const images = [
  {
    src: dicewareCap,
    caption: <ReactMarkdown source={dicewareText} />
  },
  {
    src: dndCap,
    caption: <ReactMarkdown source={dndText} />
  },
  {
    src: shortcutCap,
    caption: <ReactMarkdown source={shortcutText} />
  },
  {
    src: personalSite,
    caption: <ReactMarkdown source={personalText} />
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
  const gutter = 2
  return (
    <div className="App" >
      <div style={{height:"15vh", width: "100%"}} className="sticky_sentinel--top"></div>
      <Contact/>
      <div className="ReactGridGallery" style={{overflow:"hiden", marginLeft:-gutter, marginRight: -gutter}}>
        {images.map((image, i) => (
          <div key={i} style={{float: "left", margin: gutter, overflow:"hidden", paddingBottom:"16%", position:"relative", width:`calc(25% - ${gutter * 2}px`}}>
            <img alt={image.caption} src={image.src} style={{cursor:"pointer", position: "absolute", maxWidth:"100%"}}/>
          </div>
        ))}
      </div>
      <Thing/>
    </div>
  );
}

function Thing(open = true) {
  const [isOpen, openModal] = useState(open)
  const toggleModal = () => openModal(!isOpen)
  return (
    <ModalGateway>
      {isOpen ? (
        <Modal onClose={toggleModal}>
          <Carousel views={images}/>
        </Modal>
      ): null}
    </ModalGateway>
  )
}

// function Thing() {
//   const [selectedIndex, setIndex] = useState(0)
//   const [lightboxIsOpen, openLightBox] = useState(false)
//   return (
//     <>
//       <Gallery>
//         {images.map(image => (
//           <Image onClick={() => openLightBox(!lightboxIsOpen)} key={}></Image>
//         ))}
//       </Gallery>
//     </>
//   )
// }

// const Gallery = (props) => {
//   <div
//     css={{
//       overflow: 'hidden',
//       marginLeft: -gutter,
//       marginRight: -gutter,
//     }}
//     {...props}
//   />
// }

// const Image = (props) => (
//   <div
//     css={{
//       backgroundColor: '#eee',
//       boxSizing: 'border-box',
//       float: 'left',
//       margin: gutter,
//       overflow: 'hidden',
//       paddingBottom: '16%',
//       position: 'relative',
//       width: `calc(25% - ${gutter * 2}px)`,

//       ':hover': {
//         opacity: 0.9,
//       },
//     }}
//     {...props}
//   />
// );

export default App;
