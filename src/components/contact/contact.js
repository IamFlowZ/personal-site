import React from "react";

import "./contact.css";
import profile from "../../assets/icons/personal/me.jpg";
import linkedIn from "../../assets/icons/social/linkedIn.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import github from "../../assets/icons/social/github.svg";

export default function () {
  // const [contactHidden, hideContact] = useState(false)
  // useEffect(_ => {
  //   const target = document.querySelector("#Contact")
  //   const handleScroll = _ => {
  //     target.getBoundingClientRect().y === 0 ? console.log("yes") : console.log("no")
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return _ => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // })
  return (
    <div className="contactContainer" id="Contact">
      <img src={profile} alt="my likeness" id="profile"></img>
      <div className="bio">
        <h2>I'm Dakota Lewallen.</h2>
        <p>
          I enjoy building effective solutions to complex issues, by employing
          concise and collaborative technologies.
        </p>

        <div className="contactSocial">
          <p>Find me on: </p>
          <a href="https://www.linkedin.com/in/dakota-lewallen/">
            <img
              src={linkedIn}
              alt="linked in logo"
              style={{
                margin: 0,
                height: "2em",
                width: "2em",
                marginRight: "1em",
              }}
            ></img>
          </a>
          <a href="https://github.com/IamFlowZ/">
            <img
              src={github}
              alt="github logo"
              style={{
                margin: 0,
                height: "2em",
                width: "2em",
                marginRight: "1em",
              }}
            ></img>
          </a>
          <a href="https://twitter.com/FastFlowz">
            <img
              src={twitter}
              alt="twitter logo"
              style={{
                margin: 0,
                height: "2em",
                width: "2em",
                marginRight: "1em",
              }}
            ></img>
          </a>
          <a href="https://dev.to/fastflowz">
            <img
              style={{ margin: 0, height: "2.25em", width: "2.25em" }}
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Dakota Lewallen's DEV Profile"
              height="30"
              width="30"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
