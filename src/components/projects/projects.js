import React, {useState} from "react";
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, {Dots} from '@brainhubeu/react-carousel'

import './projects.css'

import aws from "../../assets/social/aws.svg"

function SkillCarousel({src, i}) {
    return (
        <div className="carouselItem">
            <img src={src} alt="aws logo"></img>
            <p>I obtained my Certified Cloud Practioner certification through AWS in Feburary of 2020. I had been working with AWS professionally for around a year and felt that a certification was a good way to solidify my skillset with the provider.</p>
        </div>
    )
}

export default function({id}) {
    const [state, changeState] = useState(0)
    const onChange = (event) => changeState(event.target)
    return (
        <div id={id} style={{marginBottom:"30em", width: '70%', marginLeft:"15%"}}>
            <Carousel 
                arrows={true} 
                value={state} 
                onChange={onChange}
            >
                <SkillCarousel src={aws} i={1}></SkillCarousel>
                <SkillCarousel src={aws} i={2}></SkillCarousel>
                <SkillCarousel src={aws} i={3}></SkillCarousel>
            </Carousel>
            <Dots value={state}></Dots>
        </div>
        
    )
}