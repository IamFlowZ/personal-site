import React from 'react'
import './navDot.css'

export default function({state, title, top}) {
    return (
        <span className={`navDots${state ? ' selected': ''}`} style={{top: top}}>
            <a href={`#${title}`}>{title}</a>
        </span>
    )
}