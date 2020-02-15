import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function() {
    return (
        <Carousel showThumbs={false} infiniteLoop={true}>
            <div>
                <p className="legend">Thing 1</p>
            </div>
            <div>
                <p className="legend">Thing 2</p>
            </div>
            <div>
                <p className="legend">Thing 3</p>
            </div>
        </Carousel>
    )
}