import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from '@brainhubeu/react-carousel'

// import './project.css'

export function CarouselItem({src, text, alt}) {
    return (
        <div className={`carouselItem${src ? ' hasImg': ''}`}>
            {src ? 
                <img src={src} alt={alt}></img>: 
                ''
            }
            <ReactMarkdown source={text}/>
        </div>
    )
}

export default function({id, children, title}) {
    const [state, changeState] = useState(0)
    const onChange = (event) => changeState(event.target)
    return (
        <>
            <h1 id={id}>{title}</h1>
            <div className="carousel" style={{position: 'relative'}}>
                <Carousel 
                    arrowLeft={<FontAwesomeIcon className="arrows" icon={faArrowCircleLeft} size="3x"/>}
                    arrowRight={<FontAwesomeIcon className="arrows" icon={faArrowCircleRight} size="3x"/>}
                    addArrowClickHandler={true}
                    value={state} 
                    onChange={onChange}
                    autoPlay={6000}
                    stopAutoPlayOnHover={true}
                    infinite={true}
                    slides={children}
                    breakpoints={{
                        1200: {
                            arrowLeft: false,
                            arrowRight: false
                        }
                    }}
                    >
                </Carousel>
            </div>
        </>
    )
}