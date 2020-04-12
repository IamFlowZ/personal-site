import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import Gallery from "./gallery/gallery";

import awsLogo from "../../assets/icons/social/aws.svg";
import wozULogo from "../../assets/icons/social/woz-u.jpg";
import otherSkillsLogo from "../../assets/icons/personal/otherSkills.svg";

import awsText from "../../assets/markdown/skills/aws";
import schoolText from "../../assets/markdown/skills/web-dev";
import otherText from "../../assets/markdown/skills/other";

import dicewareCap from "../../assets/images/diceware.png";
import dndCap from "../../assets/images/dnd_graphql.png";
import shortcutCap from "../../assets/images/shortcut.png";
import personalSite from "../../assets/images/personalSite.png";

import dicewareText from "../../assets/markdown/projects/diceware";
import dndText from "../../assets/markdown/projects/dnd-graphql";
import shortcutText from "../../assets/markdown/projects/shortcut";
import personalText from "../../assets/markdown/projects/personal-site";

const projects = [
  {
    src: dicewareCap,
    caption: <ReactMarkdown source={dicewareText} />,
  },
  {
    src: dndCap,
    caption: <ReactMarkdown source={dndText} />,
  },
  {
    src: shortcutCap,
    caption: <ReactMarkdown source={shortcutText} />,
  },
  {
    src: personalSite,
    caption: <ReactMarkdown source={personalText} />,
  },
];

const other = [
  {
    src: awsLogo,
    caption: <ReactMarkdown source={awsText} />,
  },
  {
    src: wozULogo,
    caption: <ReactMarkdown source={schoolText} />,
  },
  {
    src: otherSkillsLogo,
    caption: <ReactMarkdown source={otherText} />,
  },
];

const galleries = [<Gallery images={projects} />, <Gallery images={other} />];

export default function () {
  const [selectedTab, setTab] = useState(0);
  return (
    <>
      <ol className="galleryTabs">
        <li>
          <h2
            onClick={() => setTab(0)}
            style={selectedTab === 0 ? { backgroundColor: "#3a4e7a" } : null}
          >
            Projects
          </h2>
        </li>
        <li>
          <h2
            onClick={() => setTab(1)}
            style={selectedTab === 1 ? { backgroundColor: "#3a4e7a" } : null}
          >
            Certifications
          </h2>
        </li>
      </ol>
      {galleries[selectedTab]}
    </>
  );
}
