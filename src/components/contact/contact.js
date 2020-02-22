import React from 'react'

import './contact.css'
import profile from '../../assets/icons/personal/me.png'
import linkedIn from '../../assets/icons/social/linkedIn.svg'
import twitter from '../../assets/icons/social/twitter.svg'
import github from '../../assets/icons/social/github.svg'


export default function() {
    return (
        <div className="contactContainer" id="contact" >
            <div>
                <span></span>
                <img src={profile} alt="my likeness" id="profile"></img>
                <div className="contactSocial">
                    <p>Find me on: </p>
                    <a href="https://www.linkedin.com/in/dakota-lewallen/"><img src={linkedIn} alt="linked in logo" style={{margin: 0, height: "2em", width: "2em", marginRight: "1em"}}></img></a>
                    <a href="https://github.com/IamFlowZ/"><img src={github} alt="github logo" style={{margin: 0, height: "2em", width: "2em", marginRight: "1em"}}></img></a>
                    <a href="https://twitter.com/FastFlowz"><img src={twitter} alt="twitter logo" style={{margin: 0, height: "2em", width: "2em"}}></img></a>
                </div>
            </div>
            <div className="bio">
                <h2>Dakota Lewallen</h2>
                <p>Software Developer</p>
                <p>I enjoy building healthy solutions to life's problems. A part of that is bringing the best tool for the job that's at hand, and that's what motivates me to be always evaluating and expanding my toolbox. If you'd like to see how I do that, check in here regularly and follow me through my social media links. </p>
            </div>
        </div>
    )
}