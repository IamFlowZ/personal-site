import React, {useState, useEffect} from 'react'
import './nav.css'

const scrollFunc = () => {
    console.log('i scrolled')
}

export default function() {
    const [scrollY, setScrollY] = useState(0)
    const prevPos = window.pageYOffset
    useEffect(_ => {
        const handleScroll = _ => {
            if(window.pageYOffset > 1) {
                console.log('scrolled', window.pageYOffset)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <div id="navbar" onScroll={scrollFunc}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </div> 
    )
}