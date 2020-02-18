import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from '@brainhubeu/react-carousel'

import './projects.css'

export function CarouselItem({src, text}) {
    return (
        <div className="carouselItem">
            <img src={src} alt="logo"></img>
            <ReactMarkdown source={text}/>
        </div>
    )
}

export default function({id, children}) {
    const [state, changeState] = useState(0)
    const onChange = (event) => changeState(event.target)
    return (
        <div id={id} style={{marginBottom:"20em", width: '70%', marginLeft:"15%"}}>
            <Carousel 
                arrowLeft={<FontAwesomeIcon className="arrows" icon={faArrowCircleLeft} size="3x"/>}
                arrowRight={<FontAwesomeIcon className="arrows" icon={faArrowCircleRight} size="3x"/>}
                addArrowClickHandler={true}
                value={state} 
                onChange={onChange}
                autoPlay={4000}
                stopAutoPlayOnHover={true}
                infinite={true}
                slides={children}>
            </Carousel>
        </div>
        
    )
}