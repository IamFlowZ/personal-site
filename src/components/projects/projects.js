import React, {useState} from "react";
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, {Dots} from '@brainhubeu/react-carousel'

import aws from "../../assets/social/aws.svg"

function SkillCarousel({src, i}) {
    return (
        <div>
            <img src={src} alt="aws logo" style={{height: "250px", width:"550px", backgroundColor:"white"}}></img>
            <p>Thing {i}</p>
        </div>
    )
}

export default function({id}) {
    const [state, changeState] = useState(0)
    const onChange = (event) => changeState(event.target)
    return (
        <div id={id} style={{marginBottom:"37em"}}>
            <Carousel arrows={true} value={state} onChange={onChange}>
                <SkillCarousel src={aws} i={1}></SkillCarousel>
                <SkillCarousel src={aws} i={2}></SkillCarousel>
                <SkillCarousel src={aws} i={3}></SkillCarousel>
            </Carousel>
            <Dots value={state}></Dots>
        </div>
        
    )
}