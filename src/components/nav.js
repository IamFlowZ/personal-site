import React, {useState, useEffect} from 'react'
import './nav.css'

const scrollFunc = () => {
    console.log('i scrolled')
}

export default function() {
    const [scrollY, setScrollY] = useState(0)
    const [show, setShow] = useState(true)
    useEffect(_ => {
        const handleScroll = _ => {
            (window.pageYOffset > scrollY) ?
                setShow(false):
                setShow(true)
            setScrollY(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <div id="navbar" onScroll={scrollFunc} style={{top: show ? "0": "-50px"}}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </div> 
    )
}