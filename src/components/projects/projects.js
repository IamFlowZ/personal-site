import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'
// import fs from 'fs'

import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, {Dots} from '@brainhubeu/react-carousel'

import './projects.css'

import aws from "../../assets/icons/social/aws.svg"
import wozU from "../../assets/icons/social/woz-u.jpg"
import otherSkills from '../../assets/icons/personal/otherSkills.svg'
import dice from '../../assets/icons/personal/2-Dice-Icon.svg'
// const awsText = fs.readFileSync('../../assets/markdown/skills/aws.md').toString()

const text = "I obtained my Certified Cloud Practioner certification through AWS in Feburary of 2020. I had been working with AWS professionally for around a year and felt that a certification was a good way to solidify my skillset with the provider."

function SkillCarousel({src, text}) {
    return (
        <div className="carouselItem">
            <img src={src} alt="aws logo"></img>
            <ReactMarkdown source={text}/>
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
                autoPlay={3000}
                stopAutoPlayOnHover={true}
                infinite={true}>
                <SkillCarousel src={aws} text={text}></SkillCarousel>
                <SkillCarousel src={wozU} text={text}></SkillCarousel>
                <SkillCarousel src={otherSkills} text={text}></SkillCarousel>
            </Carousel>
        </div>
        
    )
}