import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import Carousel, { Modal, ModalGateway } from 'react-images';

// import awsLogo from "./assets/icons/social/aws.svg"
// import wozULogo from "./assets/icons/social/woz-u.jpg"
// import otherSkillsLogo from './assets/icons/personal/otherSkills.svg'

// import awsText from './assets/markdown/skills/aws'
// import schoolText from './assets/markdown/skills/web-dev'
// import otherText from './assets/markdown/skills/other'

import dicewareCap from '../../assets/images/diceware.png'
import dndCap from '../../assets/images/dnd_graphql.png'
import shortcutCap from '../../assets/images/shortcut.png'
import personalSite from '../../assets/images/personalSite.png'

import dicewareText from '../../assets/markdown/projects/diceware'
import dndText from '../../assets/markdown/projects/dnd-graphql'
import shortcutText from '../../assets/markdown/projects/shortcut'
import personalText from '../../assets/markdown/projects/personal-site'

import "./gallery.css"

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

export default function() {
	const [isOpen, openModal] = useState(false)
	const [currentIndex, setIndex] = useState(0)
	const toggleModal = (i) => {
	  setIndex(i)
	  return openModal(!isOpen)
	}
	const gutter = 2
 return (
	 <>
	  <h1 style={{width:"100%", textAlign:"center", marginBottom:"0.5rem"}}>Projects</h1>
    <div className="ReactGridGallery">
	  {images.map((image, i) => (
      <div key={i}>
        <img onClick={() => toggleModal(i)} alt={image.caption} src={image.src} style={{width: "100%", cursor:"pointer", maxWidth:"100%", height:"10rem", marginBottom: "0"}}/>
      </div>
	  ))}
	</div>
	<ModalGateway>
	  {isOpen ? (
		<Modal onClose={() => toggleModal(currentIndex)}>
		  <Carousel views={images} currentIndex={currentIndex} />
		</Modal>
	  ): null}
	</ModalGateway>
	</>
 )
}