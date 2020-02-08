import React from 'react'
import './contact.css'
import profile from '../../assets/personal/me.png'
import linkedIn from '../../assets/social/linkedIn.svg'
import twitter from '../../assets/social/twitter.svg'
import github from '../../assets/social/github.svg'

export default function() {
    return (
        <div className="contactContainer">
            <div>
                <span></span>
                <img src={profile} alt="my likeness"></img>
                <div className="contactSocial">
                    <p>Find me on: </p>
                    <img src={linkedIn} alt="linked in logo" style={{margin: 0, height: "2em", width: "2em", marginRight: "1em"}}></img>
                    <img src={github} alt="github logo" style={{margin: 0, height: "2em", width: "2em", marginRight: "1em"}}></img>
                    <img src={twitter} alt="twitter logo" style={{margin: 0, height: "2em", width: "2em"}}></img>
                </div>
            </div>
            <div className="bio">
                <h2>Dakota Lewallen</h2>
                <p>Software Developer</p>
                <p>Bio</p>
            </div>
        </div>
    )
}